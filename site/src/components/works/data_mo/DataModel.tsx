import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
  }
  materials: {
    material: THREE.MeshStandardMaterial
    Mat_2: THREE.MeshStandardMaterial
    Mat_1: THREE.MeshPhysicalMaterial
  }
  animations: GLTFAction[]
}

export function DataModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/dataModel.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.005}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Mat_2} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Mat_1} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/dataModel.glb')
