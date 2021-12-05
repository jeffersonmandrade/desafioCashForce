import React from "react";
import * as S from "./style";
import VectorVerde from "../../../image/VectorVerde.svg";

export default function item() {
  return (

      <S.menuItem>
        <S.rectangle/>
        <S.selected>
          <S.frame667>
            <img src={VectorVerde} alt="Logo CashForce"/>
            <S.texto>
            <p>Notas Fiscais</p>
            </S.texto>
          </S.frame667>
        </S.selected>
      </S.menuItem>

  );
}
