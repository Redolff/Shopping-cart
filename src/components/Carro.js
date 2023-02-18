import { Component } from 'react'
import BubbleAlert from '../components/BubbleAlert'
import DetallesCarro from '../components/DetallesCarro'
import '../styles/Carro.css';

class Carro extends Component {
    render(){
        const { carro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
        return (
            <div>
                <span className='bubbleAlert'>
                    {cantidad !== 0 ? 
                        <BubbleAlert value={cantidad}/> 
                        : null
                    }
                </span>
                <button type="button" className="btn btn-info">
                    <iconify-icon icon="ic:round-add-shopping-cart"></iconify-icon>
                </button>
                <DetallesCarro carro={carro} />
            </div>
        )
    }
}

export default Carro