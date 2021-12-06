import React from 'react'
import Vector from '../../image/Vector.svg'
import * as S from './style'
export default function PageHeader() {
  return (
    <S.main>
      <S.span>
        <S.img src={ Vector} alt="icon azul"/>
        <S.h3>Notas fiscais</S.h3>
      </S.span>
      <S.p>Visulize as notas fiscais que você tem.</S.p>

    </S.main>
  )
}
