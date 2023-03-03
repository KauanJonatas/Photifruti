import React, { Component } from "react";
import "./FruitsStyle.css";
import alface from "./imagens/alface2.png";
import beterraba from "./imagens/beterraba2.png";
import cenoura from "./imagens/cenoura2.png";
import cereja from "./imagens/cereja2.png";
import laranja from "./imagens/laranja2.png";
import limao from "./imagens/limao2.png";
import manga from "./imagens/manga2.png";
import tomate from "./imagens/tomate2.png";

class Frutas extends Component {
    state = {
        frutas: [
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

    render() {
        return (
            <div>
                <p className="usProducts">Nossos Produtos</p>
                <div className="box">
                    {this.state.frutas.map((fruta) => (
                        <div className="frutaBox">
                            <img src={fruta.imagem}></img>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Frutas