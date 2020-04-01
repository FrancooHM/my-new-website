import React from 'react'
import Head from 'next/head'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="main">
                <Head>
                    <link rel="stylesheet" type="text/css" href="/static/styles/master.css" />
                    <title>ME 👽</title>
                </Head>
                <span className="fluid-center">
                    <h1>Franco Rabaglia</h1>
                    <h3>Software Engineer</h3>
                    <h6 className="button">
                        <a href="https://www.github.com/francoohm/my-new-website">
                            <u>source</u>
                        </a>
                    </h6>
                    <h4><a href='https://www.clandestina.com.ar/delivery' target="_blank">I design beer and operate at Clandestina Brewery. 🍻</a></h4>
                    {/* <h4>I write node.js and react everyday.</h4>
                    <h4>I think fullstack architectures.</h4>
                    <h4>I studied software engineering.</h4>
                    <h4>I build infrastructure with aws solutions.</h4>
                    <h4>I'm on the field from 10 years ago.</h4>
                    <h4>I do webgl fx on my free-time.</h4>
                    <h4>I'm experimenting with tensor flow.</h4> */}
                </span>
            </section>
        )
    }
}
