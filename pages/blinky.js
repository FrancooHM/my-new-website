import React from 'react'
import Head from 'next/head'
import ReactTHREE, {Renderer, Scene, PerspectiveCamera, Cupcake} from 'react-three'
import * as THREE from 'three'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var assetpath = function(filename) {
            return '/static/assets/' + filename
        }

        var MeshFactory = React.createFactory(ReactTHREE.Mesh)
        var LineSegmentsFactory = React.createFactory(ReactTHREE.LineSegments)

        var icosaedronGeometry = new THREE.IcosahedronGeometry(200, 0)

        var lineSegmentsGeometry = new THREE.EdgesGeometry(icosaedronGeometry); // or WireframeGeometry( geometry )
        var lineSegmentsMaterial = new THREE.LineBasicMaterial({color: 0xffffff, linewidth: 0.5});

        var Cupcake = React.createClass({
            displayName: 'Cupcake',
            propTypes: {
                position: React.PropTypes.instanceOf(THREE.Vector3),
                quaternion: React.PropTypes.instanceOf(THREE.Quaternion).isRequired
            },
            render: function() {
                /* You can stack ReactTHREE childrens on this createElement */
                return React.createElement(ReactTHREE.Object3D, {
                    quaternion: this.props.quaternion,
                    position: this.props.position || new THREE.Vector3(0, 0, 0)
                }, LineSegmentsFactory({
                    position: new THREE.Vector3(0, 100, 0),
                    geometry: lineSegmentsGeometry,
                    material: lineSegmentsMaterial
                }))
            }
        })

        var scene = React.createClass({
            displayName: 'scene',
            render: function() {
                var MainCameraElement = React.createElement(ReactTHREE.PerspectiveCamera, {
                    name: 'maincamera',
                    fov: '75',
                    aspect: this.props.width / this.props.height,
                    near: 1,
                    far: 5000,
                    position: new THREE.Vector3(0, 0, 600),
                    lookat: new THREE.Vector3(0, 0, 0)
                })

                return (React.createElement(ReactTHREE.Renderer, {
                    width: this.props.width,
                    height: this.props.height,
                    background: 0x000000
                }, React.createElement(ReactTHREE.Scene, {
                    width: this.props.width,
                    height: this.props.height,
                    camera: 'maincamera'
                }, MainCameraElement, React.createElement(Cupcake, this.props.icosaedron)), React.createElement(ReactTHREE.Scene, {
                    width: this.props.width,
                    height: this.props.height,
                    camera: 'maincamera'
                }, MainCameraElement, React.createElement(Cupcake, this.props.icosaedron2))))
            }
        })

        var renderelement = document.getElementById("three-box")

        var w = window.innerWidth
        var h = window.innerHeight

        var sceneProps = {
            width: w,
            height: h,
            icosaedron: {
                position: new THREE.Vector3(0, 0, 0),
                quaternion: new THREE.Quaternion()
            },
            icosaedron2: {
                position: new THREE.Vector3(0, 0, 0),
                quaternion: new THREE.Quaternion()
            }
        }
        var icosaedronProps = sceneProps.icosaedron
        var icosaedronProps2 = sceneProps.icosaedron2
        var rotationangle = 0

        ReactTHREE.render(React.createElement(scene, sceneProps), renderelement)

        function spinIcosaedrons(t) {
            rotationangle = t * 0.001
            icosaedronProps.quaternion.setFromEuler(new THREE.Euler(rotationangle, rotationangle * 3, 0))
            icosaedronProps.position.x = 300 * Math.sin(rotationangle)
            icosaedronProps2.quaternion.setFromEuler(new THREE.Euler(rotationangle, rotationangle * 3, 0))
            icosaedronProps2.position.x = 300 * Math.sin(-rotationangle)

            ReactTHREE.render(React.createElement(scene, sceneProps), renderelement)

            requestAnimationFrame(spinIcosaedrons)
        }

        spinIcosaedrons()
    }

    render() {

        return (
            <div>
                <Head>
                    <link rel="stylesheet" type="text/css" href="/static/blinky.css"/>
                </Head>
                <div id="three-box">
                </div>
            </div>
        )
    }
}
