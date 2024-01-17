import { Theme } from '@mui/material'



export const overridesComponent = (theme: Theme) => {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState }) => theme.unstable_sx({
          textTransform: 'unset',
          ...(ownerState.size === 'large' && {
            fontSize: 'body2.fontSize',
            px: 2.5,
          })
        })
      }
    },
    MuiFab: {
      defaultProps: { color: 'primary', size: 'small' },
      styleOverrides: {
        root: {
          boxShadow: 'unset'
        }
      }
    },
    MuiCard: {
      defaultProps: {
        elevation: 2
      }
    },
    MuiPagination: {
      defaultProps: {
        shape: 'rounded'
      }
    }
  } as Theme['components']
}   