import React, {Component} from 'react'
import './CartStyle.css'

class Cart extends Component{
    render(){
        return(
        <div>
            <div className="border">
                <div className='cartBox'></div>
                <div className='buttons'></div>
            </div>
        </div>
        )
    }
}

export default Cart