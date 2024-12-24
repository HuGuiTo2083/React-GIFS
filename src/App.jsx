import { Buscador } from "./Buscador"
import { GridGifs } from "./GridGifs"
import { use } from "react"
import { useSearchGifs } from "./useSearchGifs"

const name = 'Hugo Hdez.'
let num = 1
const Test = <p>
      this is an exmaple.
            </p>
     

function App() {
  //estado
  const {onSubmit, onChange, gifs, valorInput, estaCargando} = useSearchGifs()
  return (
    <>
    <Buscador
    onSubmit = {onSubmit}
    valorInput = {valorInput}
    onChange = {onChange}
    />
   
    {
      estaCargando ? 
      (<h2>Cargando...</h2>)
      : (
      <GridGifs
        gifs = {gifs}
        ></GridGifs>
      )
    }

    

    

      
    </>
  )
}

export default App
