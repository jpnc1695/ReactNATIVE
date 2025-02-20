import React from "react";
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";
import Texto from "@/src/componentes/Texto";
import { StyleSheet, View, FlatList } from "react-native";
import Frutas from "@/src/mocks/cesta";

export default function Cesta() {
  return (
    <>
      <FlatList
        data={Frutas}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return <>
            <Topo titulo={"Detalhes da Cesta"} />
            <View style={estilos.cesta}>
              <Detalhes
                nomeDaCesta={"Cesta de verduras"}
                nomeDafazenda={"Almada FOGO Farma"}
                descricaoDaCesta={
                  "Cesta de verduras com produtos orgânicos selecionados da fazenda direto pra sua casa"
                }
                precoDaCesta={"R$40,00"}
                botaoCompra={"Comprar"}
              />
              <Texto texto={"Itens da Cesta"} estilo={estilos.titulo}/>
            </View>
          </>;
        }}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15,
    lineHeight: 20,
  },
});
