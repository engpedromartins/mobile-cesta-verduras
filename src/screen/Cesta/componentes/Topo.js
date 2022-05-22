import React from "react";

import { Image, StyleSheet, Dimensions } from 'react-native'
import Texto from "../../../components/Texto";

import fazenda from "../../../../assets/fazenda.jpg"
const width = Dimensions.get('screen').width

export default function Topo({ titulo }) {
  return <>
    <Image style={estilos.topo} source={fazenda} />
    <Texto style={estilos.titulo}>{titulo}</Texto>
  </>
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 360 / 900 * width,

  },
  titulo: {
    width: "100%",
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 16
  },
})