import Feedback from "../Feedback"
import SearchForm from "../SearchForm"
import Title from "../Title"
import './Form.scss'

const Form = () => {
    return (
        <section className="search-block">
            <Title title={"Looking for anything else?"} />
            <SearchForm />
            <Feedback />
        </section>
    )
}

export default Form