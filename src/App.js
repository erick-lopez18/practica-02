import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import Header from './components/Header';
import Banner from './components/Banner';
import Courses from './components/Courses';
import Schedule from './components/Schedule';


class App extends Component {
  state = { 
    materias:[
      {clave:"IFF-1012IF8A", materia:"Estrategia de gestión de servicios de TI", hora:"14:00-15:00", grupo:"IF8A"},
      {clave:"AEB-1011IF8A", materia:"Desarrollo de aplicaciones para dispositivos móviles", hora:"15:00-16:00", grupo:"IF8A"},
      {clave:"IFF-1016IF8A", materia:"Inteligencia de negocios", hora:"18:00-19:00", grupo:"IF8A"},
      {clave:"IFD-1023IF8A", materia:"Taller de emprendedores", hora:"19:00-20:00", grupo:"IF8A"},
      {clave:"IFF-1012IF8B", materia:"Estrategia de gestión de servicios de TI", hora:"14:00-15:00", grupo:"IF8B"},
      {clave:"AEB-1011IF8B", materia:"Desarrollo de aplicaciones para dispositivos móviles", hora:"15:00-16:00", grupo:"IF8B"},
      {clave:"IFF-1016IF8B", materia:"Inteligencia de negocios", hora:"16:00-17:00", grupo:"IF8B"},
      {clave:"IFD-1023IF8B", materia:"Taller de emprendedores", hora:"19:00-20:00", grupo:"IF8B"},
    ],
    horario:[

    ],
    total: 0,
  } 
  agregar=(materia)=> {
    let horarioTemp = [...this.state.horario, materia]
    let tempTotal = horarioTemp.reduce((total, mat) => { return total + 1 }, 0)
    this.setState({
      horario: horarioTemp,
      total: tempTotal
    })
  }
  eliminar=(materia, clave)=> {
    let temporal = this.state.horario.filter((mat, c) => c !== clave)
    let tempTotal = temporal.reduce((total, mat) => { return total + 1 }, 0)
    this.setState({
      horario: temporal,
      total: tempTotal
    })
  }
  buscar = (materia) => {
    
        let existe = this.state.horario.some(mat => mat.clave === materia.clave || mat.hora === materia.hora || mat.materia === materia.materia)
   
    return existe
  }
  render() { 
    const bannerTop = "Por una Juventud Integrada al Desarrollo de México";
    const bannerBottom = "Copyright © Todos los derechos reservados";

    return (
      <div className="App">
        <Header/>
        <Banner title={<h4><i>{bannerTop}</i></h4>}/>
        <div className="App-body">
          <Courses
            materias={this.state.materias}
            agregar={this.agregar}
            buscar={this.buscar}
          />
          <Schedule
            total={this.state.total}
            horario={this.state.horario}
            eliminar={this.eliminar}
          />
        </div>
        <Banner title={<footer>{bannerBottom}</footer>}/>
      </div>
    );
  }
}
 
export default App;
