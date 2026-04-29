import Button from '../Button'
import mainPhoto from '../../assets/image/mainPhoto.png'
import arrow from '../../assets/icons/Arrow.svg'
import './Slider.scss'
import { useEffect, useState } from 'react'

const slidesData = [
    {
        id: 1,
        title: "The new phones are here take a look.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.",
        image: mainPhoto
    },
    {
        id: 2,
        title: "Pro cameras. Pro display. Pro performance.",
        description: "A15 Bionic chip. The fastest chip ever in a smartphone with incredible battery life.",
        image: mainPhoto // Замените на другую картинку
    },
    {
        id: 3,
        title: "iPhone 13 Pro. Oh. So. Pro.",
        description: "Super Retina XDR display with ProMotion. Cinematic mode for shooting videos.",
        image: mainPhoto // Замените на другую картинку
    }
]

const Slider = () => {
    const [current, setCurrent] = useState(0)
    const [animating, setAnimating] = useState(false)
    const [slideOut, setSlideOut] = useState(false) // направление выезда слайда

    const handleNext = () => {
        if (animating) return
        setSlideOut('left') // текущий слайд уезжает влево
        setAnimating(true)
        setTimeout(() => {
            setCurrent(p => (p + 1) % slidesData.length)
            setAnimating(false)
            setSlideOut(false)
        }, 400)
    }

    const handlePrev = () => {
        if (animating) return
        setSlideOut('right') // текущий слайд уезжает вправо
        setAnimating(true)
        setTimeout(() => {
            setCurrent(p => (p - 1 + slidesData.length) % slidesData.length)
            setAnimating(false)
            setSlideOut(false)
        }, 400)
    }

    const goToSlide = (index) => {
        if (animating || index === current) return
        setSlideOut(index > current ? 'left' : 'right')
        setAnimating(true)
        setTimeout(() => {
            setCurrent(index)
            setAnimating(false)
            setSlideOut(false)
        }, 400)
    }

    // Вычисляем transform в зависимости от направления анимации
    const getTransform = () => {
        if (!animating) return 'translateX(0)'
        if (slideOut === 'left') return 'translateX(-100%)'
        if (slideOut === 'right') return 'translateX(-100%)'
        return 'translateX(0)'
    }


    return(
        <div className="slider-container">

            <button className='arrow left' onClick={handlePrev}>
                <img src={arrow} alt="Left Arrow" />
            </button>

            <div className="slide" style={{
                transform: getTransform(),
                opacity: animating ? 0 : 1,
                transition: 'transform 0.4s ease, opacity 0.4s ease'
            }}>
                <div className="slide-content">
                    <h1>{slidesData[current].title}</h1>
                    <p>{slidesData[current].description}</p>
                    <Button className="button">Explore</Button>
                </div>
                <div className="slide-image">
                    <img src={slidesData[current].image} alt="Main Photo" />
                </div>
            </div>
            <button className='arrow right' onClick={handleNext}>
                <img src={arrow} alt="Right Arrow" />
            </button>

            <div className='indicators'>
            {slidesData.map((_, i) =>(
                <span
                    key={i}
                    className={`indicator ${i === current ? 'active' : ''}`}
                    onClick={() => goToSlide(i)}
                />
            ))}
            </div>
        </div>
    )
}

export default Slider