import { Component } from 'react'
import Carro from './Carro'
import Logo from './Logo'

class NavBar extends Component {
    render(){
        const { carro, carroVisible, mostrarCarro } = this.props;
        return (
            <nav>
                <Logo />
                <Carro 
                    carro={carro}  
                    carroVisible={carroVisible}
                    mostrarCarro={mostrarCarro}
                />
            </nav>
        )
    }
}

export default NavBar