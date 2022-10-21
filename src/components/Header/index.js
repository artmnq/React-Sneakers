import styles from './Header.module.scss';

function Header(props) {
    return (
        <header className={styles.header}>
            <div className="d-flex align-center">
                <img src="/img/logo.svg" width={40} height={40} alt="logo"/>
                <div className="headerInfo">
                    <h3 className='text-uppercase'>React Sneakers</h3>
                    <p className="opacity-5">Best Sneaker Store</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className='mr-30 cu-p'>
                    <img src="/img/cart.svg" alt="cart" height={18} width={18}/>
                    <span>120$</span>
                </li>
                <li>
                    <img src="/img/user.svg" alt="user" height={18} width={18}/>
                </li>
            </ul>
        </header>
    )
}


export default Header;