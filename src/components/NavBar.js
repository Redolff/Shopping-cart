import { Component } from 'react'
import Carro from './Carro'
import Logo from './Logo'

class NavBar extends Component {
    render(){
        const { carro } = this.props;
        return (
            <nav>
                <Logo />
                <Carro carro={carro} />
            </nav>
        )
    }
}

export default NavBar