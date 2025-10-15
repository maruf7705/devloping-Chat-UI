import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Effects } from '@react-three/drei';
import * as THREE from 'three';

const GlowingSphere: React.FC = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y += 0.001;
      mesh.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <Sphere ref={mesh} args={[1, 32, 32]}>
      <meshStandardMaterial
        color="#00D1FF"
        emissive="#00D1FF"
        emissiveIntensity={2}
        toneMapped={false}
      />
    </Sphere>
  );
};

const Scene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <GlowingSphere />
      <Effects>
        <unrealBloomPass threshold={0.5} strength={1.5} radius={1} />
      </Effects>
    </Canvas>
  );
};

export default Scene;
