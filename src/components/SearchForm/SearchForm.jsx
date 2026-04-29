

import './SearchForm.scss'
const SearchForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input type="text" className="searchInput"  placeholder="Search keyword"/>
            <div className="btn-block">
                <button type="submit" className="btn-gadget">iPhone</button>
                <button type="submit" className="btn-gadget">Charger</button>
                <button type="submit" className="btn-gadget">Gift</button>
                <button type="submit" className="btn-gadget">Google Pixel 3</button>
                <button type="submit" className="btn-gadget">Keyboard</button>
                <button type="submit" className="btn-gadget">13 Pro Max</button>
                <button type="submit" className="btn-gadget">iPhone 12</button>
                <button type="submit" className="btn-gadget">Laptop</button>
                <button type="submit" className="btn-gadget">Mobile</button>
            </div>
        </form>
    )
}

export default SearchForm;