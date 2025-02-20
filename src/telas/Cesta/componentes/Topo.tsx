import React from "react";
import Texto from "@/src/componentes/Texto";
import { Image, StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("screen").width;

interface Props{
    titulo:string
}

export default function Topo({titulo}:Props) {
  return (
    <>
      <Image
        source={require("@/assets/topo.png")}
        style={estilos.topo}
      />
      <Texto texto={titulo} estilo={estilos.titulo} />
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 26,
    padding: 15,
  }
});
