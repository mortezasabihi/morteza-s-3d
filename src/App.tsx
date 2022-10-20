import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model, Loading } from './Components';

const App: React.FC = () => {
  return (
    <div className="flex items-stretch">
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 13 }}
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
          minPolarAngle={0}
          maxPolarAngle={Math.PI * 0.5}
        />
      </Canvas>
    </div>
  );
};

export default App;
