import { Component, ErrorInfo } from 'react'

import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.type'
import FullPageError from '../fullPageError/FullPageError.component'



export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: props.error || false }
  }


  static getDerivedStateFromError(_: Error): Partial<ErrorBoundaryState> {
    return { hasError: true }
  }


  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error({ error, errorInfo })
  }


  handleReload = () => {
    window.location.reload()
  }


  render() {
    if (this.state.hasError) return <FullPageError />
    else return this.props.children
  }
}
