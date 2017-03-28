import React from 'react'
import Head from 'next/head'
import ReactTHREE, {Renderer, Scene, PerspectiveCamera} from 'react-three'
import * as THREE from 'three'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            webGlRenderer: ReactTHREE.Renderer
        }
    }

    componentWillMount() {
        this.setState({width: 0, height: 0});
    }

    componentDidMount() {
        this.renderWebGL()
    }

    componentWillUnmount() {

    }

    updateDimensions = () => {
        if (this.state.height === window.innerHeight && this.state.width === window.innerWidth) {
            return
        } else {
            this.setState({width: window.innerWidth, height: window.innerHeight});
            this.destroyWebGL()
            this.renderWebGL()
            console.log(this.state);
        }
    }

    destroyWebGL = () => {
        console.debug("destroying");
        document.getElementById('webgl-wrapper').removeChild(document.getElementById('three-box'))

    }
    renderWebGL = () => {

        var divWrapper = document.createElement('div')
        divWrapper.id = 'three-box'
        document.getElementById("webgl-wrapper").appendChild(divWrapper)

        var MeshFactory = React.createFactory(ReactTHREE.Mesh)
        var LineSegmentsFactory = React.createFactory(ReactTHREE.LineSegments)

        var icosaedronGeometry1 = new THREE.IcosahedronGeometry(200, 0)
        var icosaedronGeometry2 = new THREE.IcosahedronGeometry(200, 2)

        var lineSegmentsGeometry1 = new THREE.EdgesGeometry(icosaedronGeometry1); // or WireframeGeometry( geometry )
        var lineSegmentsGeometry2 = new THREE.EdgesGeometry(icosaedronGeometry2); // or WireframeGeometry( geometry )
        var lineSegmentsMaterial = new THREE.LineBasicMaterial({color: 0xffffff, linewidth: 0.5});

        var Cupcake1 = React.createClass({
            displayName: 'Cupcake1',
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
                    geometry: lineSegmentsGeometry1,
                    material: lineSegmentsMaterial
                }))
            }
        })

        var Cupcake2 = React.createClass({
            displayName: 'Cupcake2',
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
                    geometry: lineSegmentsGeometry2,
                    material: lineSegmentsMaterial
                }))
            }
        })

        var _state = this.state
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

                return (React.createElement(_state.webGlRenderer, {
                    width: this.props.width,
                    height: this.props.height,
                    background: 0x000000
                }, React.createElement(ReactTHREE.Scene, {
                    width: this.props.width,
                    height: this.props.height,
                    camera: 'maincamera'
                }, MainCameraElement, React.createElement(Cupcake1, this.props.icosaedron)), React.createElement(ReactTHREE.Scene, {
                    width: this.props.width,
                    height: this.props.height,
                    camera: 'maincamera'
                }, MainCameraElement, React.createElement(Cupcake2, this.props.icosaedron2))))
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
                    <link rel="stylesheet" type="text/css" href="/static/goodbye.css"/>
                </Head>
                <div id="webgl-wrapper"></div>
                <div className="magical-text-wrapper">
                    <h1 className="animated fadeIn magical-text">Get things done, make things better.</h1>
                </div>
            </div>
        )
    }
}
