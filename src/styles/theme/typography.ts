import { Theme } from '@mui/material'
import { Plus_Jakarta_Sans } from 'next/font/google'



const plusJakartaSansFont = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})


export const createTypography = () => {
  return {
    fontFamily: `${plusJakartaSansFont.style.fontFamily}, system-ui, sans-serif`,
    h1: {
      fontSize: '2rem',
      fontWeight: 800,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h4: {
      fontSize: '0.83rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h5: {
      fontSize: '0.7rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h6: {
      fontSize: '0.6rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    body1: {
      fontWeight: 600,
    }
  } as Theme['typography']
}


export const overridesTypography = (theme: Theme) => {
  return {
    body2: theme.unstable_sx({
      color: 'text.secondary'
    }),
    caption: theme.unstable_sx({
      color: 'text.disabled'
    }),
  } as Theme['typography']
}