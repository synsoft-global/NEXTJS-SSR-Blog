import { Style } from '@/types/Style.type'



export const style: Style = {
  breadcrumbs: {
    mt: 2,
    '.MuiBreadcrumbs-ol': {
      overflow: 'hidden',
      flexWrap: 'nowrap',
      '.MuiBreadcrumbs-li': {
        overflow: 'hidden'
      }
    }
  },
  thumbnailBox: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    bgcolor: 'background.light',
    boxShadow: (theme: any) => `inset 0 0 0 1px ${theme.palette.divider}, ${theme.shadows[1]}`,
    width: 1,
    aspectRatio: 4 / 1.4,
    borderRadius: 1,
    maxHeight: '70vh',
    minHeight: 'min(350px, 50vh)',
    mt: 4,
  },
}