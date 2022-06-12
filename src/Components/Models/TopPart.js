import React, { useEffect, useState } from 'react';
import RandomProduct from './RandomProduct';

const TopPart = () => {
    const [showRandom, setShowRandom] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setShowRandom(true);
        }, 3000)
    }, [])
    return (
        <div class="parent h-[500px] w-[95%] mt-4 mx-auto relative">
            <div class="div1 border">1</div>
            <div class="div2 border flex-col pb-4">
                <div class="mb-auto flex flex-col mt-4">
                    <p>Asus</p>
                    <p className="my-3 font-semibold">Supper Sale</p>
                    <p className="font-semibold">Laptop Gaming</p>
                </div>
                <h1>
                    <button className="btn bg-[#68D237] text-white border-none">Order Now</button>
                </h1>
            </div>
            <div class="div3 border">
                <div class="flex flex-col mt-4">
                    <p>New Product</p>
                    <p className="text-2xl font-bold my-3">HAND WATCH </p>
                    <p className="text-2xl font-bold my-3">ROSSINI</p>
                    <button className="btn bg-[#68D237] text-white border-none">Order Now</button>
                </div>
            </div>
            <div class="div4 border">
                <div class="flex flex-col">
                    <p>Big deal</p>
                    <p class="my-2 font-semibold">Black Friday</p>
                    <p class="font-semibold">Buy 1 Get 1</p>
                </div>
            </div>
            <div class="div5 border">
                <div class="flex flex-col">
                    <p>Fujiwal</p>
                    <p class="my-2 font-semibold">ION Alkaline</p>
                    <p class="font-semibold">Micronutrient
                        Supplements</p>
                </div>
            </div>
            <div class="div6 border">
                <div class="flex flex-col justify-center">
                    <p>Fashion</p>
                    <p class="my-2 font-semibold">Nice style</p>
                    <p class="font-semibold">Nice style</p>
                </div>
            </div>
            <div class="div7 border">
                <div class="flex flex-col justify-center">
                    <p>Hand Wash</p>
                    <p class="my-2 font-semibold">Clean hands</p>
                    <p class="font-semibold">Clean bacteria</p>
                </div>
            </div>
            <div class="div8 border">
                <div class="flex flex-col justify-center">
                    <p>Sunglasses</p>
                    <p class="my-2 font-semibold">Authentic</p>
                    <p class="font-semibold">Sale off 50%</p>
                </div>
            </div>
            <div class="div9 border">
                <div class="flex flex-col justify-center">
                    <p>Cosmetic</p>
                    <p class="my-2 font-semibold">MAXIMI</p>
                    <p class="font-semibold">Sale 50%</p>
                </div>
            </div>
            <div class="div10 border">
                <div class="flex flex-col justify-center">
                    <p>Wine</p>
                    <p class="my-2 font-semibold">Drunkenness</p>
                    <p class="font-semibold">Deep Flavor</p>
                </div>
            </div>
            {showRandom && <RandomProduct setShowRandom={setShowRandom}></RandomProduct>}
        </div>
    );
};

export default TopPart;