import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '../services/OrbitControls';

// import './App.css';

let scene, camera, renderer, cube;
class MovieSceneDetailLab extends Component {
  constructor(propsConstructor) {
    super(propsConstructor);
    this.animate = this.animate.bind(this);
  }

  init() {
    //creating scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2a3b4c);

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
    var geometry = new THREE.BoxGeometry(3, 4, 0.05);
    var material = new THREE.MeshBasicMaterial({
      color: 0xeeeeee,
      wireframe: false,
    });
    cube = new THREE.Mesh(geometry, material);

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
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  componentDidMount() {
    document.getElementById('Render').appendChild(this.init());
    this.animate();
  }

  render() {
    return (
      <>
        <Link to={'/'}>
          <h1>Hola tusha ^^</h1>
        </Link>
        <h1>Props: {this.props.sceneFound}</h1>
        <div id='Render' className='App'></div>
        <p>hola</p>
      </>
    );
  }
}

export default MovieSceneDetailLab;
