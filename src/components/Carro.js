import { Component } from 'react'
import BubbleAlert from '../components/BubbleAlert'
import '../styles/Carro.css';

class Carro extends Component {
    render(){
        return (
            <div>
                <span className='bubbleAlert'>
                    <BubbleAlert value={3} />
                </span>
                <button type="button" className="btn btn-info">
                    <iconify-icon icon="ic:round-add-shopping-cart"></iconify-icon>
                </button>
            </div>
        )
    }
}

export default Carro