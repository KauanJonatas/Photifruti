import React, { Component } from 'react';
import './CartStyle.css';
import mais from './imagens/sinalMais.png';
import menos from './imagens/sinalMenos.png';

class Cart extends Component {
    render() {
        return (
            <div>
                <div className="border">
                    <div className='cartBox'>
                        <p className='cartTxt'>Arraste o seu produto aqui para colocar no carrinho</p>
                    </div>
                    <div className='buttons'>
                        <img className='mais' src={mais}></img>
                        <img className='menos' src={menos}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart