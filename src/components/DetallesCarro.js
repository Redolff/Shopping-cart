import { Component } from 'react'
import '../styles/DetallesCarro.css'

class DetallesCarro extends Component {
    render(){
        const { carro } = this.props
        return (
            <div className='detalles'>
                <ul className='carro-prod'>
                    {carro.map(x => 
                    <li className='prod' key={x.id}> 
                        <img alt={x.name} src={x.img} width='50' height='40' />
                        {x.name} <span> {x.cantidad} </span> 
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro