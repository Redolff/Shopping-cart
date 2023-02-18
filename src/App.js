import { Component } from 'react'
import Productos from './components/Productos'
import Title from './components/Title'
import NavBar from './components/NavBar'
import './App.css'


//En las ARROW FUNCTIONS, no es necesario el "RENDER"
class App extends Component {

  state = {
    productos: [
      {id: 1, name: 'River', price: '14999.00', img: '/imagenes/river.jpg' },
      {id: 2, name: 'Boca', price: '14999.00', img: '/imagenes/boca.jpg' },
      {id: 3, name: 'Independiente', price: '12999.00', img: '/imagenes/independiente.jpg' },
      {id: 4, name: 'Racing', price: '12999.00', img: '/imagenes/racing.jpg' },
      {id: 5, name: 'San Lorenzo', price: '10000.00', img: '/imagenes/sanlorenzo.jpg' },
      {id: 6, name: 'Velez', price: '$9000.00', img: '/imagenes/velez.jpg' },
      {id: 7, name: 'Lanus', price: '9000.00', img: '/imagenes/lanus.jpg' },
      {id: 8, name: 'Estudiantes', price: '9000.00', img: '/imagenes/estudiantes.jpg' },
      {id: 9, name: 'Gimnasia de la Plata', price: '6000.00', img: '/imagenes/gimnasia.jpg' },
    ],
    carro: [],
    carroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if(carro.find(x => x.id === producto.id)){
      const newCarro = carro.map(x => x.id === producto.id ? ({
        ...x,
        cantidad: x.cantidad + 1,
      }): x)
      return this.setState({carro : newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return 
    }
    this.setState({ carroVisible: !this.state.carroVisible })
  }

  render(){  
    const { carroVisible } = this.state
    return (
      <div>
        <NavBar carro={this.state.carro} carroVisible={carroVisible} mostrarCarro={this.mostrarCarro} />
        <Title />
        <div className="container text-center">
          <Productos 
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </div>
      </div>
    )
  }
}

export default App;