import React from "react";
import { Text,StyleSheet } from "react-native";

interface Props{
    texto: string
    estilo?: {} 
}


const Texto = ({texto, estilo}:Props) =>{
    let tipoDeFonte = estilos.texto

    if(estilo?.hasOwnProperty("fontWeight")){
        tipoDeFonte = estilos.textoNegrito
    }

    return(
        <Text style={[tipoDeFonte, estilo]}>{texto}</Text>
    )
}

const estilos = StyleSheet.create({
    texto:{
        fontFamily: "MontSerratRegular",
        fontWeight: "normal"
    },
    textoNegrito:{
        fontFamily:"MontSerratNegrito",
        fontWeight: "normal"
    }
})

export default Texto