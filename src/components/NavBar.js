import { Component } from 'react'
import Carro from './Carro'
import Logo from './Logo'

class NavBar extends Component {
    render(){
        return (
            <nav>
                <Logo />
                <Carro />
            </nav>
        )
    }
}

export default NavBar