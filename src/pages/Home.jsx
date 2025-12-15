import React, { useState, useEffect, useRef } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Drone from '../models/Drone'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import sound from '../assets/Aylex-Stylish.mp3'
import soundon from '../assets/icons/soundon.png'
import soundoff from '../assets/icons/soundoff.png'


const Home = () => {

  const audioRef = useRef(new Audio(sound));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  // Island
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -33, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [8, 8, 8];
    } else {
      screenScale = [9, 9, 9];
    }

    return [screenScale, screenPosition, rotation]
  }

  // Drone
  const adjustDroneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, -1.5, 1];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -0.8, -3];
    }

    return [screenScale, screenPosition]
  }

  // Plane
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [0, -1, 1];
    } else {
      screenScale = [2, 2, 2];
      screenPosition = [0, -1.3, -2];
    }

    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  const [droneScale, dronePosition] = adjustDroneForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div> 
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near:0.1, far:1000 }}
      >
        <Suspense fallback={<Loader/>}>

          <directionalLight position={[1, 1, 1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

          <Bird/>
          <Sky
            isRotating={isRotating}
          />

          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          {/* <Drone
            isRotating={isRotating}
            droneScale={droneScale}
            dronePosition={dronePosition}
            rotation={[0, 9.5, 0]}
          /> */}

          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 1.5, 0.2]}
          />

        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon} 
          alt="sound"
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home