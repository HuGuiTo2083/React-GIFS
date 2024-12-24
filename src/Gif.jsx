export const Gif = ({gif}) => {
return (
    <img className="gif" key={gif.id} src={gif.images.original.url} alt="Gif" />
)

}