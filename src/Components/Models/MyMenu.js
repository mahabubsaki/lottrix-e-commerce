import React from 'react';
import { RiMenu2Fill } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { BsTruck } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'

const MyMenu = () => {
    return (
        <div>
            <div className="w-11/12 flex items-center justify-between mx-auto bg-[#f7f0f0] rounded-lg">
                <div className="menu">
                    <div className="menu-bar relative"><span className='flex btn btn-ghost'><RiMenu2Fill></RiMenu2Fill>
                        <span className="mx-3 text-sm">Category</span>
                        <MdKeyboardArrowDown></MdKeyboardArrowDown></span>
                        <div className="sub-menu-1 text-xs z-50">
                            <ul className="p-1">
                                <li><span>Real Estate <IoIosArrowForward></IoIosArrowForward></span>
                                    <ul className="sub-menu-2 p-1">
                                        <li><span>Household Items</span></li>
                                        <li><span>Magnets</span></li>
                                        <li><span>Post Cards</span></li>
                                        <li><span>Yard Signs</span></li>
                                    </ul></li>
                                <li><span>Technologies <IoIosArrowForward></IoIosArrowForward></span>
                                    <ul className="sub-menu-2 p-1">
                                        <li><span>Smart Watch</span></li>
                                        <li><span>Laptop</span></li>
                                        <li><span>Desktop</span></li>
                                        <li><span>Tablet</span></li>
                                        <li><span>Accessories</span></li>
                                    </ul>
                                </li>
                                <li><span>Home and Life<IoIosArrowForward></IoIosArrowForward></span>
                                    <ul className="sub-menu-2 p-1">
                                        <li><span>Toothpastes</span></li>
                                        <li><span>Handwash</span></li>
                                        <li><span>Oral Care</span></li>
                                        <li><span>Cooking Oil</span></li>
                                    </ul></li>
                                <li><span>Cosmetic Surgery<IoIosArrowForward></IoIosArrowForward></span>
                                    <ul className="sub-menu-2 p-1">
                                        <li><span>Beauty Bonanza</span></li>
                                        <li><span>Aesthetic Storm</span></li>
                                        <li><span>Absolute Glam</span></li>
                                    </ul></li>
                                <li><span>Fashion Accessories<IoIosArrowForward></IoIosArrowForward></span>
                                    <ul className="sub-menu-2 p-1">
                                        <li><span>T-shirt</span></li>
                                        <li><span>Body Spray</span></li>
                                        <li><span>Hair Gel</span></li>
                                        <li><span>Soap</span></li>
                                        <li><span>Facewash</span></li>
                                    </ul></li>
                                <li><span>Fashion<IoIosArrowForward></IoIosArrowForward></span>
                                    <ul className="sub-menu-2 p-1">
                                        <li><span>Nike</span></li>
                                        <li><span>Adidas</span></li>
                                        <li><span>Levis</span></li>
                                        <li><span>Zara</span></li>
                                    </ul></li>
                                <li><span>Luxury Food<IoIosArrowForward></IoIosArrowForward></span>
                                    <ul className="sub-menu-2 bottom-menu p-1">
                                        <li><span>Turkish</span></li>
                                        <li><span>Indian</span></li>
                                        <li><span>Chinese</span></li>
                                        <li><span>Japanese</span></li>
                                    </ul></li>
                                <li><span>Jewelry<IoIosArrowForward></IoIosArrowForward></span>
                                    <ul className="sub-menu-2 bottom-menu p-1">
                                        <li><span>Rings and Bling</span></li>
                                        <li><span>Gems Galore</span></li>
                                        <li><span>Special Stones</span></li>
                                        <li><span>Jewels</span></li>
                                    </ul></li>
                                <li><span>Vehicle<IoIosArrowForward></IoIosArrowForward></span>
                                    <ul className="sub-menu-2 bottom-menu p-1">
                                        <li><span>BMW</span></li>
                                        <li><span>Ford</span></li>
                                        <li><span>Ferarri</span></li>
                                        <li><span>Mitsubishi</span></li>
                                        <li><span>Royal Enfield</span></li>
                                    </ul></li>
                                <li><span><button className="btn bg-[#68D237] text-white border-none text-xs">All of Category</button></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="btn btn-ghost text-xs">Home</button>
                    <div class="dropdown dropdown-start">
                        <label tabindex="0" class="m-1 btn btn-ghost text-xs"><span className="mr-3">New Product</span><MdKeyboardArrowDown></MdKeyboardArrowDown></label>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[400px]">
                            <div className="flex justify-between">
                                <div>
                                    <li><span className='font-semibold'>Smart Watch</span></li>
                                    <li><span className='font-semibold'>Laptops</span></li>
                                    <li><span className="text-xs">Apple</span></li>
                                    <li><span className="text-xs">Dell</span></li>
                                    <li><span className="h-[120px] w-[200px] flex justify-center items-center bg-[#F5F5F5] rounded-lg py-2">
                                        <div>
                                            <span className="font-semibold text-xs">GENUINE ACCESSORIES
                                                SUPER SALE OCTOBER</span><br />
                                            <button className="btn bg-[#68D237] text-white border-none p-2 mt-2 block mx-auto mb-3">Buy Now</button>
                                        </div>
                                    </span></li>
                                </div>
                                <div>
                                    <li><span className='font-semibold'>Tablet</span></li>
                                    <li><span className="text-xs">Apple</span></li>
                                    <li><span className="text-xs">Huwawei</span></li>
                                    <li><span className="text-xs">Microsoft</span></li>
                                    <li><span className="text-xs">Samsung</span></li>
                                </div>
                                <div><li><span className='font-semibold'>Tablet</span></li>
                                    <li><span className="text-xs">Accessories</span></li>
                                    <li><span className="text-xs">Keyboard</span></li>
                                    <li><span className="text-xs">Mouse</span></li>
                                    <li><span className="text-xs">Camera</span></li>
                                    <li><span className="text-xs">Speaker</span></li>
                                    <li><span className="text-xs">USB</span></li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <button className="btn btn-ghost text-xs">
                        Promotion
                        <div class="badge bg-[#FF8154] border border-[#FF8154] text-white ml-2 text-[8px]">HOT</div>
                    </button>
                </div>
                <div className="flex items-center">
                    <button className="text-xs btn btn-ghost"><BsTruck className="text-lg mr-2"></BsTruck>Track Your Order</button>
                    <button className="text-xs btn btn-ghost"><AiOutlineUser className="text-lg mr-2"></AiOutlineUser>Sign In/Register</button>
                </div>
            </div>
        </div>
    );
};

export default MyMenu;