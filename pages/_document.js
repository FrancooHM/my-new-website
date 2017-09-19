import Document, {Head, Main, NextScript} from 'next/document'
import Link from 'next/link'
import Router from 'next/router'

export default class MyDocument extends Document {

    static getInitialProps({pathname, renderPage}) {
        const {html} = renderPage()
        var home = ""
        var contact = ""
        var goodbye = ""

        switch (pathname) {
            case "/index":
                home = "active"
                break;

            case "/contact":
                contact = "active"
                break;

            case "/goodbye":
                goodbye = "active"
                break;
            default:
                home = true
        }

        return {
            html,
            active: {
                home,
                contact,
                goodbye
            },
            pathname
        }
    }

    setCSSHeaders = (pathname) => {
        if (pathname === "/goodbye") {
            return (
                <Head>
                    <title>Franco Rabglia Website</title>
                    <meta name="robots" content="Index follow"/>
                    <meta name="title" content="Franco Rabglia Website"/>
                    <meta name="description" content="Franco Rabalgia Website"/>
                    <meta name="keywords" content="developer,javascript,fullstack,lead,senior,engineer"/>
                    <meta name="author" content="Franco Rabalgia"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
                    <link href="https://fonts.googleapis.com/css?family=Rubik:400,700" rel="stylesheet"/>
                    <link rel="stylesheet" type="text/css" href="/static/normalize.css"/>
                    <link rel="stylesheet" type="text/css" href="/static/goodbye-master.css"/>
                    <link rel="stylesheet" type="text/css" href="/static/index.css"/>
                    <link rel="stylesheet" type="text/css" href="/static/animate.css"/>
                </Head>
            )
        } else {
            return (
                <Head>
                    <title>Franco Rabglia Website</title>
                    <meta name="robots" content="Index follow"/>
                    <meta name="title" content="Franco Rabglia Website"/>
                    <meta name="description" content="Franco Rabalgia Website"/>
                    <meta name="keywords" content="developer,javascript,fullstack,lead,senior,engineer"/>
                    <meta name="author" content="Franco Rabalgia"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
                    <link href="https://fonts.googleapis.com/css?family=Rubik:400,700" rel="stylesheet"/>
                    <link rel="stylesheet" type="text/css" href="/static/normalize.css"/>
                    <link rel="stylesheet" type="text/css" href="/static/master.css"/>
                    <link rel="stylesheet" type="text/css" href="/static/index.css"/>
                    <link rel="stylesheet" type="text/css" href="/static/animate.css"/>
                </Head>
            )
        }

    }

    render() {
        return (
            <html>
                {this.setCSSHeaders(this.props.pathname)}
                <body>
                    <nav id="__nav" className="animated fadeIn">
                        <div className={"button " + this.props.active.home}>
                            <Link prefetch href="/" as="/">
                                HOME
                            </Link>
                        </div>
                        <div className={"button " + this.props.active.contact}>
                            <Link prefetch href="/contact" as="/contact">
                                SAY HI!
                            </Link>
                        </div>
                        <div className={"button " + this.props.active.goodbye}>
                            <Link prefetch href="/goodbye" as="/goodbye">
                                GOODBYE
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
