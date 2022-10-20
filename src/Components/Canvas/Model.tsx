import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Body001: THREE.SkinnedMesh;
    Wolf3D_Glasses001: THREE.SkinnedMesh;
    Wolf3D_Hair001: THREE.SkinnedMesh;
    Wolf3D_Outfit_Bottom001: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear001: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top001: THREE.SkinnedMesh;
    EyeLeft001: THREE.SkinnedMesh;
    EyeRight001: THREE.SkinnedMesh;
    Wolf3D_Head001: THREE.SkinnedMesh;
    Wolf3D_Teeth001: THREE.SkinnedMesh;
    Hips: THREE.Bone;
  };
  materials: {
    ['Wolf3D_Body.001']: THREE.MeshStandardMaterial;
    ['Wolf3D_Glasses.001']: THREE.MeshStandardMaterial;
    ['Wolf3D_Hair.001']: THREE.MeshStandardMaterial;
    ['Wolf3D_Outfit_Bottom.001']: THREE.MeshStandardMaterial;
    ['Wolf3D_Outfit_Footwear.001']: THREE.MeshStandardMaterial;
    ['Wolf3D_Outfit_Top.001']: THREE.MeshStandardMaterial;
    ['Wolf3D_Eye.001']: THREE.MeshStandardMaterial;
    ['Wolf3D_Skin.001']: THREE.MeshStandardMaterial;
    ['Wolf3D_Teeth.001']: THREE.MeshStandardMaterial;
  };
};

const MODEL_PATH = '/Model.glb';

const Model: React.FC<JSX.IntrinsicElements['group']> = (props) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    MODEL_PATH
  ) as unknown as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions['Armature|mixamo.com|Layer0']?.play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="Wolf3D_Body001"
            geometry={nodes.Wolf3D_Body001.geometry}
            material={materials['Wolf3D_Body.001']}
            skeleton={nodes.Wolf3D_Body001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Glasses001"
            geometry={nodes.Wolf3D_Glasses001.geometry}
            material={materials['Wolf3D_Glasses.001']}
            skeleton={nodes.Wolf3D_Glasses001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair001"
            geometry={nodes.Wolf3D_Hair001.geometry}
            material={materials['Wolf3D_Hair.001']}
            skeleton={nodes.Wolf3D_Hair001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom001"
            geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
            material={materials['Wolf3D_Outfit_Bottom.001']}
            skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear001"
            geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
            material={materials['Wolf3D_Outfit_Footwear.001']}
            skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top001"
            geometry={nodes.Wolf3D_Outfit_Top001.geometry}
            material={materials['Wolf3D_Outfit_Top.001']}
            skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
          />
          <skinnedMesh
            name="EyeLeft001"
            geometry={nodes.EyeLeft001.geometry}
            material={materials['Wolf3D_Eye.001']}
            skeleton={nodes.EyeLeft001.skeleton}
            morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight001"
            geometry={nodes.EyeRight001.geometry}
            material={materials['Wolf3D_Eye.001']}
            skeleton={nodes.EyeRight001.skeleton}
            morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head001"
            geometry={nodes.Wolf3D_Head001.geometry}
            material={materials['Wolf3D_Skin.001']}
            skeleton={nodes.Wolf3D_Head001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Teeth001"
            geometry={nodes.Wolf3D_Teeth001.geometry}
            material={materials['Wolf3D_Teeth.001']}
            skeleton={nodes.Wolf3D_Teeth001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload(MODEL_PATH);

export default Model;
