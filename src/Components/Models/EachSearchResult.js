import React from 'react';

const EachSearchResult = ({ result, setProductModal }) => {
    const { title, price, image } = result
    const handleDetails = (e) => {
        setProductModal(result)
    }
    return (
        <label onClick={handleDetails} htmlFor="my-modal-3">
            <li className="border rounded-lg mb-1 relative">
                <span>
                    <div>
                        <img src={image} alt="" className='h-[100px] rounded w-[100px] mr-2' />
                    </div>
                    <div className="w-3/5">
                        <span className="text-sm">{title}</span><br />
                        <span className="text-lg font-bold my-2 inline-block">${price}</span><br />
                        <span className="text-sm">By Mahabub Saki</span>
                    </div>
                </span>
            </li>
        </label>
    );
};

export default EachSearchResult;