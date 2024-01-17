import { Theme, createTheme } from '@mui/material'

import { createTypography, overridesTypography } from './typography'
import { createPalette } from './palette'
import { overridesComponent } from './components'
import { createShadows } from './shadows'



let theme = createTheme({
  palette: createPalette(),
  typography: createTypography(),
  shadows: createShadows(),
  shape: {
    borderRadius: 8
  }
})


theme = createTheme(theme, {
  components: overridesComponent(theme),
  typography: overridesTypography(theme)
} as Theme)


export { theme }