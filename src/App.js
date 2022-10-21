import React from "react";
import Card from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
    const [items, setItems] = React.useState([])

    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://6352ea05d0bca53a8eb7bf0e.mockapi.io/items')
            .then(res => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="content p-40">
                <div className="d-flex justify-between align-center mb-40">
                    <h1>All Sneakers</h1>
                    <div className="searchBlock d-flex">
                        <img src="/img/search.svg" alt="search"/>
                        <input placeholder="Search..."/>
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {items.map(obj => (
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imageURL={obj.imageURL}
                            addToFavourite={() => console.log('ZAKLADKI')}
                            addToCart={() => console.log('PLUS')}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
