import './navSearch.scss';
import main_logo from '../../resources/icons/dat_logo.svg';
import find_icon from '../../resources/icons/find.svg';
import call_icon from '../../resources/icons/call.svg';
import phone_more from '../../resources/icons/phone_more.svg';
import heart_icon from '../../resources/icons/heart.svg';
import heart_icon2 from '../../resources/icons/heart2.svg';
import basket_icon from '../../resources/icons/basket.svg';
import scales_icon from '../../resources/icons/scales.svg';

const NavSearch = ()=>{
    return(
        <div className='search-tools'>
            
                <div className="search-tools__item">
                    <a href="#"><img src={main_logo} alt="logo" /></a>
                </div>
                <div className="search-tools__item find_bar">
                    <input placeholder='Пошук' className="search-tools__find"></input>
                    <button className="search-tools__find__btn">
                        <img src={find_icon} alt="" />
                    </button>
                </div>
                <div className="search-tools__item phone_bar">
                    <img src={call_icon} alt="call" />
                    <div className="phone_bar__info">
                        <div className="phone_bar__info__wrapper">
                            <div className="phone_bar__info__number">+38 (067) 115 00 58</div>
                            <button className="phone_bar__info__btn"><img src={phone_more} alt="more" /></button>
                        </div>
                        <a id="back_call">Замовити зворотній зв’язок</a>
                    </div>
                </div>
                <div className="search-tools__item purchase_bar">
                    <div className="purchase_bar__item round"><img  id='heart' src={heart_icon} alt="" /></div>
                    <div className="purchase_bar__item round"><img src={scales_icon} alt="" /></div>
                    <div className="purchase_bar__item round"><img src={basket_icon} alt="" /></div>
                    <div id="total" className="purchase_bar__item">0,0 грн</div>
                </div>
            
        </div>
        
    )
}
export default NavSearch;