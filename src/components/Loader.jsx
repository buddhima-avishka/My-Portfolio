import React from 'react'
import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
      <div className='flex flex-col items-center justify-center gap-4'>
        <p className='text-blue-500 font-semibold' style={{ fontFamily: 'SpButchLiteLight, sans-serif' }}>Loading...</p>
        <div 
          className='w-20 h-20 rounded-full animate-spin'
          style={{
            border: '2px solid transparent',
            borderTopColor: '#3b82f6',
            borderRightColor: '#3b82f6',
            borderBottomColor: '#3b82f6',
          }}
        />
      </div>
    </Html>
  )
}

export default Loader