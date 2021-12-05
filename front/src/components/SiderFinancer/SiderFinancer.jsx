import React from 'react'
import Hero from './hero/Hero'
import Item from './item/Item'
import * as S from './style'

export default function SiderFinancer() {
  return (
    <S.mainSinder>
      <Hero />
      <Item />
    </S.mainSinder>
  )
}
