/*------------------------------------------------------------
Criar um boilerplate com os principais conceitos e componentes
da biblioteca THREE.js
-------------------------------------------------------------*/
import * as THREE from 'three'//Three.js core
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'//Camera Control
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

/*---------------------------------------
Canvas Element
----------------------------------------*/
const canvas = document.getElementById('canvas')
const canvasSize = { width: canvas.offsetWidth, height: canvas.offsetHeight }
const canvasRatio = canvasSize.width / canvasSize.height

/*---------------------------------------
Colors
----------------------------------------*/
const darkBackgroundColor = new THREE.Color(0x444444)
const lightBackgroundColor = new THREE.Color(0xdddddd)

const whiteColor = new THREE.Color(0xffffffff)
const redColor = new THREE.Color(0xff0000)

/*---------------------------------------
Scene
----------------------------------------*/
const scene = new THREE.Scene()
scene.background = darkBackgroundColor

/*---------------------------------------
Loader - FBX
----------------------------------------*/
const loaderFBX = new FBXLoader()
loaderFBX.load('src/models/pipe/model.fbx', function (model) {
    scene.add(model)
}, undefined, function (error) {
    console.error(error)
})

/*---------------------------------------
Cameras
----------------------------------------*/
const perspectiveCamera = new THREE.PerspectiveCamera(75, canvasRatio, 0.1, 1000)
const camera = perspectiveCamera
camera.position.set(1, 3, 3)//Position coordinates (x, y, z)

/*---------------------------------------
Material
----------------------------------------*/
const baseMaterial = new THREE.MeshBasicMaterial()
baseMaterial.color = whiteColor

const phongMaterial = new THREE.MeshPhongMaterial()
phongMaterial.color = redColor

/*---------------------------------------
Geometry
----------------------------------------*/
const box = new THREE.BoxGeometry(0.05, 0.05, 0.05)
const geometry = new THREE.Mesh(box, phongMaterial)

/*---------------------------------------
Lights
----------------------------------------*/
const pointLight = new THREE.PointLight(0xffffff, 0.1, 1000) // soft point white light
const pointHelper = new THREE.PointLightHelper(pointLight, 0.1, redColor)
const hemisferLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 1)
const hemisferHelper = new THREE.HemisphereLightHelper(hemisferLight, 0.1, redColor)

/*---------------------------------------
Grid Helper
----------------------------------------*/
const gridSize = 5
const gridDivisions = 50
const gridHelper = new THREE.GridHelper(gridSize, gridDivisions)

/*---------------------------------------
Axis Helper
----------------------------------------*/
const axisHelper = new THREE.AxesHelper(3)
axisHelper.setColors("red", "blue", "green")//Axis Coordinates (x, y, z)

/*---------------------------------------
Scene Additions
----------------------------------------*/
scene.add(camera)
scene.add(geometry)

scene.add(pointLight)
scene.add(hemisferLight)

scene.add(pointHelper)
scene.add(hemisferHelper)

scene.add(gridHelper)
scene.add(axisHelper)

/*---------------------------------------
Controls
----------------------------------------*/
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = false

/*---------------------------------------
Render Setup
----------------------------------------*/
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})
renderer.setSize(canvasSize.width, canvasSize.height)

/*---------------------------------------
Render Function
----------------------------------------*/
function renderIntoDom() {
    // Render
    renderer.render(scene, camera)

    // Call render again on the next frame
    window.requestAnimationFrame(renderIntoDom)
}

renderIntoDom()
