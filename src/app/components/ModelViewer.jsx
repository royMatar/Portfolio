"use client";
import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Rotating Model Component
function RotatingModel({ path }) {
  const { scene } = useGLTF(path);

  // Rotate the model on every frame
  useFrame(({ clock }) => {
    scene.rotation.y = clock.getElapsedTime() * 0.5; // Adjust rotation speed here
  });

  return <primitive object={scene} scale={4} />;
}

export default function ModelViewer() {
  return (
    <div style={{ cursor: 'grab' }}>
      <Canvas 
        camera={{ fov: 25, position: [2, 4, 10] }} 
        style={{ height: '500px' }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <RotatingModel path="/models/marble_bust_01_4k.glb" />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
