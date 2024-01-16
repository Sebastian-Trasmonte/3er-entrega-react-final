import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./Pages/LayOut";
import Home from "./Pages/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailtContainer from "./components/ItemDetailContainer";
import ContextProvider from "./storage/ContextProvider";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/Productos" element={<ItemListContainer />} />
          <Route path="/Productos/id/:idProducto" element={<ItemDetailtContainer />} />
          <Route path="/Productos/Categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<div>Error 404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;