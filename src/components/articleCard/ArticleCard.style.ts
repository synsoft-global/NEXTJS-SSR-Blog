import { Style } from '@/types/Style.type'



export const style: Style = {
  root: {
    height: 1,
  },
  box: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'unset',
    alignContent: 'unset',
    alignItems: 'unset',
    gap: 2,
    p: 2,
    width: 1,
  },
  thumbnailBox: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    width: 1,
    aspectRatio: 4 / 2.8,
    borderRadius: 1,
    bgcolor: 'background.light',
    boxShadow: (theme: any) => `inset 0 0 0 1px ${theme.palette.divider}`,
    'img': {
      transition: 'transform .25s ease-in-out',
      transformOrigin: 'center',
      display: 'block',
    },
    ':hover': {
      'img': {
        transform: 'scale(1.07)'
      }
    }
  },
  content: {
    gap: .5,
  }
}