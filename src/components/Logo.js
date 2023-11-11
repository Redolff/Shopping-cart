import { Component } from 'react'
import '../styles/Logo.css'
import logo from '../assets/logo.png'

class Logo extends Component {
    render() {
        return (
            <div className='logo'>   
               <a href='http://localhost:3000/'> <img className='img' src={logo} alt='logo' /> </a> 
            </div>
        )
    }
}

export default Logo