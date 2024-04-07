import Offer from '../Offer'
import Categories from '../Categories'
import SearchBar from '../SearchBar'
import './style.css'
import Container from '../Container'
import favorite from '../../images/icons/favorite.svg'
import basket from '../../images/icons/basket.svg'

const Header = () => {
    return (
        <>
            <Offer />
            <header className='header'>
                <Container>
                    <div className='header__wrapper'>
                        <div className='header__interaction'>
                            <img src="#" alt="LOGO" />
                            <Categories />
                            <SearchBar />
                            <div className='header__icons'>
                                <img src={favorite} alt="favorite" />
                                <img src={basket} alt="basket" />
                            </div>
                            <button className='header__btn'>Sign in</button>
                        </div>
                        <nav className='header__nav'>
                            <ul className='header__nav-list'>
                                <li className='header__nav-item'><a href="">Best Sellers</a></li>
                                <li className='header__nav-item active'><a href="">Salles</a></li>
                                <li className='header__nav-item'><a href="">New Arrrival</a></li>
                                <li className='header__nav-item'><a href="">Brands</a></li>
                                <li className='header__nav-item'><a href="">Blog</a></li>
                                <li className='header__nav-item'><a href="">Life Style</a></li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header
