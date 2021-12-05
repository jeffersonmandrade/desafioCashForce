import React from 'react'
import Logo  from '../../../image/Logo.svg'
import * as S from "./style"

export default function Hero() {
  return (
    <S.siderLogo>
      <S.logo src={Logo} alt='Logo cashForce' />
    </S.siderLogo>

  )
}
