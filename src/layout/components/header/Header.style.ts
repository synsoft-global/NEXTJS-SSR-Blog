import { Style } from '@/types/Style.type'



export const style: Style = {
  root: {
    boxShadow: '1',
    minHeight: 66,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    '>*': {
      flex: { xs: 'unset', md: 1 },
    }
  },
  desktopNav: {
    flexDirection: 'row',
  },
  desktopNavItem: {
    color: 'text.primary',
    fontWeight: 600,
    borderRadius: 0,
    px: 2,
  },
  actionButtonsBox: {
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
}