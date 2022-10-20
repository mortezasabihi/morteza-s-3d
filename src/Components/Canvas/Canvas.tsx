import { Suspense } from 'react';
import { Canvas as ThreeCanvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';
import Loading from './Loading';

const Canvas: React.FC = () => (
  <ThreeCanvas
    camera={{ position: [2, 0, 12.25], fov: 11 }}
    style={{
      backgroundColor: '#111a21',
      width: '100vw',
      height: '100vh',
    }}
  >
    <ambientLight intensity={1.25} />
    <ambientLight intensity={0.1} />
    <directionalLight intensity={0.4} />
    <Suspense fallback={<Loading />}>
      <Model position={[0.025, -0.9, 0]} />
    </Suspense>
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      minPolarAngle={Math.PI * 0.2}
      maxPolarAngle={Math.PI * 0.3}
      minAzimuthAngle={Math.PI * -0.3}
      maxAzimuthAngle={Math.PI * 0.3}
    />
  </ThreeCanvas>
);

export default Canvas;
