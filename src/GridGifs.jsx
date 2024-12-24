import { Gif } from "./Gif"
export const GridGifs = ({gifs}) => {

    return (
        <div className="grid-gifs">
            {gifs.length > 0 ? (gifs.map(gif => (
               <Gif gif = {gif}></Gif>
            ))) : (
                <p>No hay nada para mostrar</p>
            )}
        </div>
    )
}