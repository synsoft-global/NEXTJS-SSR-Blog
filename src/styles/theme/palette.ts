import { Theme, alpha } from '@mui/material'



export const createPalette = () => {
  return {
    mode: 'light',
    divider: 'rgb(0 0 0 / 5%)',
    primary: {
      main: '#6366f1'
    },
    background: {
      light: '#fafafa',
    },
    text: {
      secondary: '#6C737F',
      disabled: '#9d9da5',
    },
  } as Theme['palette']
}


declare module '@mui/material/styles' {
  interface TypeBackground {
    light: string
  }
}