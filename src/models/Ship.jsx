import React from 'react'
import shipScene from "../assets/3d/ship.glb"
import { useGLTF } from '@react-three/drei'

const Ship = ({ isRotating, ...props}) => {

  const { scene, animations} = useGLTF(shipScene)

  return (
    <mesh {...props} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Ship