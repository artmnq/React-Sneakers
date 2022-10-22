import styles from "./Drawer.module.scss";

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex justify-between">
          Your Cart{" "}
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="close"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className={styles.items}>
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageURL})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 d-flex flex-column">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}$</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="remove"
                  />
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
              <button className="greenButton mt-20">
                Place an order <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120"
              height="120"
              src="/img/cart-empty.jpg"
              alt="EmptyCart"
            />
            <h2>Empty Cart</h2>
            <p className="opacity-6">
              Add at least a pair of sneakers to make an order
            </p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/arrow.svg" alt="arrow" />
              Return back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
