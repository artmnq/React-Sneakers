import React from "react";
import styles from './Card.module.scss';

function Card({title, price, imageURL, onFavourite, onPlus}) {
    const [isAdded, setIsAdded] = React.useState();

    const onClickPlus = () => {
        onPlus({title, imageURL, price});
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavourite}>
                <img src="/img/heart-inactive.svg" alt="heart"/>
            </div>
            <img src={imageURL} alt="sneakers" width={133} height={112}/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className='d-flex flex-column'>
                    <span>
                        Price:
                    </span>
                    <b>
                        {price}$
                    </b>
                </div>
                <img className={styles.plus}
                     onClick={onClickPlus}
                     src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus"/>
            </div>
        </div>
    );
}

export default Card;
