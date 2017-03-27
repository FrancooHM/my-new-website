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
                <h1>Franco Rabalgia About</h1>
                <h3>Fullstack web developer</h3>
            </section>
        )
    }
}
