import React from 'react'
import Head from 'next/head'
import fx1 from '../utils/fx.1';
import fx2 from '../utils/fx.2';
import fx3 from '../utils/fx.3';
import fx4 from '../utils/fx.4';
import fft from '../utils/fft';
import onWindowResize from '../utils/onWindowResize';

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = { counter: 1 }
    this.fft = fft.bind(this);
  }

  componentDidMount() {
    // this.onWindowResize = onWindowResize(this, window)
    this.fft();
  }

  destroy() {
    const node = document.getElementById('webgl-wrapper').children[0]
    console.log('this.state 1', this.state)
    if (node) {
      node.remove();
      this.setState({ 
        counter: this.state.counter + 1,
        mesh1: null,
        mesh2: null,
        camera: null,
        scene:null,
        renderer: null
      }, () => {
        if (this.state.counter % 2 === 0) {
          fx1(this, window, document)();
        } else if (this.state.counter % 3 === 0) {
          fx2(this, window, document)();
        } else if (this.state.counter % 4 === 0) {
          fx3(this, window, document)();
        } else if (this.state.counter % 5 === 0) {
          fx4(this, window, document)();
        }
      });
    }
  }

  render() {

    return (
      <div onClick={() => {}}>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/styles/master.css" />
          <title>GOODBYE 👋🏽</title>
        </Head>
        <div id="webgl-wrapper"></div>
        <div className="magical-text-wrapper" >
          <h1 className="magical-text animated fadeIn slower" > GET THINGS DONE, MAKE THINGS BETTER</h1>
        </div>
      </div>
    )
  }
}