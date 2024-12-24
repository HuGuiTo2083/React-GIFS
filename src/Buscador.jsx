export const Buscador = ({onSubmit, valorInput, onChange}) => {
    return (
        <form className="form-buscador" onSubmit={onSubmit}>
            <input className="buscador" value={valorInput} onChange={event => onChange(event)}></input>
        </form>

    )

}