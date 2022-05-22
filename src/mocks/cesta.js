import cestaImage from "../../assets/cesta.jpg"
import tomate from "../../assets/tomate.jpg"
import pepino from "../../assets/pepino.jpg"
import batata from "../../assets/batata.jpg"
import brocolis from "../../assets/brocolis.jpg"
import abobora from "../../assets/abobora.jpg"

const cesta = {
  topo: {
    titulo: ""
  },
  botao: "Comprar",
  detalhes: {
    nome: "Cestas de Verduras",
    nomeFazenda: "Pedro's Farm",
    descricao: " Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    preco: "R$ 40,00",
    logoFazenda: cestaImage,

  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      }
    ]
  }


}

export default cesta