import React from "react";
import Texto from "@/src/componentes/Texto";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

interface Props{
  nomeDaCesta: string,
  nomeDafazenda:string,
  descricaoDaCesta:string,
  precoDaCesta:string
  botaoCompra:string

}

export default function Detalhes({nomeDaCesta, nomeDafazenda, descricaoDaCesta, precoDaCesta, botaoCompra}:Props) {
  return (
    <>
      <Texto texto={nomeDaCesta} estilo={estilos.nome} />
      <View style={estilos.fazenda}>
        <Image
          style={estilos.imagemFazenda}
          source={require("@/assets/logo.png")}
        ></Image>
        <Texto texto={nomeDafazenda} estilo={estilos.nomeFazenda} />
      </View>
      <Texto
        texto={
          descricaoDaCesta
        }
        estilo={estilos.descricao}
      />
      <Texto texto={precoDaCesta} estilo={estilos.preco} />
      <TouchableOpacity style={estilos.botao}>
          <Texto texto={botaoCompra} estilo={estilos.textoBotao}/>
      </TouchableOpacity>
    </>
  );
}


const estilos = StyleSheet.create({
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
      },
    
      imagemFazenda: {
        width: 32,
        height: 32,
      },
    
      nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight:"bold"
      },
      nomeFazenda: {
        lineHeight: 26,
        fontSize: 16,
        marginLeft: 12,
      },
    
      descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 16,
        fontWeight: "bold"
      },
    
      preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
      },
      botao:{
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
        
      },
      textoBotao:{
        textAlign: "center",
        color: "#ffffff",
        fontSize: 19,
        lineHeight: 26,
        fontWeight: "bold"
      }
      
})