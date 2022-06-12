import React from 'react';
import { ImCancelCircle } from 'react-icons/im'

const RandomProduct = ({ setShowRandom, randomProduct }) => {
    return (
        <div className="absolute bottom-40 border py-4 px-2 rounded-lg w-[500px] flex flex-col animate__animated animate__backInLeft">
            <div className="relative w-full">
                <ImCancelCircle onClick={() => setShowRandom(false)} className="absolute right-0 cursor-pointer"></ImCancelCircle>
            </div>
            <div className="flex items-center w-full">
                <div className="w-1/4">
                    <img src={randomProduct?.image} alt="" className="w-full h-24 mr-2" />
                </div>
                <div className="flex w-3/4 flex-col justify-between">
                    <h1 className="text-[#858585] text-xs text-center">A customer has just bought</h1>
                    <h1 className="text-sm font-bold text-center">{randomProduct?.title}</h1>
                    <h1 className="text-sm font-semibold">Rating : <span className="text-[#e6d116]">{randomProduct?.rating?.rate}</span></h1>
                    <h1 className="text-sm text-[#68D237] font-semibold">${randomProduct?.price}</h1>
                    <h1 className="text-sm text-[#858585]">Bought 15 Minutes Ago From New York</h1>
                </div>
            </div>
        </div>
    );
};

export default RandomProduct;