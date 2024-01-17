import { Style } from '@/types/Style.type'



export const style: Style = {
  root: {
    bgcolor: 'background.light',
  },
  container: {
    pt: 5,
  },
  navBox: {
    ml: 1,
    nav: {
      ml: -1,
    }
  },
  navItem: {
    color: 'text.secondary',
    textAlign: 'left',
    justifyContent: 'start',
    fontWeight: 400,
    py: .5,
  },
  socialLink: {
    fontSize: 16
  },
  copyright: {
    textAlign: 'center',
    py: 2,
  }
}