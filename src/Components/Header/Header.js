
import Promo from '../Promo/Promo';
import fermer from '../../resources/img/fermer-banner.png';
import './header.scss';

const Header = ({children}) => {

    return (
        <header className="header">
            {children}

            <Promo />
            <img src={fermer} alt="fermer" className="header__fermer" />
        </header>
    )
}

export default Header;