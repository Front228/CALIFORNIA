
import './Card.scss'


const Card = (props) => {

    const {
        image,
        title,
        description,
        price,
    } = props


    return (
        <div className='card'>
            <div className='cardImage'>
                <img src={image} alt={title || 'Product'} />
            </div>
            <div className='cardInfo'>
                {title && <h3 className='cardTitle'>{title}</h3>}
                {description && <p className='cardDescription'>{description}</p>}
                {price && <p className='cardPrice'>$ {price} USD</p>}
            </div>
        </div>
    )
}

export default Card