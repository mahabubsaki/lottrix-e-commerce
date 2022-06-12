import React, { useContext, useEffect, useState } from 'react';
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialTwitterCircular, TiMail } from 'react-icons/ti'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import useProducts from '../Hooks/useProducts';
import EachSearchResult from './EachSearchResult';
import ProductModal from './ProductModal';
import { Context } from '../../App';
import { IoMdDoneAll } from 'react-icons/io'
import ReactProgressLineBar from 'react-progress-line-bar';
import CartItem from './CartItem';

const Header = () => {
    const [products, setProducts] = useProducts()
    const { setLoading, allProducts, cost, setCost, productModal, setProductModal, cart, setCart } = useContext(Context)
    const [showQuery, setShowQuery] = useState(false)
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [searchResult, setShowResult] = useState([])
    const [percentage, setPercentage] = useState(0)
    useEffect(() => {
        let subtotal = 0
        let subQuantity = 0
        for (const item of cart) {
            const total = item.price * item.quantity
            subtotal += total
            subQuantity += parseInt(item.quantity)
        }
        setCost(subtotal)
        setTotalQuantity(subQuantity)
    }, [cart, setCost])
    useEffect(() => {
        if (cost !== 0) {
            const result = (cost / 10000) * 100
            if (result >= 100) {
                setPercentage(100)
            }
            else {
                setPercentage(result)
            }
        }
        else {
            setPercentage(0)
        }
    }, [cost])
    useEffect(() => {
        const savedCartArray = []
        const savedCartObj = JSON.parse(localStorage.getItem('pockieDB'))
        for (const propsId in savedCartObj) {
            const savedProduct = allProducts.find(p => parseInt(p.id) === parseInt(propsId))
            if (savedProduct) {
                savedProduct.quantity = savedCartObj[propsId]
                savedCartArray.push(savedProduct)
            }
        }
        setCart(savedCartArray)
        setLoading(false)
    }, [allProducts, setLoading, setCart])
    const handleCategory = (e) => {
        if (e.target.value === 'all') {
            setProducts(allProducts)
            return
        }
        const specificCategory = allProducts.filter(p => p.category === e.target.value)
        setProducts(specificCategory)
    }
    const handleSearch = (e) => {
        if (e.target.value) {
            setShowQuery(true)
            const match = products.filter(product => product.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setShowResult(match)
        }
        else {
            setShowQuery(false)
        }
    }
    const handleBlur = (e) => {
        setTimeout(() => {
            setShowQuery(false)
        }, 1000)
    }
    const handleFocus = (e) => {
        if (e.target.value) {
            setShowQuery(true);
        }
    }
    return (
        <div className="bg-black text-white">
            <div className="w-11/12 mx-auto flex justify-between items-center py-4">
                <div className="text-4xl flex gap-2" >
                    <TiSocialFacebookCircular />
                    <TiSocialLinkedinCircular />
                    <TiSocialTwitterCircular />
                    <TiMail />
                </div>
                <ul className="text-md flex gap-1 font-semibold">
                    <li>Introduce .</li>
                    <li>Partner Incentives .</li>
                    <li>Promotion .</li>
                    <li>Contact .</li>
                    <li>Frequently asked questions</li>
                </ul>
            </div>
            <div className="w-[85%] mx-auto flex justify-between items-center py-4">
                <svg width="84" height="67" viewBox="0 0 84 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.4781 36.482L77.4148 36.4757C77.4148 36.4757 77.4148 36.4757 77.4148 36.482C77.4148 52.9077 63.8975 66.4187 47.4781 66.4187V36.482Z" fill="#68D237" />
                    <path d="M7.43895 27.719C8.74579 27.719 9.91022 28.0038 10.9322 28.5735C11.971 29.1431 12.7836 29.9473 13.37 30.9861C13.9564 32.0249 14.2496 33.2228 14.2496 34.5799C14.2496 35.937 13.9564 37.1434 13.37 38.1989C12.7836 39.2376 11.971 40.0419 10.9322 40.6115C9.91022 41.1812 8.74579 41.466 7.43895 41.466C5.62947 41.466 4.19697 40.8628 3.14145 39.6565V46.1656H0V27.8698H2.99066V29.629C3.51004 28.9923 4.14671 28.5148 4.90066 28.1965C5.67136 27.8782 6.51746 27.719 7.43895 27.719ZM7.0871 38.7769C8.24316 38.7769 9.18978 38.3916 9.92697 37.6209C10.6809 36.8502 11.0579 35.8365 11.0579 34.5799C11.0579 33.3234 10.6809 32.3097 9.92697 31.539C9.18978 30.7683 8.24316 30.383 7.0871 30.383C6.33316 30.383 5.6546 30.5589 5.05145 30.9107C4.44829 31.2458 3.97079 31.7317 3.61895 32.3684C3.2671 33.005 3.09118 33.7422 3.09118 34.5799C3.09118 35.4177 3.2671 36.1548 3.61895 36.7915C3.97079 37.4282 4.44829 37.9224 5.05145 38.2743C5.6546 38.6094 6.33316 38.7769 7.0871 38.7769Z" fill="white" />
                    <path d="M23.2604 41.466C21.9033 41.466 20.6803 41.1728 19.5912 40.5864C18.5022 40 17.6477 39.1874 17.0278 38.1486C16.4247 37.0931 16.1231 35.9035 16.1231 34.5799C16.1231 33.2563 16.4247 32.0752 17.0278 31.0364C17.6477 29.9976 18.5022 29.185 19.5912 28.5986C20.6803 28.0122 21.9033 27.719 23.2604 27.719C24.6343 27.719 25.8658 28.0122 26.9548 28.5986C28.0438 29.185 28.8899 29.9976 29.4931 31.0364C30.113 32.0752 30.4229 33.2563 30.4229 34.5799C30.4229 35.9035 30.113 37.0931 29.4931 38.1486C28.8899 39.1874 28.0438 40 26.9548 40.5864C25.8658 41.1728 24.6343 41.466 23.2604 41.466ZM23.2604 38.7769C24.4165 38.7769 25.3715 38.3916 26.1254 37.6209C26.8794 36.8502 27.2564 35.8365 27.2564 34.5799C27.2564 33.3234 26.8794 32.3097 26.1254 31.539C25.3715 30.7683 24.4165 30.383 23.2604 30.383C22.1044 30.383 21.1494 30.7683 20.3955 31.539C19.6583 32.3097 19.2897 33.3234 19.2897 34.5799C19.2897 35.8365 19.6583 36.8502 20.3955 37.6209C21.1494 38.3916 22.1044 38.7769 23.2604 38.7769Z" fill="white" />
                    <path d="M39.5842 41.466C38.1936 41.466 36.9454 41.1728 35.8396 40.5864C34.7338 40 33.8709 39.1874 33.251 38.1486C32.6311 37.0931 32.3212 35.9035 32.3212 34.5799C32.3212 33.2563 32.6311 32.0752 33.251 31.0364C33.8709 29.9976 34.7254 29.185 35.8145 28.5986C36.9202 28.0122 38.1768 27.719 39.5842 27.719C40.9078 27.719 42.0638 27.9871 43.0523 28.5232C44.0576 29.0594 44.8116 29.8301 45.3142 30.8353L42.9016 32.2427C42.5162 31.6228 42.0303 31.162 41.4439 30.8605C40.8743 30.5421 40.246 30.383 39.5591 30.383C38.3863 30.383 37.4145 30.7683 36.6438 31.539C35.8731 32.293 35.4877 33.3066 35.4877 34.5799C35.4877 35.8533 35.8647 36.8753 36.6187 37.646C37.3894 38.3999 38.3695 38.7769 39.5591 38.7769C40.246 38.7769 40.8743 38.6261 41.4439 38.3245C42.0303 38.0062 42.5162 37.5371 42.9016 36.9172L45.3142 38.3245C44.7948 39.3298 44.0325 40.1089 43.0272 40.6618C42.0387 41.1979 40.891 41.466 39.5842 41.466Z" fill="white" />
                    <path d="M53.3857 35.5349L51.0485 37.7465V41.2901H47.9071V22.6424H51.0485V33.9014L57.5576 27.8698H61.3273L55.723 33.4993L61.8551 41.2901H58.0351L53.3857 35.5349Z" fill="white" />
                    <path d="M63.7615 27.8698H66.903V41.2901H63.7615V27.8698ZM65.3448 25.6582C64.7752 25.6582 64.2977 25.4823 63.9123 25.1305C63.527 24.7619 63.3343 24.3095 63.3343 23.7734C63.3343 23.2372 63.527 22.7932 63.9123 22.4414C64.2977 22.0728 64.7752 21.8885 65.3448 21.8885C65.9145 21.8885 66.392 22.0644 66.7773 22.4163C67.1627 22.7513 67.3554 23.1786 67.3554 23.698C67.3554 24.2509 67.1627 24.72 66.7773 25.1053C66.4087 25.4739 65.9312 25.6582 65.3448 25.6582Z" fill="white" />
                    <path d="M83.6422 34.6553C83.6422 34.8731 83.6254 35.1831 83.5919 35.5852H73.0618C73.2461 36.5737 73.7236 37.3612 74.4943 37.9476C75.2818 38.5172 76.2535 38.802 77.4096 38.802C78.8839 38.802 80.0986 38.3162 81.0536 37.3444L82.7375 39.2795C82.1343 40 81.372 40.5445 80.4505 40.9131C79.529 41.2817 78.4902 41.466 77.3342 41.466C75.8598 41.466 74.5613 41.1728 73.4388 40.5864C72.3162 40 71.445 39.1874 70.8251 38.1486C70.2219 37.0931 69.9203 35.9035 69.9203 34.5799C69.9203 33.2731 70.2136 32.1003 70.8 31.0615C71.4031 30.006 72.2325 29.185 73.288 28.5986C74.3435 28.0122 75.5331 27.719 76.8567 27.719C78.1635 27.719 79.3279 28.0122 80.35 28.5986C81.3887 29.1683 82.1929 29.9809 82.7626 31.0364C83.349 32.0752 83.6422 33.2815 83.6422 34.6553ZM76.8567 30.2322C75.8514 30.2322 74.9969 30.5337 74.2932 31.1369C73.6063 31.7233 73.1875 32.5108 73.0367 33.4993H80.6515C80.5175 32.5275 80.107 31.7401 79.4201 31.1369C78.7332 30.5337 77.8787 30.2322 76.8567 30.2322Z" fill="white" />
                    <path d="M44.5634 25.1284C44.5634 25.1284 24.2429 20.7181 27.8195 0.97673C27.8195 0.97673 47.179 10.6756 44.5634 25.1284Z" fill="#FFF7AD" />
                </svg>
                <div className="flex w-4/5 items-center">
                    <div className="flex w-full">
                        <input type="text" onBlur={handleBlur} onFocus={handleFocus} onChange={handleSearch} placeholder="What Are You Looking For?" className="input rounded-tr-none rounded-br-none w-full text-black" />
                        {showQuery && <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box rounded-tr-none rounded-tl-none z-50 w-[322px] max-h-screen overflow-y-auto absolute text-black top-[140px]">
                            <li><span className="cursor-default">{searchResult.length} Found</span></li>
                            {searchResult.map((result, index) => <EachSearchResult
                                result={result}
                                key={index}
                                setProductModal={setProductModal}
                            ></EachSearchResult>)}
                        </ul>}

                        {productModal && <ProductModal
                            productModal={productModal}
                            setProductModal={setProductModal}
                            setCart={setCart}
                            products={products}
                            cart={cart}
                        ></ProductModal>}
                        <div className="form-control">
                            <div className="input-group">
                                <select className="select select-bordered text-black bg-[#F5F5F5]" onChange={handleCategory} name='category' defaultValue={''}>
                                    <option disabled value={''}>Category</option>
                                    <option value="all">All Products</option>
                                    <option value="men's clothing">Men's Clothing</option>
                                    <option value="jewelery">Jewelery</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="women's clothing">Women's Clothing</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-primary ml-3'>Search</button>
                    <AiOutlineHeart className="text-3xl mx-3" />
                    <div className="relative">
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="cursor-pointer relative top-1">                        <AiOutlineShoppingCart className="text-2xl">
                            </AiOutlineShoppingCart></label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[400px] absolute text-black max-h-screen overflow-y-auto">
                                <li><div className="flex justify-between">
                                    <span>Sub Total: ${cost.toFixed(2)}</span>
                                    <span>Total Products: {totalQuantity}</span>
                                </div></li>
                                {cart.map(item => <CartItem
                                    key={item.id}
                                    item={item}
                                    setCart={setCart}
                                    cart={cart}
                                ></CartItem>)}
                                <li>
                                    <button className="btn btn-dark text-[#68D237] my-1" disabled={cost === 0}>View and Edit Shopping Cart</button>
                                    <button className="text-white btn bg-[#68D237] my-1" disabled={cost === 0}>Payment Process</button>
                                    <div className="flex justify-between">
                                        <p className="text-xs">Free Shipping</p>
                                        {percentage < 100 && <p>${cost.toFixed(2)} / $10000</p>}
                                        {percentage >= 100 && <p className="text-success text-xs flex items-center gap-1">Completed<IoMdDoneAll></IoMdDoneAll></p>}
                                    </div>
                                    <ReactProgressLineBar value={percentage}></ReactProgressLineBar>
                                </li>
                            </ul>
                        </div>
                        <span className="px-2 bg-[#FF8154] rounded-full absolute top-[-16px] right-[-12px]">{cart.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;