/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Router, withRouter } from 'next/router'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)

    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  
  componentDidCatch(error, errorInfo) {
      console.error('error :>> ', error)
      console.error('errorInfo :>> ', errorInfo)
    }
    
   
  render() {
    if (this.state.hasError) {
      return (
        <div className={`${this.props.className || ''}`}>
          <p>Oops, Something went wrong...</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default withRouter(ErrorBoundary)
