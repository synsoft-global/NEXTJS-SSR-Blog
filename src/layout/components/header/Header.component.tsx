import Link from 'next/link'
import { useState } from 'react'
import { Button, Container, Stack, useMediaQuery, Theme, Drawer, IconButton, List, ListItemButton, ListItemText, ListItem, ListSubheader } from '@mui/material'
import { MdMenu } from 'react-icons/md'

import Logo from '@/components/logo/Logo.component'
import { style } from './Header.style'
import { NAVS } from './Header.config'



export default function Header() {
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))
  const [showMenu, setShowMenu] = useState(false)


  const handleMenu = (value: boolean) => {
    setShowMenu(value)
  }


  const contactUsButton = <>
    <Button
      variant='contained'
      size='large'
      target='_blank'
      href='https://www.synsoftglobal.com/contact-us/'
      component={Link}
      onClick={() => handleMenu(false)}
    >Contact Us
    </Button>
  </>


  return (
    <Stack component='header' sx={style.root}>
      <Stack component={Container} sx={style.container}>

        {/* Logo */}
        <Stack direction='row'>
          <Logo />
        </Stack>

        {isMdUp ?
          <>
            {/* Desktop - Nav */}
            <Stack component='nav' sx={style.desktopNav}>
              {NAVS.map((item, index) =>
                <Button component={Link} href={item.link} sx={style.desktopNavItem} color='inherit' key={index}>{item.label}</Button>
              )}
            </Stack>

            <Stack sx={style.actionButtonsBox}>
              {contactUsButton}
            </Stack>
          </>
          :
          <>
            {/* Mobile - Nav */}
            <Stack justifyContent='center'>
              <IconButton edge='end' aria-label='Menu' onClick={() => handleMenu(true)}>
                <MdMenu />
              </IconButton>
            </Stack>

            <Drawer open={showMenu} onClose={() => handleMenu(false)}>
              <Stack component='nav' width='min(250px , 75vw)'>
                <List subheader={<ListSubheader component='div'>Menus</ListSubheader>}>
                  {NAVS.map((item, index) =>
                    <ListItem disablePadding key={index}>
                      <ListItemButton onClick={() => handleMenu(false)}>
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    </ListItem>
                  )}
                </List>

                <Stack px={2} mt={1}>
                  {contactUsButton}
                </Stack>
              </Stack>
            </Drawer>
          </>
        }
      </Stack>
    </Stack>
  )
}
