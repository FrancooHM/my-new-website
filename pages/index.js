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
                    <link rel="stylesheet" type="text/css" href="/static/index.css"/>
                </Head>
                <span className="fluid-center">
                    <h1>Franco Rabalgia</h1>
                    <h3>Fullstack web developer</h3>
                    <h6>@francoohm</h6>
                    <h6>
                        <a href="https://www.github.com/francoohm/my-new-website">
                            <u>source</u>
                        </a>
                    </h6>
                </span>
            </section>
        )
    }
}
