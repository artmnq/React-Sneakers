import React from "react";
import Axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    Axios.get("https://6352ea05d0bca53a8eb7bf0e.mockapi.io/items").then((res) =>
      setItems(res.data)
    );
    Axios.get("https://6352ea05d0bca53a8eb7bf0e.mockapi.io/cart").then((res) =>
      setCartItems(res.data)
    );
  }, []);

  const onAddToCart = (obj) => {
    Axios.post("https://6352ea05d0bca53a8eb7bf0e.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    Axios.delete(`https://6352ea05d0bca53a8eb7bf0e.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>
            {searchValue ? `Search on: "${searchValue}"` : "All Sneakers"}
          </h1>
          <div className="searchBlock d-flex">
            <img src="/img/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear"
                src="/img/btn-remove.svg"
                alt="clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageURL={item.imageURL}
                onFavourite={() => console.log("ZAKLADKI")}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
