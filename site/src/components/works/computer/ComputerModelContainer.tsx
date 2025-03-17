import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { ComputerModel } from "./ComputerModel"
import { OrbitControls,  PerspectiveCamera,Stage } from "@react-three/drei"

function ComputerModelContainer(){
    return(
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="city" intensity={1}>
                <ComputerModel />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate/>
                <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
            </Suspense>
        </Canvas>
    )
}

export default ComputerModelContainer