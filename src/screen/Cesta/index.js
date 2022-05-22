import React from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'
import Item from './componentes/Item'
import Texto from '../../components/Texto'


export default function Cesta({ topo, detalhes, itens, botao }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return <>
            <Topo {...topo} />
            <View style={estilos.cesta}>
              <Detalhes{...detalhes} />
              <Texto style={estilos.titulo}>{itens.titulo}</Texto>
            </View>
          </>
        }}
      />
      <TouchableOpacity style={estilos.botao} onPress={() => { console.log('clicou') }}>
        <Texto style={estilos.textoBotao}>{botao}</Texto>
      </TouchableOpacity>


    </>
  )
}

const estilos = StyleSheet.create({
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 8
  },
  botao: {
    marginTop: 16,
    backgroundColor: '#2a9f85',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10

  }, textoBotao: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 26,
  }
})

