import React, { useRef, useEffect } from 'react'

import planeScene from '../assets/3d/plane1.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, ...props}) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        if(isRotating) {
            actions['Take 001'].play();
        } else {
            actions['Take 001'].stop();
        }
    }, [actions, isRotating])

  return (
    <mesh {...props} scale={0.15} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane