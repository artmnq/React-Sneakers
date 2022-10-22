import styles from './Drawer.module.scss';

function Drawer({ onClose, items=[] }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className="mb-30 d-flex justify-between">Your Cart <img onClick={onClose}
                                                                            className="removeBtn cu-p"
                                                                            src="/img/btn-remove.svg" alt="close"/>
                </h2>
                <div className={styles.items}>
                    {items.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20">
                            <div style={{backgroundImage: `url(${obj.imageURL})`}} className="cartItemImg"></div>
                            <div className="mr-20 d-flex flex-column">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price}$</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/>
                        </div>
                    ))}

                </div>
                <div className="cartTotalBlock mt-40">
                    <ul>
                        <li className="d-flex">
                            <span>Total:</span>
                            <div></div>
                            <b>240$</b>
                        </li>
                        <li className="d-flex">
                            <span>Tax:</span>
                            <div></div>
                            <b>20$</b>
                        </li>
                    </ul>
                    <button className="greenButton mt-20">Place an order <img src="/img/arrow.svg" alt="arrow"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;