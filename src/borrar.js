import React from 'react'
// const Contexto = React.createContext({ hola: 'mundo' })
// // <----------------class component---------------->
// class Clase extends React.Component {
//   render() {
//     console.log('contexto de la clase', this.context.state)
//     return <div>Clase</div>
//   }
// }
// Clase.contextType = Contexto
// // <---------------function component----------------->
// function Funcion(props) {
//   console.log('contexto de la funcion', props.state.state)
//   return <div>Funcion</div>
// }
//
// // <---------------function component who updates context----------------->
// function FuncionUpdate(props) {
//   console.log('contexto de la funcion update', props.state.state)
//   function handleClick() {
//     props.state.setState(state => ({ hola: 'karina' }))
//   }
//   return <div onClick={handleClick}>Funcion Update</div>
// }
//
// function Perro() {
//   console.log('esta no deberia de renderizar')
//   const [appSate, setAppState] = useState({ hola: 'migue' })
//   const cState = { state: {}, setState: setAppState }
//   return (
//     <div>
//       <Contexto.Provider value={cState}>
//         <Clase />
//         <Contexto.Consumer>
//           {estado => (
//             <>
//               <Funcion state={estado} />
//               <FuncionUpdate state={estado} />
//             </>
//           )}
//         </Contexto.Consumer>
//       </Contexto.Provider>
//       <div>Holis</div>
//     </div>
//   )
// }
// export default Perro

class Perro extends React.Component {
  constructor() {
    super()
    this.state = { hola: 'asa' }
    this.click = this.click.bind(this)
  }
  click() {
    console.log('click')
    this.setState({ hola: 'hola' })
  }
  render() {
    console.log('renderizando')
    return <div onClick={this.click}>Hola</div>
  }
}
export default Perro
