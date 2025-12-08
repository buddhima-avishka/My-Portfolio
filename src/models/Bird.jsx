import React, { useEffect, useRef } from 'react'
import birdScene from "../assets/3d/bird.glb"
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      Object.values(actions).forEach(action => action?.play());
    }
  }, [actions]);

  useFrame(({ clock }) => {
    if (birdRef.current) {
      const time = clock.elapsedTime;
      
      // Circular flight path
      birdRef.current.position.y = Math.sin(time * 0.5) * 0.5 + 2;
      birdRef.current.position.x = Math.cos(time * 0.5) * 5;
      birdRef.current.position.z = Math.sin(time * 0.5) * 5 - 10;
      
      // Smooth rotation following flight direction
      birdRef.current.rotation.y = Math.atan2(
        Math.sin(time * 0.5),
        Math.cos(time * 0.5)
      ) + Math.PI / 2;
    }
  });

  return (
    <group ref={birdRef} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene.clone()} />
    </group>
  )
}

export default Bird