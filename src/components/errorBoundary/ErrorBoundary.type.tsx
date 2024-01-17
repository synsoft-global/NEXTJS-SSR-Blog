export interface ErrorBoundaryProps {
  children: React.ReactNode,
  error?: boolean
}

export interface ErrorBoundaryState {
  hasError: boolean
}