/*------------------------------------------------------------
Criar um boilerplate com os principais conceitos e componentes
da biblioteca THREE.js
-------------------------------------------------------------*/
import * as THREE from 'three'//Three.js core
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'//Camera Control

/*---------------------------------------
Canvas Element
----------------------------------------*/
const canvas = document.getElementById('canvas')
const canvasSize = { width: canvas.offsetWidth, height: canvas.offsetHeight }
const canvasRatio = canvasSize.width / canvasSize.height

/*---------------------------------------
Colors
----------------------------------------*/
const sceneColor = new THREE.Color(0x444444)
const materialColor = new THREE.Color("blue")
const lightlColor = new THREE.Color("red")

/*---------------------------------------
Scene
----------------------------------------*/
const scene = new THREE.Scene()
scene.background = sceneColor

/*---------------------------------------
Material
----------------------------------------*/
const basicMaterial = new THREE.MeshMatcapMaterial()
basicMaterial.color = materialColor

/*---------------------------------------
Geometry
----------------------------------------*/
const box = new THREE.BoxGeometry(1, 1, 1);
const geometry = new THREE.Mesh(box, basicMaterial)
geometry.position.x = 0
geometry.position.y = 0
geometry.position.z = 0

/*---------------------------------------
Light
----------------------------------------*/
const pointLight = new THREE.PointLight(); // soft white light
const light = pointLight
light.intensity = 1
light.position.x = 1
light.position.y = 1
light.position.z = 1

/*---------------------------------------
Grid Helper
----------------------------------------*/
const gridSize = 10
const gridDivisions = 50
const gridHelper = new THREE.GridHelper(gridSize, gridDivisions)

/*---------------------------------------
Cameras
----------------------------------------*/
const perspectiveCamera = new THREE.PerspectiveCamera(75, canvasRatio, 0.1, 1000)
const camera = perspectiveCamera
camera.position.x = 1
camera.position.y = 1
camera.position.z = 1

/*---------------------------------------
Scene Additions
----------------------------------------*/
scene.add(camera)
scene.add(geometry)
scene.add(light)
scene.add(gridHelper)

/*---------------------------------------
Controls
----------------------------------------*/
const controls = new OrbitControls(perspectiveCamera, canvas)
controls.enableDamping = true

/*---------------------------------------
Render Setup
----------------------------------------*/
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})

/*---------------------------------------
Render Function
----------------------------------------*/
function renderIntoDom() {
    // Render
    renderer.setSize(canvasSize.width, canvasSize.height)
    renderer.render(scene, perspectiveCamera)

    // Call render again on the next frame
    window.requestAnimationFrame(renderIntoDom)
}

renderIntoDom()
