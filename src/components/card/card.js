import "./card.css";


const Card = ({imgSrc, title, description, price, onClick}) => {
    return(
        <div className="card-container">
            {imgSrc && <img src={imgSrc} alt="..." style={{width: '100%'}}/>}
            <div style={{padding: "0.5rem"}}>
                <p style={{fontWeight: 500}}>{title}</p>
                <p>{description}</p>
                <p>{price}$</p>
            </div>
            <button onClick={onClick}>Read more</button>
        </div>
    )
}

export default Card;