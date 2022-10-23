import React from "react";
import { Route, Routes } from "react-router-dom";
import Axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favourites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    Axios.get("https://6352ea05d0bca53a8eb7bf0e.mockapi.io/items").then((res) =>
      setItems(res.data)
    );
    Axios.get("https://6352ea05d0bca53a8eb7bf0e.mockapi.io/cart").then((res) =>
      setCartItems(res.data)
    );
    Axios.get("https://6352ea05d0bca53a8eb7bf0e.mockapi.io/favourites").then(
      (res) => setFavourites(res.data)
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

  const onAddToFavourite = async (obj) => {
    try {
      if (favourites.find((favObj) => favObj.id === obj.id)) {
        Axios.delete(
          `https://6352ea05d0bca53a8eb7bf0e.mockapi.io/favourites/${obj.id}`
        );
      } else {
        const { data } = await Axios.post(
          "https://6352ea05d0bca53a8eb7bf0e.mockapi.io/favourites",
          obj
        );
        setFavourites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Error, try again");
    }
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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavourite={onAddToFavourite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favorites items={favourites} onAddToFavourite={onAddToFavourite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
