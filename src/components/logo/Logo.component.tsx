import Link from 'next/link'
import { ButtonBase } from '@mui/material'

import { style } from './Logo.style'



export default function Logo() {
  return (
    <ButtonBase href='/' component={Link} sx={style.logo}>News<span>X</span></ButtonBase>
  )
}
