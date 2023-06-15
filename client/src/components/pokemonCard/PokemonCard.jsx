export const PokemonCard = ({id, name, type}) => {

    return (
        <div className="card">
            <img src="" alt="" />
            <div className="card-body">
                <h2>{name}</h2>
                <p>{type}</p>
            </div>
        </div>
    )


}