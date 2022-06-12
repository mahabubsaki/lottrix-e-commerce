import './App.css';
import Header from './Components/Models/Header';
import { Toaster } from 'react-hot-toast';
import { createContext, useEffect, useState } from 'react';
import PopUpModal from './Components/Models/PopUpModal';
import MyMenu from './Components/Models/MyMenu';
import TopPart from './Components/Models/TopPart';
import Categories from './Components/Models/Categories';
import Footer from './Components/Models/Footer';
import 'animate.css';
export const Context = createContext({})


function App() {
  const [loading, setLoading] = useState(true)
  const [productModal, setProductModal] = useState(null)
  const [allProducts, setAllProducts] = useState([])
  const [cost, setCost] = useState(4800)
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(result => setAllProducts(result))
  }, [])
  return (
    <Context.Provider value={{ loading, setLoading, allProducts, setAllProducts, cost, setCost, productModal, setProductModal, cart, setCart }}>
      <div className="App">
        {loading && <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4">
          </div>
          <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
        </div>}
        <Toaster />
        <Header />
        <PopUpModal></PopUpModal>
        <MyMenu></MyMenu>
        <TopPart></TopPart>
        <Categories></Categories>
        <Footer></Footer>
      </div>
    </Context.Provider>
  );
}

export default App;