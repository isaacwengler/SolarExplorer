import * as THREE from "./three.js";

import { OrbitControls } from "./orbitControls.js";

let scene, camera, renderer;
let shouldAnimate;

export function showGroundView(currentPlanet) {
  shouldAnimate = true;
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    45,
    30000
  );
  camera.position.set(-900, -200, -900);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  const canvas = document.querySelector("canvas");
  if (canvas) {
    canvas.parentNode.removeChild(canvas);
  }
  document.body.appendChild(renderer.domElement);

  let controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 500;
  controls.maxDistance = 1500; // ethan could use these to not allow people to zoom out so far

  let texture_bk;
  let texture_ft;
  let texture_up;
  let texture_dn;
  let texture_rt;
  let texture_lf;
  let materialArray = [];

  function showPlanet(currentPlanet) {
    if (currentPlanet == "mercury") {
      texture_bk = new THREE.TextureLoader().load("Images/mercury_bk.jpg");
      texture_ft = new THREE.TextureLoader().load("Images/mercury_ft.jpg");
      texture_up = new THREE.TextureLoader().load("Images/mercury_up.jpg");
      texture_dn = new THREE.TextureLoader().load("Images/mercury_dn.jpg");
      texture_rt = new THREE.TextureLoader().load("Images/mercury_rt.jpg");
      texture_lf = new THREE.TextureLoader().load("Images/mercury_lf.jpg");
    } else if (currentPlanet == "venus") {
      texture_bk = new THREE.TextureLoader().load("Images/venus_bk.jpg");
      texture_ft = new THREE.TextureLoader().load("Images/venus_ft.jpg");
      texture_up = new THREE.TextureLoader().load("Images/venus_up.jpg");
      texture_dn = new THREE.TextureLoader().load("Images/venus_dn.jpg");
      texture_rt = new THREE.TextureLoader().load("Images/venus_rt.jpg");
      texture_lf = new THREE.TextureLoader().load("Images/venus_lf.jpg");
    } else if (currentPlanet == "earth") {
      texture_bk = new THREE.TextureLoader().load("Images/earth2_bk.jpg");
      texture_ft = new THREE.TextureLoader().load("Images/earth2_ft2.jpg");
      texture_up = new THREE.TextureLoader().load("Images/earth2_up.jpg");
      texture_dn = new THREE.TextureLoader().load("Images/earth2_dn.jpg");
      texture_rt = new THREE.TextureLoader().load("Images/earth2_rt.jpg");
      texture_lf = new THREE.TextureLoader().load("Images/earth2_lf.jpg");
    } else if (currentPlanet == "mars") {
      texture_bk = new THREE.TextureLoader().load("Images/mars_bk.jpg");
      texture_ft = new THREE.TextureLoader().load("Images/mars_ft.jpg");
      texture_up = new THREE.TextureLoader().load("Images/mars_up.jpg");
      texture_dn = new THREE.TextureLoader().load("Images/mars_dn.jpg");
      texture_rt = new THREE.TextureLoader().load("Images/mars_rt.jpg");
      texture_lf = new THREE.TextureLoader().load("Images/mars_lf.jpg");
    } else if (currentPlanet == "jupiter") {
    } else if (currentPlanet == "saturn") {
    } else if (currentPlanet == "uranus") {
    } else if (currentPlanet == "neptune") {
    } else if (currentPlanet == "pluto") {
      texture_bk = new THREE.TextureLoader().load("Images/pluto_bk.jpg");
      texture_ft = new THREE.TextureLoader().load("Images/pluto_ft.jpg");
      texture_up = new THREE.TextureLoader().load("Images/pluto_up.jpg");
      texture_dn = new THREE.TextureLoader().load("Images/pluto_dn.jpg");
      texture_rt = new THREE.TextureLoader().load("Images/pluto_rt.jpg");
      texture_lf = new THREE.TextureLoader().load("Images/pluto_lf.jpg");
    } else if (currentPlanet == "moon") {
      texture_bk = new THREE.TextureLoader().load("Images/moon_bk.jpg");
      texture_ft = new THREE.TextureLoader().load("Images/moon_ft.jpg");
      texture_up = new THREE.TextureLoader().load("Images/moon_up.jpg");
      texture_dn = new THREE.TextureLoader().load("Images/moon_dn.jpg");
      texture_rt = new THREE.TextureLoader().load("Images/moon_rt.jpg");
      texture_lf = new THREE.TextureLoader().load("Images/moon_lf.jpg");
    }
  }
  showPlanet(currentPlanet);

  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

  for (let i = 0; i < 6; i++) {
    materialArray[i].side = THREE.BackSide;
  }

  let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
  let skybox = new THREE.Mesh(skyboxGeo, materialArray);
  scene.add(skybox);

  animate();
}
function animate() {
  if (!shouldAnimate) {
    return;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}


export function leavePlanet() {
  camera.position.y += 100;
}

export function stopGroundView() {
  shouldAnimate = false;
}
