import { alpha } from '@mui/material'
import { Style } from '@/types/Style.type'



export const style: Style = {
  logo: {
    fontSize: 30,
    fontWeight: 800,
    lineHeight: 1,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'text.primary',
    span: {
      color: 'primary.main',
      textShadow: (theme: any) => `2px 1px 0 ${alpha(theme.palette.primary.main, .25)}`,
    }
  },
}