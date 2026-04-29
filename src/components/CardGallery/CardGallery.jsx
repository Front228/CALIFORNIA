import watch from '../../assets/image/Smart-Galaxy.png'
import iPad from '../../assets/image/iPad-white.png'
import MacBookPro from '../../assets/image/MacBook-Pro.png'
import MacBookAir from '../../assets/image/MacBook-Air.png'
import './CardGallery.scss'
import Title from '../Title'
import Card from '../Card'

const products = [
    {image: MacBookPro, title: "MacBook Pro 13" , description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet", price: "1,200.00" },
    {image: watch, title: "Smart Galaxy Watch 3" , description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", price: "199.00" },
    {image: MacBookAir, title: "MacBook Air M1" , description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", price: "1,009.00" },
    {image: iPad, title: "iPad" , description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", price: "610.00" },
]
const CardGallery = () => {
    return (
        <div className='cardGallery'>
            <Title 
                title={"Save on our most selled items."} 
                subtitle={"Our new Limited Edition Winter Design BESPOKE 4-Door Flex™"}
            />


            <div className='cardFlex'>
                {products.map((item, index) => (
                    <Card 
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                    />
                ))}       
            </div>
        </div>
    )
}

export default CardGallery