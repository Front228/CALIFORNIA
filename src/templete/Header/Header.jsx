
import logo from "../../assets/icons/CALIFORNIA.svg"
import basket from "../../assets/icons/basket.svg"
import search from "../../assets/icons/search.svg"
import "./Header.scss"
const Header = () => {
    return (
        <header className="header">
            <div className="header__logo logo">
                <img src={logo} alt="" />
            </div>
            <nav className="header__menu">
                <ul className="header__menu-list">
                    <li className="header__menu-item"><a href="" className="">all products</a></li>
                    <li className="header__menu-item">
                        <select name="solution" id="solution">
                            <option selected>Solutions</option>
                            <option value="Option1">Option 1</option>
                            <option value="Option2">Option 2</option>
                            <option value="Option3">Option 3</option>
                        </select>
                    </li>
                    <li className="header__menu-item"><a href="">ABOUT</a></li>
                    <li className="header__menu-item"><a href="">Support</a></li>
                </ul>
            </nav>
            <div className="header__btn">
                <a href="" className="btn-search">
                    <img src={search} alt="Search" />
                    </a>
                <a href="" className="btn-basket">
                    <img src={basket} alt="Basket" />
                    </a>
            </div>
        </header>
    )
}

export default Header