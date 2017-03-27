import Document, {Head, Main, NextScript} from 'next/document'
import Link from 'next/link'
import Router from 'next/router'

export default class MyDocument extends Document {

    static getInitialProps({req, renderPage}) {
        const {html} = renderPage()
        return req
            ? {
                host: req.headers['host'],
                html: html
            }
            : {
                host: navigator.host,
                html
            }
    }

    render() {
        return (
            <html>
                <Head>
                    <title>GENOSHA</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700" rel="stylesheet"/>
                    <link rel="stylesheet" type="text/css" href="/static/normalize.css"/>
                    <link rel="stylesheet" type="text/css" href="/static/master.css"/>
                    <link rel="stylesheet" type="text/css" href="/static/animate.css"/>
                </Head>
                <body>
                    <nav>
                        <div className="button">
                            <Link prefetch href="/" as="/">
                                HOME
                            </Link>
                        </div>
                        <div className="button">
                            <Link prefetch href="/about" as="/about">
                                ABOUT
                            </Link>
                        </div>
                        <div className="button">
                            <Link prefetch href="/blinky" as="/blinky">
                                BLINKY
                            </Link>
                        </div>
                    </nav>
                    <Main className="full-height"/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}
