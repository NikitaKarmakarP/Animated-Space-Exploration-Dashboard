import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';

const RocketAnimation = () => {
    const rocketRef = useRef();

    useFrame(() => {
        if (rocketRef.current) {
            rocketRef.current.position.y += 0.02;
        }
    });

    return (
        <mesh ref={rocketRef} position={[0, -1, 0]}>
            <coneGeometry args={[0.5, 1.5, 32]} />
            <MeshWobbleMaterial attach="material" color="red" speed={1} />
        </mesh>
    );
};

export default RocketAnimation;
