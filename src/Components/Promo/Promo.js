import Button from '../Button/Button';
import Title from '../Title/Title';
import './promo.scss';

const Promo = () => {

    return (
        <div className="promo">
            <Title fsz={55} lnh={65} color="black">Аграрний</Title>
            <h3 className="promo__subtitle">інтернет магазин</h3>
            <p className="promo__descr">Основна сфера діяльності – дистрибуція насіння, засобів захисту рослин, мінеральних макро - та мікродобрив</p>
            <Button>Про компанію</Button>
        </div>
    )
}

export default Promo;