import React, {Component} from "react";
import "./App.css"
import alface from "./imagens/alface.png";
import beterraba from "./imagens/beterraba.png";
import cenoura from "./imagens/cenoura.png";
import cereja from "./imagens/cereja.png";
import laranja from "./imagens/laranja.png";
import limao from "./imagens/limao.png";
import manga from "./imagens/manga.png";
import tomate from "./imagens/tomate.png";

class App extends Component{

  state = {
    frutas:[
      {
        imagem: alface
      },
      {
        imagem: laranja
      },
      {
        imagem: cereja
      },
      {
        imagem: cenoura
      },
      {
        imagem: manga
      },
      {
        imagem: limao
      },
      {
        imagem: beterraba
      },
      {
        imagem: tomate
      }
    ]
  }

  render(){
    return(
      <div>
        <h1>Hortifruti VnW</h1>
        <h2>Nossos Produtos</h2>
        <div className="box">
          {this.state.frutas.map((fruta)=>(
            <div>
            <img src={fruta.imagem}></img>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
