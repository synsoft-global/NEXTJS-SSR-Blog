import { Style } from '@/types/Style.type'



export const style: Style = {
  root: {
    my: 10,
  },
  container: {
    textAlign: 'center',
    alignItems: 'center',
    gap: 2,
    '.error-icon': {
      fontSize: 65,
      color: 'error.main',
      mb: 1,
    }
  },
  reloadButton: {
    px: 3,
  }
}