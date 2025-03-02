import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { ModelActionsContext } from '@/app/context/r3f/modelActionsContext';
import ModelActions from '../../../../utils/r3f/model/modelActions';
import ModelConstructor from '../../../../utils/r3f/model/modelConstructor';
import { ModelActionsPlaySwitchContext } from '@/app/context/r3f/modelActionsPlaySwitchContext';
import { HasScreenLoadedContext } from '@/app/context/loading/has-screen-loaded';

const STOP_ANIMATION = 7;

export function Face() {
  const { group, nodes, materials, actions } = ModelConstructor();
  const actionsArr = ModelActions();
  const actionIndex = useContext(ModelActionsContext);
  const playModelActionsContext = useContext(ModelActionsPlaySwitchContext);
  const [actionPlaying, setActionPlaying] = useState(undefined);
  const [scale, setScale] = useState(0);

  useLayoutEffect(() => {
    if (actionPlaying) {
      actions[actionPlaying].stop();
      actions[actionPlaying].reset();
    }
    setActionPlaying(actionsArr[actionIndex]);
  }, [actionIndex, actionPlaying, playModelActionsContext]);

  useEffect(() => {
    if (
      actionPlaying &&
      actionIndex !== STOP_ANIMATION &&
      playModelActionsContext
    ) {
      actions[actionPlaying].play();
    }
  }, [actionPlaying, playModelActionsContext]);

  const hasScreenLoaded = useContext(HasScreenLoadedContext);

  useEffect(() => {
    if (!hasScreenLoaded) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const interval = 10; // Update every 50ms
    const steps = duration / interval;
    const scaleStep = 1 / steps;

    const fadeIn = setInterval(() => {
      setScale((prev) => Math.min(1, prev + scaleStep));

      start += interval;
      if (start >= duration) clearInterval(fadeIn);
    }, interval);

    return () => clearInterval(fadeIn);
  }, [hasScreenLoaded]);

  return (
    <group ref={group} dispose={null}>
      <group name="Scene" scale={scale}>
        <mesh
          name="Sphere"
          geometry={nodes.Sphere.geometry}
          material={materials.Material}
          position={[0.079, 0.136, -0.758]}
          scale={[0.42, 0.376, 0.42]}
        />
        <mesh
          name="FBHead"
          geometry={nodes.FBHead.geometry}
          material={materials.Material}
          morphTargetDictionary={nodes.FBHead.morphTargetDictionary}
          morphTargetInfluences={nodes.FBHead.morphTargetInfluences}
          position={[0.05, -0.014, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/head23febgreen-transformed.glb');

export default Face;
