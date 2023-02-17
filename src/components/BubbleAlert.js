import { Component } from "react"
import '../styles/BubbleAlert.css'

class BubbleAlert extends Component{
    getNumber(n){
        if(!n){
            return ' '
        }
        return n > 9 ? '9+' : n; //SI EL NUMERO ES MAYOR A 9, RETORNO 9+ Y SI NO, EL NUMERO.
    }

    render(){
        const { value } = this.props;
        return (
            <span className="bubble">
                {this.getNumber(value)}
            </span>
        )
    }
}

export default BubbleAlert