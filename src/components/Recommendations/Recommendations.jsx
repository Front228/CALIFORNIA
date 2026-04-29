import watchTwo from '../../assets/image/2Waatch.png' 
import TwoImage from '../../assets/image/anyPhone.png' 
import ThreeImage from '../../assets/image/phone-mac.png' 

import CardRecomment from "../CardRecomment"
import Title from "../Title"
import './Recommendations.scss'

const products = [
    {image: watchTwo, title: "Latest and gratest", subtitle: "Smart light bulb pack"},
    {image: TwoImage, title: "Best selling", subtitle: "Smart light bulb pack"},
    {image: ThreeImage, title: "Every product", subtitle: "Smart light bulb pack"},
] 
const Recommendations = () => {

    return (
        <div className="recomment">
            <Title 
                title={"See the best around here"}
                subtitle={"Our new Limited Edition Winter Design BESPOKE 4-Door Flex™"}
            />
            <div className="recFlex">
                {products.map((item,i) => (
                    <CardRecomment 
                        key={i} 
                        image={item.image} 
                        title={item.title} 
                        subtitle={item.subtitle}
                    />
                ))}
            </div>
        </div>
    )

}

export default Recommendations