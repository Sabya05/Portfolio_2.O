import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";

function ParticleField() {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(4000 * 3);

    for (let i = 0; i < 4000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }

    return positions;
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={particles}
      stride={3}
      frustumCulled
    >
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}