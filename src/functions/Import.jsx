import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const importModel = (file, onImport) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const contents = e.target.result;
    const loader = new GLTFLoader();
    loader.parse(contents, '', (gltf) => {
      onImport(gltf.scene);
    }, undefined, (error) => {
      console.error('Error loading model:', error);
    });
  };
  reader.readAsArrayBuffer(file);
};