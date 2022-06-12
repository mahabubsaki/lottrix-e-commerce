import React, { useEffect, useState } from 'react';
import { BsFillStarFill, BsStarHalf } from 'react-icons/bs'
import toast from 'react-hot-toast';
import addToDb from '../Utility/addToDb';

const ProductModal = ({ productModal, setProductModal, setCart, products, cart }) => {
    const [thisImg, setThisImg] = useState('1')
    const [pdRating, setPdRating] = useState([])
    const [quantity, setQuantity] = useState(1)
    const { id, title, description, category, image, price, rating, } = productModal
    const { rate, count } = rating
    useEffect(() => {
        const emptyArray = []
        for (let i = 0; i < Math.floor(rate); i++) {
            emptyArray.push(i)
        }
        setPdRating(emptyArray)
    }, [rate])
    const handleQuntity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const handleBuy = (quantity, id) => {
        addToDb(quantity, id)
        const purchasedProduct = products.find(product => product.id === id)
        const isDuplicate = cart.find(item => item.id === id)
        if (!isDuplicate) {
            purchasedProduct.quantity = quantity
            setCart([...cart, purchasedProduct])
        }
        else {
            const newQuantity = purchasedProduct.quantity + quantity
            purchasedProduct.quantity = newQuantity
            const rest = cart.filter(product => product.id !== id)
            setCart([...rest, purchasedProduct])
        }
        setProductModal(null)
        toast.success('Your product added to  cart successfully')
    }
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal text-black">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setProductModal(null)}>✕</label>
                    <div className="flex mt-1 items-center">
                        <div className='w-1/2'>
                            <img src={image} alt="" className='w-full mb-4' />
                            <div className='flex gap-1'>
                                <img src={image} alt="" className={`w-[50px] h-[50px] cursor-pointer rounded-lg p-2 border ${thisImg === '1' && 'border-blue-600'}`} onClick={() => setThisImg('1')} />
                                <img src={image} alt="" className={`w-[50px] h-[50px] cursor-pointer rounded-lg p-2 border ${thisImg === '2' && 'border-blue-600'}`} onClick={() => setThisImg('2')} />
                                <img src={image} alt="" className={`w-[50px] h-[50px] cursor-pointer rounded-lg p-2 border ${thisImg === '3' && 'border-blue-600'}`} onClick={() => setThisImg('3')} />
                                <img src={image} alt="" className={`w-[50px] h-[50px] cursor-pointer rounded-lg p-2 border ${thisImg === '4' && 'border-blue-600'}`} onClick={() => setThisImg('4')} />
                            </div>
                        </div>
                        <div className="w-1/2 ml-3">
                            <p className="font-semibold text-lg">{title}</p>
                            <div className="flex gap-2 mt-3 items-center">
                                {pdRating.map(pd => <BsFillStarFill
                                    key={pd} className='text-[#FFE923] text-xl'></BsFillStarFill>)}
                                {rate !== parseInt(rate) && <BsStarHalf className='text-[#FFE923] text-xl'></BsStarHalf>}
                                <p className='text-xs text-[#858585]'>({count} Rates)</p>
                            </div>
                            <p className="text-lg font-semibold my-3">${price}</p>
                            <p className="text-sm my-1"><span className='font-semibold'>Code :</span> {title}</p>
                            <p className="text-sm my-1"><span className='font-semibold'>Category :</span> <span className='text-[#479622]'>{category}</span></p>
                            <p className="text-sm my-1"><span className='font-semibold'>Keyword :</span> <span className='text-[#479622]'>{category}</span></p>
                            <p className="text-sm my-1">{description}</p>
                            <p className="text-sm font-semibold">Qty:</p>
                            <div className="flex items-center">
                                <button className="btn btn-ghost text-2xl" onClick={handleQuntity}>-</button>
                                <span className="px-5 py-1 rounded text-2xl border">{quantity}</span>
                                <button className="btn btn-ghost text-2xl" onClick={() => setQuantity(quantity + 1)}>+</button>
                                <button className="btn bg-[#68D237] text-white border border-[#68D237] px-6" onClick={() => handleBuy(quantity, id)}>Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductModal;