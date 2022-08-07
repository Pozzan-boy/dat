
import icon from '../../resources/icons/title-icon.svg';
import './title.scss';

const Title = ({fsz, lnh, color, children}) => {

    return (
        <h2 style={{fontSize: `${fsz}px`, lineHeight: `${lnh}px`, color: color}} className="title">
            <img src={icon} alt='title icon' className="title__icon" />
            {children}
        </h2>
    )
}

export default Title;