import Button from '../Button'
import './CardRecomment.scss'

const CardRecomment = (props) => {
    const {
        title,
        subtitle,
        image,
    } = props


    return (
        <div className="card-recomment">
            <div className="recomment-text">
                <p>{subtitle}</p>
                <h3>{title}</h3>
                <Button className="button">Explore</Button>
            </div>
            <div className="recomment-image">
                <img src={image} alt={title || 'Product'} />
            </div>
        </div>
    )
}

export default CardRecomment