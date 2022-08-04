import Cabinet from '../Cabinet/Cabinet';
import arrowDown from '../../resources/icons/arrow-down.svg';

import './navMenu.scss';

const NavMenu = () => {

    return (
        <nav className="nav-menu">
            <div className="nav-menu__wrapper">
                <ul className="nav-menu__list">
                    <li className="nav-menu__list-item"><a href="#" className="nav-menu__link">Про нас<img src={arrowDown} alt="arrow down" className="nav-menu__arrow" /></a></li>
                    <li className="nav-menu__list-item"><a href="#" className="nav-menu__link">Каталог продукції</a></li>
                    <li className="nav-menu__list-item"><a href="#" className="nav-menu__link">Оплата і доставка</a></li>
                    <li className="nav-menu__list-item"><a href="#" className="nav-menu__link">Партнери</a></li>
                    <li className="nav-menu__list-item"><a href="#" className="nav-menu__link">Новини</a></li>
                    <li className="nav-menu__list-item"><a href="#" className="nav-menu__link">Контакти</a></li>
                </ul>
                <div className="nav-menu__divider"></div>
                <Cabinet />
            </div>
        </nav>
    )
}

export default NavMenu;