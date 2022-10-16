import {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh} from 'three'

export const render = (container: HTMLElement) =>
{
	const {width, height} = container.getBoundingClientRect()
	const w = width * 0.25
	const h = height * 0.25
	const rat = w / h

	const scene = new Scene()
	const camera = new PerspectiveCamera( 75, rat, 0.1, 1000 )

	const renderer = new WebGLRenderer()
	renderer.setSize( w, h )
	container.appendChild( renderer.domElement )

	const geometry = new BoxGeometry( 1, 1, 1 )
	const material = new MeshBasicMaterial( { color: 0x00ff00 } )
	const cube = new Mesh( geometry, material )
	scene.add( cube )

	camera.position.z = 5

	const animate = () => {
	requestAnimationFrame( animate )

	cube.rotation.x += 0.01
	cube.rotation.y += 0.01

	renderer.render( scene, camera )
	}

	animate()
}