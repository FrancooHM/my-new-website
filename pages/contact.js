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
                        <link rel="stylesheet" type="text/css" href="/static/index.css"/>
                    </Head>
                    <h1>See my work on</h1>
                    <ul>
                        <a href="https://www.github.com/francoohm" target="_blank">
                            <li>Github</li>
                        </a>
                        <a href="https://www.linkedin.com/in/francorabaglia/" target="_blank">
                            <li>Linkedin</li>
                        </a>
                    </ul>
                    <h1>Say hi me on</h1>
                    <ul>
                        <a href="https://www.twitter.com/franco_rabaglia/" target="_blank">
                            <li>Twitter</li>
                        </a>
                    </ul>
                </span>
            </section>
        )
    }
}
