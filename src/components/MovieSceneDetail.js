// import { Link } from 'react-router-dom';

// const MovieSceneDetail = (props) => {
//   let html = '';

//   if (!props.sceneFound) {
//     html = <h1>Está la cosa chunga, no hay nada aquí :o</h1>;
//   } else {
//     html = (
//       <Link to={'/'}>
//         <h1>Hola tusha ^^</h1>
//         <h1>{props.sceneFound.id}</h1>
//       </Link>
//     );
//   }

//   return <>{html}</>;
// };
// export default MovieSceneDetail;

//
//
// **************
//
//

import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '../services/OrbitControls';

// import './App.css';

let scene, camera, renderer, cube;
class MovieSceneDetail extends Component {
  constructor(propsConstructor) {
    super(propsConstructor);
    this.animate = this.animate.bind(this);
  }

  init() {
    //creating scene
    scene = new THREE.Scene();

    // Color
    scene.background = new THREE.Color(0xf4f6f8);

    // Imagen de fondo - No me funciona, pero no sé porqué :(
    // let loaderBG = new THREE.TextureLoader();
    // loaderBG.load(this.props.sceneFound.poster, function (texture) {
    //   scene.background = texture;
    // });

    //add camera
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight
    );

    //renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    //document.body.appendChild(renderer.domElement);

    //add geometry
    var geometry = new THREE.BoxGeometry(3, 5, 0.05);

    let texture = THREE.ImageUtils.loadTexture(
      this.props.sceneFound.poster,
      {},
      function () {
        renderer.render(scene);
      }
    );

    let material = new THREE.MeshBasicMaterial({ map: texture });
    //   {
    //   color: 0xeeeeee,
    //   wireframe: false,
    // }
    cube = new THREE.Mesh(geometry, material);

    let loaderOb = new THREE.TextureLoader();
    loaderOb.load(this.props.sceneFound.poster, function (texture) {
      material.map = texture;
    });

    scene.add(cube);

    camera.position.z = 5;

    // Orbit Controls
    let controls = new OrbitControls(camera, renderer.domElement);

    return renderer.domElement;
  }

  //animation
  animate() {
    requestAnimationFrame(this.animate);

    // cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // cube.rotation.z += 0.01;

    renderer.render(scene, camera);
  }

  componentDidMount() {
    document.getElementById('Render').appendChild(this.init());
    this.animate();
  }

  html = (
    <>
      <Link to={'/'}>
        <h1>Hola tusha ^^</h1>
      </Link>
      <div id='Render' className='App'></div>
      <h1>id {this.props.sceneFound.id}</h1>
      <h1>movie {this.props.sceneFound.movie}</h1>
      <h1>director {this.props.sceneFound.director}</h1>
      <h1>year {this.props.sceneFound.year}</h1>
      <h1>character {this.props.sceneFound.character}</h1>
      <h1>poster {this.props.sceneFound.poster}</h1>
      <h1>audio {this.props.sceneFound.audio}</h1>
      <h1>full_line {this.props.sceneFound.full_line}</h1>
      <h1>timestamp {this.props.sceneFound.timestamp}</h1>
    </>
  );

  render() {
    return <>{this.html}</>;
  }
}

export default MovieSceneDetail;
