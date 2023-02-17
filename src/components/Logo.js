import { Component } from 'react'
import '../styles/Logo.css'

class Logo extends Component {
    render() {
        return (
            <div className='logo'>   
               <a href='http://localhost:3000/'> <img className='img' src='../imagenes/Logo.png' alt='logo' /> </a> 
            </div>
        )
    }
}

export default Logo