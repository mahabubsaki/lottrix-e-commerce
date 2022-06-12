import React, { useState } from 'react';
import { ImCancelCircle } from 'react-icons/im'
import Swal from 'sweetalert2';
import deleteFromDb from '../Utility/deleteFromDb';
import updateQuantity from '../Utility/updateQuantity';

const CartItem = ({ item, setCart, cart }) => {
    const { id, quantity, price, image, title } = item
    const [error, setError] = useState(true)
    const [update, setUpdate] = useState(quantity)
    const handleInput = (e) => {
        if (Number(e.target.value) > 0) {
            setError(false)
        }
        else {
            setError(true)
        }
        setUpdate(e.target.value)
    }
    const handleUpdate = () => {
        updateQuantity(id, update)
        const targetProduct = cart.find(p => parseInt(p.id) === parseInt(id))
        targetProduct.quantity = update
        const restProducts = cart.filter(p => parseInt(p.id) !== parseInt(id))
        setCart([targetProduct, ...restProducts])
        Swal.fire({
            icon: 'success',
            title: 'Updated',
            text: 'Successfully updated the product quantity',
        })
        setError(true)
    }
    const handleDelete = () => {
        Swal.fire({
            text: 'Are you sure you want to delete this product from cart?',
            icon: 'error',
            title: "Delete Product",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteFromDb(id)
                const filtered = cart.filter(p => parseInt(p.id) !== parseInt(id))
                setCart(filtered)
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    text: 'Successfully deleted product from cart',
                })
            }
        });
    }
    return (
        <li>
            <span>
                <div>
                    <ImCancelCircle onClick={handleDelete}></ImCancelCircle>
                </div>
                <div className="flex items-center">
                    <div className="w-1/2">
                        <img src={image} alt="" className='h-[100px] rounded w-[100px] mr-2' />
                    </div>
                    <div className="w-1/2">
                        <p className="text-sm">{title}</p>
                        <p className="font-semibold my-2">${price}</p>
                        <div className="flex w-full items-center">
                            <p className="w-1/5">Qty</p>
                            <input type="text" className="w-2/5 mx-2 text-center py-2 border rounded-lg" value={update} onChange={handleInput} />
                            <button onClick={handleUpdate} disabled={error} className="btn bg-[#68D237] text-white border-none text-xs w-2/5">Update</button>
                        </div>
                    </div>
                </div>
            </span>
        </li>
    );
};

export default CartItem;