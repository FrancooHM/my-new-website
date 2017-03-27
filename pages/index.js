import React from 'react'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="main">
                <span className="fluid-center">
                    <h1>Franco Rabaglia</h1>
                    <h3>Fullstack web developer</h3>
                    <h6 className="button">
                        <a href="https://www.github.com/francoohm/my-new-website">
                            <u>source</u>
                        </a>
                    </h6>
                </span>
            </section>
        )
    }
}
