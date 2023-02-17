import { Component } from 'react'
import Producto from './Producto'

class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props;

        return (
            <div className="row">
                {productos.map((producto => 
                    <Producto 
                        agregarAlCarro={agregarAlCarro}
                        key={producto.id}
                        producto={producto}    
                    />
                ))}
            </div>
        )
    }
}

export default Productos