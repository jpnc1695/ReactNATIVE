import React from "react";
import Texto from "@/src/componentes/Texto";
import Ifrutas from "@/src/interface/frutas";
import { View , Image, StyleSheet} from "react-native";


type ItemProps = {item:Ifrutas}

export default function Item({item}: ItemProps) {
   
  return (
     <View key={item.nome} style={estilos.item}>
        <Image source={require("@/assets/frutas/Abóbora.png")} style={estilos.imagem}/>
        <Texto texto={item.nome} estilo={estilos.nome}/>
      </View>  
      
  );
}

const estilos = StyleSheet.create({
    item:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        borderStyle: "solid",
        padding: 16,
        alignItems: "center",
    },
    imagem:{
        width: 50,
        height: 50
    },
    nome:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})
