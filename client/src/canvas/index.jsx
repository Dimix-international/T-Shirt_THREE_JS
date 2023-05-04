import { Canvas } from '@react-three/fiber'
import {Environment, Center, OrbitControls} from '@react-three/drei';
import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import Floor from "../components/Floor.jsx";
import {useSnapshot} from "valtio";
import state from "../store/index.js";


const CanvasModel  = () => {
  const snap = useSnapshot(state);
    return (
        <Canvas
          shadows
          camera={{position: [0,0,1.2]}}
        >
            <pointLight
              position={[0,0.2,1.5]}
              visble={true}
              castShadow={true}
            />
            <Environment preset={'city'} background blur={0.4}/>

{/*            <CameraRig>
              <Backdrop />
              <Center>
                <Shirt />
              </Center>
            </CameraRig>*/}
          <Center>
            <Shirt />
            {
              !snap.intro && <Floor />
            }
          </Center>
          <OrbitControls
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 6}
          />
        </Canvas>
    )
}

export default CanvasModel;