import Document, {Head, Main, NextScript} from 'next/document'
import Link from 'next/link'

export default class MyDocument extends Document {

  static getInitialProps({pathname, renderPage}) {
    const {html, head, errorHtml, chunks} = renderPage()
    var home = ""
    var contact = ""
    var goodbye = ""

    switch (pathname) {
      case "/":
        home = "active"
        break;

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
        home = "active"
    }

    return {
      html,
      head,
      errorHtml,
      chunks,
      active: {
        home,
        contact,
        goodbye
      },
      pathname
    }
  }

  setHeaders = (pathname) => {
    if (pathname === "/goodbye") {
      return (
        <Head>
          <meta name="robots" content="Index follow"/>
          <meta name="title" content="Franco Rabglia Website"/>
          <meta name="description" content="Franco Rabalgia Website"/>
          <meta name="keywords" content="developer,javascript,fullstack,lead,senior,engineer"/>
          <meta name="author" content="Franco Rabalgia"/>
          <meta name="theme-color" content="#000000"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          <link rel="manifest" href="/static/manifest.json"/>
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"/>
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon"/>
          <link rel="stylesheet" type="text/css" href="/static/styles/normalize.css"/>
          <link rel="stylesheet" type="text/css" href="/static/styles/goodbye.css"/>
          <link rel="stylesheet" type="text/css" href="/static/styles/index.css"/>
          <link rel="stylesheet" type="text/css" href="/static/styles/animate.css"/>
        </Head>
      )
    } else {
      return (
        <Head>
          <meta name="robots" content="Index follow"/>
          <meta name="title" content="Franco Rabglia Website"/>
          <meta name="description" content="Franco Rabalgia Website"/>
          <meta name="keywords" content="developer,javascript,fullstack,lead,senior,engineer"/>
          <meta name="author" content="Franco Rabalgia"/>
          <meta name="theme-color" content="#000000"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          <link rel="manifest" href="/static/manifest.json"/>
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"/>
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon"/>
          <link rel="stylesheet" type="text/css" href="/static/styles/normalize.css"/>
          <link rel="stylesheet" type="text/css" href="/static/styles/master.css"/>
          <link rel="stylesheet" type="text/css" href="/static/styles/index.css"/>
          <link rel="stylesheet" type="text/css" href="/static/styles/animate.css"/>
        </Head>
      )
    }

  }

  render() {
    return (
      <html lang="en">
        {this.setHeaders(this.props.pathname)}
        <body>
          <nav id="__nav" className="animated fadeIn">
            <div className={"button " + this.props.active.home}>
              <Link prefetch href="/" as="/">
                <a>ME</a>
              </Link>
            </div>
            <div className={"button " + this.props.active.contact}>
              <Link prefetch href="/contact" as="/contact">
                <a>SAY HI!</a>
              </Link>
            </div>
            <div className={"button " + this.props.active.goodbye}>
              <Link prefetch href="/goodbye" as="/goodbye">
                <a>GOODBYE</a>
              </Link>
            </div>
          </nav>
          <Main className="full-height"/>
          <div className="version">v2.1</div>
          <NextScript/>
          <script src="/static/core.js" defer></script>
          <script src="/static/sw.js" defer></script>
          <link href="https://fonts.googleapis.com/css?family=Rubik:400,700" rel="stylesheet" lazyload/>
        </body>
      </html>
    )
  }
}
