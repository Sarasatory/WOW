import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from '../services/OrbitControls';
// import { FontLoader } from '../services/FontLoader';

// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

const MovieSceneDetailLab = (props) => {
  let scene, camera, renderer, cube, circle;

  const init = () => {
    //
    //
    // Escena
    scene = new THREE.Scene();
    // // Color
    // scene.background = new THREE.Color(0xf4f6f8);
    // // // "Neblina"
    // // scene.fog = new THREE.Fog(0xeeeeee, 0.1, 8);
    // // Imagen de fondo - No me funciona, pero no sé porqué :(
    // let loader = new THREE.TextureLoader();
    // loader.load('../images/001.jpg', function (texture) {
    //   // loader.load(props.img, function (texture) {
    //   scene.background = texture;
    // });

    //
    //
    // Cámara
    camera = new THREE.PerspectiveCamera(
      // fov
      75,
      // aspect
      window.innerWidth / window.innerHeight,
      // "near" por defecto (si no lo pasamos) = 0.1
      0.1,
      // "far"  por defecto (si no lo pasamos) = 2000
      2000
    );

    //
    //
    // Render
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    //
    //
    // Geometrías
    // "BoxGeometry" recibe como parámetros (anchura, altura, profundidad, segmentos por anchura, segmentos por altura, segmentos por profundidad).
    let geometryCube = new THREE.BoxGeometry(2, 2.3, 0.02, 3, 2, 1);
    let material_001 = new THREE.MeshBasicMaterial({
      color: 0xeeeeee,
      wireframe: false,
    });
    cube = new THREE.Mesh(geometryCube, material_001);
    scene.add(cube);

    // // "CircleGeometry" recibe como parámetros (radio, número de segmentos, ángulo donde empieza el círculo (por defecto 0º), ángulo donde termina el círculo (por defecto 2PI)).
    // let geometryCircle = new THREE.CircleGeometry(
    //   0.5,
    //   32,
    //   0,
    //   Math.PI * (3 / 4)
    // );
    // let material_002 = new THREE.MeshBasicMaterial({
    //   color: 0xff6600,
    //   // wireframe: true,
    // });
    // circle = new THREE.Mesh(geometryCircle, material_002);
    // circle.position.x = 2;
    // scene.add(circle);

    //
    //
    //

    const floader = new THREE.FontLoader();
    let current;
    function createName(name = '¡¡Wow!!, un texto 3D') {
      if (current) {
        scene.remove(current);
      }
      floader.load('../fonts/font.json', function (font) {
        const geometry2 = new THREE.TextGeometry(name, {
          font: font,
          size: 0.1,
          height: 0.01,
          curveSegments: 21,
          bevelEnabled: false,
          bevelThickness: 1,
          bevelSize: 1,
          bevelOffset: 0,
          bevelSegments: 10,
        });
        const materials2 = new THREE.MeshBasicMaterial({ color: 0xff6600 });
        const mesh = new THREE.Mesh(geometry2, materials2);
        mesh.position.set(-0.7, 0.7, 0.01);
        current = mesh;
        scene.add(current);
      });
    }
    createName();

    //
    //
    //

    // El eje Z positivo, sale de la pantalla hacia nosotres.
    // En este caso estamos sacando la cámara, 2.5 unidades hacía afuera (del monitor).
    camera.position.z = 2.5;

    // También podemos posicionar más lejos el cubo, en este caso, 2.5 unidades hacía adentro (del monitor).
    // cube.position.z = -2.5;

    //
    //
    // Orbit Controls
    let controls = new OrbitControls(camera, renderer.domElement);
    // Distancias máxima y mínima del zoom.
    controls.maxDistance = 20;
    controls.minDistance = 3;

    // Habilitar o no el zoom.
    controls.enableZoom = true;

    // Habilitar el Damping (como inercia)
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.5;

    //
    //
    // Redimensionar a ventana contenedora del renderizado.
    window.addEventListener('resize', resizeFunc);

    //
    // HTML ¿Puede ir debajo del resto del código js?
    document.body.appendChild(renderer.domElement);
    //
    //

    animate();
  };

  const resizeFunc = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  };

  // Animación
  const animate = () => {
    requestAnimationFrame(animate);

    // Con "scene.traverse" recorremos todos los objetos, de modo que no hace falta indicarles la rotación por separado (que sería como las líneas comentadas de más abajo).
    // scene.traverse(function (object) {
    //   // Está linea indica que solo afecte a los objetos que sean "Mesh" (formas geométricas) y no a otros elementos como cámaras y demás.
    //   if (object.isMesh === true) {
    //     object.rotation.x += 0.01;
    //     object.rotation.y += 0.01;
    //   }
    // });

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    // circle.rotation.x += 0.01;
    // circle.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  return (
    <>
      <Link to={'/'}>{init()} </Link>
    </>
  );
};
export default MovieSceneDetailLab;
