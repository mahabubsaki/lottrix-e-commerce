import React from 'react';

const EachDetails = ({ product, state, setProductModal }) => {
    const { title, price, image } = product;

    return (
        <div className="border bg-[#F5F5F5] p-6 flex flex-col justify-between rounded-lg relative">
            <div>
                <img src={image} alt="" className="w-full h-[250px]" />
                <h1 className="my-2">{title}</h1>
            </div>
            <div>
                <h1 className="my-2 font-bol text-2xl">${price}</h1>
                <label htmlFor="my-modal-3" className="btn border-none bg-[#68D237] text-white" onClick={() => setProductModal(product)}>See Detals</label>
            </div>
            {state === 0 && <div class="badge bg-[#FF8154] absolute text-white border-none p-3">Hot Deal</div>}
            {state === 1 && <div class="badge bg-[#FFE923] absolute text-black border-none p-3">Favourite</div>}
            {state === 2 && <div class="badge bg-[#68D237] absolute text-black border-none p-3">New</div>}
            {state === 3 && <div class="badge bg-[red] absolute text-black border-none p-3">{Math.round(Math.random() * 40) + 20}% Discount</div>}
        </div>
    );
};

export default EachDetails;