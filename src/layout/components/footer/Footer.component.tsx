import Link from 'next/link'
import { Button, Container, Divider, Fab, Grid, Stack, Typography } from '@mui/material'

import Logo from '@/components/logo/Logo.component'
import { style } from './Footer.style'
import { TNavItem } from './Footer.type'
import { NAVS, SOCIAL_MEDIA_LINKS } from './Footer.config'



export default function Footer() {

  const createNavItems = (items: TNavItem[], heading: string) => {
    return (
      <Stack gap={2} sx={style.navBox}>
        <Typography variant='body1' component='h3'>{heading}</Typography>
        <Stack component='nav'>
          {items.map((item, index) =>
            <Button color='inherit' component={Link} href={item.link} sx={style.navItem} key={index}>{item.label}</Button>
          )}
        </Stack>
      </Stack>
    )
  }


  return (
    <Stack component='footer' sx={style.root}>
      <Stack component={Container} divider={<Divider />} sx={style.container}>
        <Grid container mb={4} spacing={3}>

          {/* About */}
          <Grid item xs={12} sm={6} md={3}>
            <Stack alignItems='start' gap={2}>
              <Logo />
              <Typography variant='body2'>
                Your source for reliable and timely global news. Stay informed with our comprehensive coverage.
              </Typography>
            </Stack>
          </Grid>

          {/* Links */}
          <Grid item xs={12} sm={6} md={3}>
            {createNavItems(NAVS.LINKS, 'Links')}
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={6} md={3}>
            {createNavItems(NAVS.LEGALS, 'Legal')}
          </Grid>

          {/* Follow Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Stack gap={2}>
              <Typography variant='body1' component='h3'>Follow Us</Typography>
              <Stack direction='row' gap={1.5}>
                {SOCIAL_MEDIA_LINKS.map((item, index) =>
                  <Fab rel='noopener noreferrer' aria-label='Social link' component={Link} href={item.link} sx={style.socialLink} key={index}>{item.children}</Fab>
                )}
              </Stack>
            </Stack>
          </Grid>

        </Grid>

        {/* Copyright */}
        <Typography variant='body2' sx={style.copyright}>&copy;{new Date().getFullYear()} NewsX. All right reserved</Typography>

      </Stack>
    </Stack>
  )
}
