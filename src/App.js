import { Component } from 'react'
import Productos from './components/Productos'
import Title from './components/Title'
import NavBar from './components/NavBar'
import './App.css'


//En las ARROW FUNCTIONS, no es necesario el "RENDER"

class App extends Component {

  state = {
    productos: [
      {id: 1, name: 'Ferrari', price: '$580.000', img: '/imagenes/ferrari.jpg'},
      {id: 2, name: 'Lamborghini', price: '$24500', img: '/imagenes/lamborghini.jpg'},
      {id: 3, name: 'Corsa', price: '1.539.900', img: '/imagenes/corsa.jpg'},
      {id: 4, name: 'Peugeot 206', price: '1690.000', img: '/imagenes/peugeot206.jpg'},
      {id: 5, name: 'Toyota Corolla', price: '7.200.000', img: '/imagenes/toyotacorolla.jpg'},
      {id: 6, name: 'Audi TT', price: '$73.000', img: '/imagenes/auditt.jpg'},
      {id: 7, name: 'Vento', price: '12.100.000', img: '/imagenes/vento.jpg'},
      {id: 8, name: 'Bora', price: '$14.900', img: '/imagenes/bora.jpg'},
      {id: 9, name: 'Mercedes Benz', price: '$46.000', img: '/imagenes/mercedesbenz.jpg'},
    ]
  }

  render(){  
    return (
      <div>
        <NavBar />
        <Title />
        <div className="container text-center">
          <Productos 
            agregarAlCarro={() => console.log('No hace nada')}
            productos={this.state.productos}
          />
        </div>
      </div>
    )
  }
}

export default App;