import * as THREE from 'https://cdn.skypack.dev/three';
import { OrbitControls } from 'https://cdn.skypack.dev/three/examples/jsm/controls/OrbitControls.js';

export function solarView(){

    const date = Date.now() * 0.0001;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    const controls = new OrbitControls( camera, renderer.domElement);
    controls.minDistance = 100;
    controls.maxDistance = 1500;

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    //spheres
    const sunSphere = new THREE.SphereGeometry(65,15,15);
    const sunTexture = new THREE.TextureLoader().load("./Images/2k_sun.jpg");
    const sunMaterial = new THREE.MeshBasicMaterial( {map: sunTexture} );
    const sun = new THREE.Mesh(sunSphere,sunMaterial);


    const mercSphere = new THREE.SphereGeometry(6,15,15);
    mercSphere.translate(100,0,0);
    //mercSphere.translate(Math.cos(date) * 100,0, Math.sin(date) * 100);
    const mercTexture = new THREE.TextureLoader().load("./Images/mercuryUV.jpg")
    const mercMaterial = new THREE.MeshBasicMaterial({map: mercTexture})
    const mercury = new THREE.Mesh(mercSphere,mercMaterial);


    const venusSphere = new THREE.SphereGeometry(14,15,15);
    venusSphere.translate(140,0,0);
    const venusTexture = new THREE.TextureLoader().load("./Images/2k_venus_surface.jpg");
    const venusMaterial = new THREE.MeshBasicMaterial({map: venusTexture});
    const venus = new THREE.Mesh(venusSphere,venusMaterial);

    const earthSphere = new THREE.SphereGeometry(14.5,15,15);
    earthSphere.translate(195,0,0);
    const earthTexture = new THREE.TextureLoader().load("./Images/earthUV.jpeg");
    const earthMaterial = new THREE.MeshBasicMaterial({map: earthTexture});
    const earth = new THREE.Mesh(earthSphere,earthMaterial);

    const marsSphere = new THREE.SphereGeometry(8,15,15);
    marsSphere.translate(230,0,0);
    const marsTexture = new THREE.TextureLoader().load("./Images/2k_mars.jpg");
    const marsMaterial = new THREE.MeshBasicMaterial({map: marsTexture});
    const mars = new THREE.Mesh(marsSphere,marsMaterial);

    const jupSphere = new THREE.SphereGeometry(35,15,15);
    jupSphere.translate(300,0,0);
    const jupTexture = new THREE.TextureLoader().load("./Images/2k_jupiter.jpg");
    const jupMaterial = new THREE.MeshBasicMaterial({map: jupTexture});
    const jupiter = new THREE.Mesh(jupSphere,jupMaterial);

    const satSphere = new THREE.SphereGeometry(30,15,15);
    satSphere.translate(390,0,0);
    const satTexture = new THREE.TextureLoader().load("./Images/2k_saturn.jpg");
    const satMaterial = new THREE.MeshBasicMaterial({map: satTexture});
    const saturn = new THREE.Mesh(satSphere,satMaterial);

    const uranSphere = new THREE.SphereGeometry(17,15,15);
    uranSphere.translate(460,0,0);
    const uranTexture = new THREE.TextureLoader().load("./Images/2k_uranus.jpg");
    const uranMaterial = new THREE.MeshBasicMaterial({map: uranTexture});
    const uranus = new THREE.Mesh(uranSphere,uranMaterial);

    const nepSphere = new THREE.SphereGeometry(17,15,15);
    nepSphere.translate(520,0,0);
    const nepTexture = new THREE.TextureLoader().load("./Images/2k_neptune.jpg");
    const nepMaterial = new THREE.MeshBasicMaterial({map: nepTexture});
    const neptune = new THREE.Mesh(nepSphere,nepMaterial);

    const plutoSphere = new THREE.SphereGeometry(5,15,15);
    plutoSphere.translate(570,0,0);
    const plutoTexture = new THREE.TextureLoader().load("./Images/plutomap1k.jpg");
    const plutoMaterial = new THREE.MeshBasicMaterial({map: plutoTexture});
    const pluto = new THREE.Mesh(plutoSphere,plutoMaterial);

    //orbit rings
    const mercRingGeometry = new THREE.TorusGeometry(100,0.5,2.5,100);
    const mercRing = new THREE.Mesh(mercRingGeometry,mercMaterial);
    mercRing.rotation.set(1.57079575,0,0);
    scene.add(mercRing);

    const venusRingGeometry = new THREE.TorusGeometry(140,0.5,2.5,100);
    const venusRing = new THREE.Mesh(venusRingGeometry,venusMaterial);
    venusRing.rotation.set(1.57079575,0,0);
    scene.add(venusRing);

    const earthRingGeometry = new THREE.TorusGeometry(195,0.5,2.5,100);
    const earthRing =  new THREE.Mesh(earthRingGeometry,earthMaterial);
    earthRing.rotation.set(1.57079575,0,0);
    scene.add(earthRing);

    const marsRingGeometry = new THREE.TorusGeometry(230,0.5,2.5,100);
    const marsRing = new THREE.Mesh(marsRingGeometry,marsMaterial);
    marsRing.rotation.set(1.57079575,0,0);
    scene.add(marsRing);

    const jupRingGeometry = new THREE.TorusGeometry(300,0.5,2.5,100);
    const jupRing = new THREE.Mesh(jupRingGeometry,jupMaterial);
    jupRing.rotation.set(1.57079575,0,0);
    scene.add(jupRing);

    const satRingGeometry = new THREE.TorusGeometry(390,0.5,2.5,100);
    const satRing = new THREE.Mesh(satRingGeometry,satMaterial);
    satRing.rotation.set(1.57079575,0,0);
    scene.add(satRing);

    const uranRingGeometry = new THREE.TorusGeometry(460,0.5,2.5,100);
    const uranRing = new THREE.Mesh(uranRingGeometry,uranMaterial);
    uranRing.rotation.set(1.57079575,0,0);
    scene.add(uranRing);

    const nepRingGeometry = new THREE.TorusGeometry(520,0.5,2.5,100);
    const nepRing = new THREE.Mesh(nepRingGeometry,nepMaterial);
    nepRing.rotation.set(1.57079575,0,0);
    scene.add(nepRing);

    const plutoRingGeometry = new THREE.TorusGeometry(570,0.5,2.5,100);
    const plutoRing = new THREE.Mesh(plutoRingGeometry,plutoMaterial);
    plutoRing.rotation.set(1.57079575,0,0);
    scene.add(plutoRing);

    //orbit animations
    const mercOrbit = new THREE.Group();
    mercOrbit.add(mercury);
    mercOrbit.add(mercRing);

    const venusOrbit = new THREE.Group();
    venusOrbit.add(venus);
    venusOrbit.add(venusRing);
    
    const earthOrbit = new THREE.Group();
    earthOrbit.add(earth);
    earthOrbit.add(earthRing);

    const marsOrbit = new THREE.Group();
    marsOrbit.add(mars);
    marsOrbit.add(marsRing);

    const jupOrbit = new THREE.Group();
    jupOrbit.add(jupiter);
    jupOrbit.add(jupRing);

    const satOrbit = new THREE.Group();
    satOrbit.add(saturn);
    satOrbit.add(satRing);

    const uranOrbit = new THREE.Group();
    uranOrbit.add(uranus);
    uranOrbit.add(uranRing);

    const nepOrbit = new THREE.Group();
    nepOrbit.add(neptune);
    nepOrbit.add(nepRing);

    const plutoOrbit = new THREE.Group();
    plutoOrbit.add(pluto);
    plutoOrbit.add(plutoRing);

    scene.add(sun,mercOrbit,venusOrbit,earthOrbit,marsOrbit,jupOrbit,satOrbit,uranOrbit,nepOrbit,plutoOrbit);

    camera.position.set(350,800,400);
    controls.update();

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        mercOrbit.rotation.y += 0.0479;
        venusOrbit.rotation.y += 0.0350;
        earthOrbit.rotation.y += 0.0298;
        marsOrbit.rotation.y += 0.0241;
        jupOrbit.rotation.y += 0.0131;
        satOrbit.rotation.y += 0.0097;
        uranOrbit.rotation.y += 0.0068;
        nepOrbit.rotation.y += 0.0054;
        plutoOrbit.rotation.y += 0.01;
        renderer.render(scene,camera);
    }

    animate();
}