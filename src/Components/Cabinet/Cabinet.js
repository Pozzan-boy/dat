
import cabinetIcon from '../../resources/icons/cabinet.svg';
import './cabinet.scss';

const Cabinet = () => {

    return(
        <div className="cabinet">
            <a href="#" className="cabinet__link"><img src={cabinetIcon} alt="cabinet icon" className="cabinet__icon" /> Вхід</a>
            <div className="cabinet__divider" />
            <a href="#" className="cabinet__link">Реєстрація</a>
        </div>
    )
}

export default Cabinet;