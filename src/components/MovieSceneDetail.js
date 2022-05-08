import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '../services/OrbitControls';

import HeaderLittle from './HeaderLittle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

import '../styles/components/MovieSceneDetail.scss';

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
    // scene.background = new THREE.Color(0x000000);

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
    renderer.setSize(window.innerWidth / 3, window.innerHeight / 2);
    //document.body.appendChild(renderer.domElement);

    //add geometry
    var geometry = new THREE.BoxGeometry(3.76, 3.84, 0.03);

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
      <HeaderLittle />

      <section className='movie-scene-detail'>
        <div className='msd-container'>
          <div id='Render' className='App msd-container__render'></div>

          <div className='msd-container__info'>
            <h1 className='msd-container__info__title'>
              {this.props.sceneFound.movie} - ({this.props.sceneFound.character}
              )
            </h1>
            <p className='msd-container__info__director'>
              {this.props.sceneFound.director}
            </p>
            <p className='msd-container__info__year'>
              {this.props.sceneFound.year}
            </p>
            <a href={this.props.sceneFound.audio} target='_blank'>
              <div className='msd-container__info__audio'>
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className='msd-container__info__audio__icon'
                />
                <div className='msd-containe__infor__audio__text'>
                  <p className='msd-container__info__audio__text__line'>
                    {this.props.sceneFound.full_line}
                  </p>
                  <span className='msd-container__audio__text__timestamp'>
                    {this.props.sceneFound.timestamp}
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );

  render() {
    return <>{this.html}</>;
  }
}

export default MovieSceneDetail;
