import React, { useRef } from 'react'
import skyScene from "../assets/3d/sky.glb"
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Sky = ({isRotating}) => {

  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if(isRotating) {
      skyRef.current.rotation.y += 0.15 * delta
    }
  })

  return (
    <mesh ref={skyRef} scale={[550, 550, 550]} position={[0, -100, 0]}>
      <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky