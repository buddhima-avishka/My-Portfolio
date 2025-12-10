import React, { useEffect, useRef } from 'react'
import planeScene from "../assets/3d/plane.glb"
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({ isRotating, planeScale, planePosition, rotation }) => {

  const planeRef = useRef();

  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    if(isRotating) {
      actions['Take 001']?.play();
    } else {
      actions['Take 001']?.stop();
    }
  }, [actions, isRotating])

  return (
    <group 
      ref={planeRef} 
      position={planePosition}
      rotation={rotation}
      scale={planeScale}
    >
      <primitive object={scene} />
    </group>
  )
}

export default Plane