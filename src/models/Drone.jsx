import React, { useEffect, useRef } from 'react'
import droneScene from "../assets/3d/drone.glb"
import { useAnimations, useGLTF } from '@react-three/drei'

const Drone = ({ isRotating, droneScale, dronePosition, rotation }) => {

  const droneRef = useRef();

  const { scene, animations } = useGLTF(droneScene);
  const { actions } = useAnimations(animations, droneRef);

  useEffect(() => {
    if(isRotating) {
      actions['Take 001']?.play();
    } else {
      actions['Take 001']?.stop();
    }
  }, [actions, isRotating])

  return (
    <group 
      ref={droneRef} 
      position={dronePosition}
      rotation={rotation}
      scale={droneScale}
    >
      <primitive object={scene} />
    </group>
  )
}

export default Drone