import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style.js";
const URL = "http://localhost:3001/propostas";
const statusCode = {
  0: "RECEBIDO",
  7: "PENDENTE",
};
export default function Table() {
  const [allPropostas, setAllPropostas] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      try {
        const { data } = await axios.get(URL);
        setAllPropostas(data);
      } catch (e) {
        console.log(e);
      }
    };
    getApi();
  }, []);
  return (
    allPropostas && (
      <>
        <S.contain>
          <S.headeSection>
            <S.span>NOTA FISCAL</S.span>
            <S.span pad="91px">SACADO</S.span>
            <S.span pad="92px">CEDENTE</S.span>
            <S.span pad="73px">EMISSÃO</S.span>
            <S.span pad ="70px">VALOR</S.span>
            <S.span pad ="126px">STATUS</S.span>
            <S.span> </S.span>
          </S.headeSection>
              {" "}
              <section>
            {allPropostas.map(
              ({ notaFiscal, sacado, cedente, emissao, valor, status }) => (
                <S.sectionLines key={notaFiscal}>
                  <S.itensTable pad="30px">{notaFiscal}</S.itensTable>
                  <S.itensTable pad="141px">{sacado}</S.itensTable>
                  <S.itensTable pad="68px">{cedente}</S.itensTable>
                  <S.itensTable pad="50px">{new Date(emissao).toLocaleDateString("pt")}</S.itensTable>
                  <S.itensTable pad="72px" colorC="#00AD8C">{`${Number(valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`}</S.itensTable>
                  <S.itensTable font="12px" pad="86px" color={statusCode[status]}>{statusCode[status]}</S.itensTable>
                  <S.button>
                    <S.p>Dados do Cedente</S.p>
                  </S.button>
                 </S.sectionLines>
              )
            )}
          </section>
        </S.contain>
      </>
    )
  );
}
