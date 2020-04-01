import React from 'react'
import Error from 'next/error'

export default class Page extends React.Component {
  static getInitialProps ({ res, jsonPageRes }) {
    const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null)
    return { statusCode }
  }

  render () {
    if (this.props.statusCode) {
      return <Error>{`An error occurred: ${this.props.statusCode}`}</Error>;
    }

    return <Error>💩</Error>
    
  }
}
