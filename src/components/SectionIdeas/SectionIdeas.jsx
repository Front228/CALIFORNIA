import BookImage from '../../assets/image/Bookhand.png'
import Title from "../Title"
import './SectionIdeas.scss'

const SectionIdeas = () => {
    return (
        <section className="Sectionideas">
            <Title
                title={"Ideas have a place here"}
                subtitle={"Our new Limited Edition Winter Design BESPOKE 4-Door Flex™"}
            />

        <div className="Sectionideas__content">
            <div className='ideaImage'>
                <img src={BookImage} alt={"Book"} />
            </div>

            <div className='idea-context'>
                <div className='idea-text'>
                    <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
                    <p>Road Design Handbook For The International Road...</p>
                    <p>The Best Kept Secrets About Creative People</p>
                    <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
                </div>
            </div>

            <span className='btn-see'>See All</span>
        </div>

        </section>
    )
}

export default SectionIdeas