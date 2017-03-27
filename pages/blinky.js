import React from 'react'
import NoSSR from 'react-no-ssr'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <h1>This is a website blinky</h1>
                <NoSSR onSSR={< div > Loading ...</div>}>
                    <section>
                        <h2>
                            This section is
                            <em>only</em>
                            client-side rendered.
                        </h2>
                    </section>
                </NoSSR>
            </div>
        )
    }
}
