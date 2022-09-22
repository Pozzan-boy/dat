
import './button.scss';

const Button = ({children, type}) => {

    const classNames = `button button-${type}`;

    return (
        <button className={classNames}>{children}</button>
    )
}

export default Button;