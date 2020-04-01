import * as THREE from 'three';
import DeviceManager from './device.manager';
const vertexShader = require('./shaders/vertex_shader_2');
const fragmentShader = require('./shaders/fragment_shader');

function create(cameraDistance, innerWidth, innerHeight) {
    // SETTING UP SCENE AND PERSPECTIVE MATRIX
    const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 1, 7000)
    const scene = new THREE.Scene()

    //SETTING UP SHITTY THINGS LIKE FOG AND LIGHTS
    // SETTING UP GEOMETRY AND MATERIAL
    const ico1Size = 200 / DeviceManager.mobileCheck();
    const ico2Size = 50 / DeviceManager.mobileCheck();
    const icosaedronGeometry1 = new THREE.IcosahedronGeometry(ico1Size, 0);
    const icosaedronGeometry2 = new THREE.IcosahedronGeometry(ico2Size, 1);
    const lineSegmentsGeometry1 = new THREE.EdgesGeometry(icosaedronGeometry1);
    const lineSegmentsGeometry2 = new THREE.EdgesGeometry(icosaedronGeometry2);

    const lineSegmentsMaterial1 = new THREE.ShaderMaterial({
        uniforms: {
            time: {
                value: 1.0
            },
            resolution: {
                value: new THREE.Vector2()
            },
            r: {
                value: 255.0
            },
            g: {
                value: 255.0
            },
            b: {
                value: 255.0
            }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    });
    const lineSegmentsMaterial2 = new THREE.ShaderMaterial({
        uniforms: {
            time: {
                value: 1.0
            },
            resolution: {
                value: new THREE.Vector2()
            },
            r: {
                value: 255.0
            },
            g: {
                value: 255.0
            },
            b: {
                value: 255.0
            }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    });

    const mesh1 = new THREE.LineSegments(lineSegmentsGeometry1, lineSegmentsMaterial1)
    const mesh2 = new THREE.LineSegments(lineSegmentsGeometry2, lineSegmentsMaterial2)

    //SETTING UP THE RENDERER
    const renderer = new THREE.WebGLRenderer()

    // SETTING UP PIXEL RATIO AND CANVAS SIZE
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    //SETTING UP CAMERA POSIION
    camera.position.z = cameraDistance

    //ADDING ELEMENTS TO THE SCENE
    scene.add(mesh1)
    scene.add(mesh2)

    return {
        camera,
        scene,
        renderer,
        meshes: [mesh1, mesh2]
    }
}

export default {
    create
}