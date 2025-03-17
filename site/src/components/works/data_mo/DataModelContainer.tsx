import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { DataModel } from './DataModel'
import { OrbitControls,  PerspectiveCamera,Stage } from "@react-three/drei"

function DataModelContainer(){
    return(
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="city" intensity={0.5}>
                <DataModel />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate/>
                <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
            </Suspense>
        </Canvas>
    )
}

export default DataModelContainer