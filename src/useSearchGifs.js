import { useState } from "react";
export const useSearchGifs = () => {
    const [valorInput, setValorInput] = useState('');
    const [gifs, setGifs] = useState([]);
    const [estaCargando, setEstaCargando] = useState(false)


    const getGifs = async (query) =>{
       const url = `https://api.giphy.com/v1/gifs/search?api_key=pbjI8BmjwDOJ2FZQpCJGt6aIwMUUSA3h&q=${query}`
       setEstaCargando(true)
      const response = await fetch(url)
      const data = await response.json()
      setEstaCargando(false)
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
  
return {
 onSubmit,
 onChange,
 gifs,
 valorInput,
 estaCargando

}
}