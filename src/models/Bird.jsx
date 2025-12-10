import React, { useEffect, useRef } from 'react'
import birdScene from "../assets/3d/bird.glb"
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    // if (actions && Object.keys(actions).length > 0) {
    //   Object.values(actions).forEach(action => action?.play());
    // }
    actions['Take 001'].play();
  }, [actions]);

  useFrame(({ clock, camera }) => {
    //Update the y position simulate the flight moving in a sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if(birdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if(birdRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and rest the bird's rotation
      birdRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on direction
    if(birdRef.current.rotation.y === 0) {
      // Move forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Move backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  })

  // useFrame(({ clock }) => {
  //   if (birdRef.current) {
  //     const time = clock.elapsedTime;
      
  //     // Circular flight path
  //     birdRef.current.position.y = Math.sin(time * 0.5) * 0.5 + 2;
  //     birdRef.current.position.x = Math.cos(time * 0.5) * 5;
  //     birdRef.current.position.z = Math.sin(time * 0.5) * 5 - 10;
      
  //     // Smooth rotation following flight direction
  //     birdRef.current.rotation.y = Math.atan2(
  //       Math.sin(time * 0.5),
  //       Math.cos(time * 0.5)
  //     ) + Math.PI / 2;
  //   }
  // });

  return (
    // <group ref={birdRef} position={[-5,2,1]} scale={[0.003, 0.003, 0.003]}>
    //   <primitive object={scene.clone()} />
    // </group>
    <mesh
      position={[-5,2,1]} 
      scale={[0.003, 0.003, 0.003]}
      ref={birdRef}
    >
      <primitive object={scene}/>
    </mesh>
  )
}

export default Bird