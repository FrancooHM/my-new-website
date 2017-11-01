import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="main">
                <span className="fluid-center">
                    <Head>
                        <link rel="stylesheet" type="text/css" href="/static/styles/index.css"/>
                    </Head>
                    <h1>See my work on</h1>

                        <a href="https://www.github.com/francoohm" target="_blank">
                            <h3>Github</h3>
                        </a>
                        <a href="https://www.linkedin.com/in/francorabaglia/" target="_blank">
                            <h3>Linkedin</h3>
                        </a>

                    <h1>Say me hi on</h1>

                        <a href="https://www.twitter.com/franco_rabaglia/" target="_blank">
                            <h3>Twitter</h3>
                        </a>

                </span>
            </section>
        )
    }
}
