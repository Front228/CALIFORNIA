import laptop from '../../assets/image/Lattop.png'
import watch from '../../assets/image/watch.png'
import phone from '../../assets/image/phone.png'
import ipad from '../../assets/image/ipad.png'

import Title from '../Title'
import './Categories.scss'

const Categories = () => {

    return (
        <div className='categories'>
            <Title 
            title={"Shop our latest offers and categories"}
            subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />


         <div className="grid">
            <div className="laptop"> 
                <div className='image-laptop'>
                    <img src={laptop} alt="" />
                </div>
                <div className='laptop-text'>
                    <span>Laptops</span>
                    <p>True Laptop Solution</p>
                </div>
            </div>
            <div className="watch">
                <div className='watch-image'>
                    <img src={watch} alt="" />    
                </div> 
                <div className='watch-text'>
                    <span>Watch</span>
                    <p>Not just stylisht</p>
                </div>
            </div>
            <div className="iphone">
                <div className='phone-image'>
                    <img src={phone} alt="" />    
                </div>
                <div className="phone-text">
                    <span>Phones</span>
                    <p>Your day to day life</p>    
                </div> 
            </div>
            <div className="ipad">
                <div className='ipad-image'>
                    <img src={ipad} alt="" />
                </div>
                <div className="ipad-text">
                    <span>Tablet</span>
                    <p>Empower your work</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Categories