import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['Pencil_01_-_Default_0']: THREE.Mesh
    Rectangle004__0: THREE.Mesh
  }
  materials: {
    ['01_-_Default']: THREE.MeshBasicMaterial
    Rectangle004__0: THREE.MeshBasicMaterial
  }
  animations: GLTFAction[]
}

export function PencilModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/pencilModel.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Pencil_01_-_Default_0'].geometry} material={materials['01_-_Default']} position={[-2.364, 21.712, -37.711]} rotation={[-1.073, -1.397, 2.78]} scale={1.058} />
      <mesh geometry={nodes.Rectangle004__0.geometry} material={materials.Rectangle004__0} rotation={[-Math.PI / 2, 0, 0.698]} />
    </group>
  )
}

useGLTF.preload('/pencilModel.glb')
