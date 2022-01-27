const Card = ({ titulo, descripcion, removeCard, id }) => {
    return(
        <div className="card">
            <div className="card-text">
                <h4 className="card-title">
                    { titulo }
                </h4>
                <p className="card-description">
                    { descripcion }
                </p>
            </div>
            <div className="card-button">
                <button className="overlay" onClick={ () => removeCard( id ) }>
                    close
                </button>
            </div>
        </div>
    );
}

export default Card;