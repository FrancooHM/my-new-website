import React from 'react'
import Head from 'next/head'
import fx from '../utils/fx.2';
import onWindowResize from '../utils/onWindowResize';

export default class extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.onWindowResize = onWindowResize(this, window);
    this.fx = fx(this, window, document);
    this.init()
  }

  init() {
    this.fx();
  }

  render() {

    return (
      <div>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/styles/goodbye.css" />
        </Head>
        <div id="webgl-wrapper"> </div>
        <div className="magical-text-wrapper" >
          <h1 className="animated fadeIn magical-text" > Get things done, make things better. </h1>
        </div>
      </div>
    )
  }
}