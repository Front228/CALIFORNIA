import './Title.scss'

const Title = (props) => {
    const {
        title,
        subtitle,
    } = props

    return (
        <div className="block-title">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}

export default Title