import { useState } from "react"

const name = 'Hugo Hdez.'
let num = 1
const Test = <p>
      this is an exmaple.
            </p>
     

function App() {
  //estado
  const [valorInput, setValorInput] = useState('');
  const [gifs, setGifs] = useState([]);

  const getGifs = async (query) =>{
     const url = `https://api.giphy.com/v1/gifs/search?api_key=pbjI8BmjwDOJ2FZQpCJGt6aIwMUUSA3h&q=${query}`
    const response = await fetch(url)
    const data = await response.json()
    return data.data
  }

  

  const onChange = (event) => {
  const valor = event.target.value
  setValorInput(valor)
  }

  const onSubmit = async (event) =>{
    event.preventDefault()
    const gifs = await getGifs(valorInput)
    setGifs(gifs)
    console.log(gifs)

  }

  return (
    <>
    <form onSubmit={onSubmit}>
      <input value={valorInput} onChange={event =>onChange(event)}></input>
    </form>
    {gifs.length > 0 ? (gifs.map(gif => (
       <img key={gif.id} src={gif.images.original.url} alt="Gif" />
    ))): (
      <p>No hay nada para mostrar</p>
    )}

      
    </>
  )
}

export default App
