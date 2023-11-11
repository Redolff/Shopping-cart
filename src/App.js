import { Component } from 'react'
import Productos from './components/Productos'
import Title from './components/Title'
import NavBar from './components/NavBar'
import './App.css'
import river from './assets/river.jpg';
import boca from './assets/boca.jpg'
import independiente from './assets/independiente.jpg'
import racing from './assets/racing.jpg'
import sanlorenzo from './assets/sanlorenzo.jpg'
import estudiantes from './assets/estudiantes.jpg'
import velez from './assets/velez.jpg'
import lanus from './assets/lanus.jpg'
import gimnasia from './assets/gimnasia.jpg'


//En las ARROW FUNCTIONS, no es necesario el "RENDER"
class App extends Component {

  state = {
    productos: [
      {id: 1, name: 'River', price: '14999.00', img: river },
      {id: 2, name: 'Boca', price: '14999.00', img: boca },
      {id: 3, name: 'Independiente', price: '12999.00', img: independiente },
      {id: 4, name: 'Racing', price: '12999.00', img: racing },
      {id: 5, name: 'San Lorenzo', price: '10000.00', img: sanlorenzo },
      {id: 6, name: 'Velez', price: '$9000.00', img: velez },
      {id: 7, name: 'Lanus', price: '9000.00', img: lanus },
      {id: 8, name: 'Estudiantes', price: '9000.00', img: estudiantes },
      {id: 9, name: 'Gimnasia de la Plata', price: '6000.00', img: gimnasia },
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

  //Borrar producto x id ....
  /*deleteProdXid = (id) => {
    const { carro } = this.state
    console.log(id)
    if(carro.length > 0){
      const newCarro = carro.find((x) => x.id === id)
      newCarro.splice(0, 1)
    }
    return this.setState({ carro })
  }*/

  
  
  render(){  
    const { carroVisible } = this.state
    return (
      <div>
        <NavBar 
          carro={this.state.carro} 
          carroVisible={carroVisible} 
          mostrarCarro={this.mostrarCarro} 
        />
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