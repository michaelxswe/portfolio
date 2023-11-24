import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Loader from './Loader'

const Model = () => {
  const planet = useGLTF('./planet/scene.gltf')
  return (
    <primitive
      object={planet.scene}
      scale={2.25}
      position-y={-0.85}
      rotation-y={0}
    />
  )
}

const Earth = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default Earth
