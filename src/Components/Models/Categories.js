import React, { useContext } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { Context } from '../../App';
import EachDetails from './EachDetails';

const Categories = () => {
    const { allProducts, setProductModal } = useContext(Context)
    return (
        <div className="w-[95%] mx-auto my-3">
            <div className="flex justify-between">
                <h1 className="font-semibold">Shop By Categories</h1>
                <div className="flex items-center justify-between">
                    <div className='flex'><MdKeyboardArrowLeft className='text-[#D6D6D6]'></MdKeyboardArrowLeft><MdKeyboardArrowRight></MdKeyboardArrowRight></div>
                </div>
            </div>
            <div className="flex w-[95%] mx-auto justify-between my-3">
                <div className="px-4 py-8 border rounded-lg flex flex-col justify-center items-center"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.428 19.224V8C39.428 7.46957 39.2173 6.96086 38.8422 6.58579C38.4671 6.21071 37.9584 6 37.428 6H33.714C33.1836 6 32.6748 6.21071 32.2998 6.58579C31.9247 6.96086 31.714 7.46957 31.714 8V12.612" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 21.428L21.396 8.232C22.1209 7.61068 23.0442 7.26917 23.999 7.26917C24.9538 7.26917 25.877 7.61068 26.602 8.232L42 21.428" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.57202 19.224V38C8.57202 39.0609 8.99345 40.0783 9.7436 40.8284C10.4937 41.5786 11.5112 42 12.572 42H22" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M41.9999 42L38.7219 38.722" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M33.448 26C34.4262 26 35.3949 26.1927 36.2986 26.567C37.2024 26.9414 38.0236 27.4901 38.7153 28.1818C39.407 28.8735 39.9557 29.6946 40.33 30.5984C40.7043 31.5021 40.897 32.4708 40.897 33.449C40.897 34.4272 40.7043 35.3959 40.33 36.2996C39.9557 37.2034 39.407 38.0245 38.7153 38.7162C38.0236 39.4079 37.2024 39.9566 36.2986 40.331C35.3949 40.7053 34.4262 40.898 33.448 40.898C31.4724 40.898 29.5777 40.1132 28.1808 38.7162C26.7838 37.3193 25.999 35.4246 25.999 33.449C25.999 31.4734 26.7838 29.5787 28.1808 28.1818C29.5777 26.7848 31.4724 26 33.448 26" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M36.3461 32L32.724 35.622L30.55 33.448" stroke="#68D237" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                    Real Estate</div>
                <div className="px-4 py-8 border rounded-lg flex flex-col justify-center items-center"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.57 15.428H19.428C17.2188 15.428 15.428 17.2188 15.428 19.428V28.57C15.428 30.7791 17.2188 32.57 19.428 32.57H28.57C30.7791 32.57 32.57 30.7791 32.57 28.57V19.428C32.57 17.2188 30.7791 15.428 28.57 15.428Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.572 20.572H27.43V27.43H20.572V20.572Z" stroke="#68D237" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 6H16C10.4772 6 6 10.4772 6 16V32C6 37.5228 10.4772 42 16 42H32C37.5228 42 42 37.5228 42 32V16C42 10.4772 37.5228 6 32 6Z" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M36 20H32.572" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M36 28H32.572" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.428 20H12" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.428 28H12" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20 12V15.428" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M28 12V15.428" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20 32.572V36" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M28 32.572V36" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                    Technology</div>
                <div className="px-4 py-8 border rounded-lg flex flex-col justify-center items-center"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.578 34.87L16.038 40.504C16.2597 41.3624 16.7602 42.1229 17.4611 42.6659C18.162 43.209 19.0234 43.5037 19.91 43.504H28.088C28.9746 43.5037 29.836 43.209 30.5369 42.6659C31.2378 42.1229 31.7383 41.3624 31.96 40.504L33.424 34.866" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M24 28V20" stroke="#68D237" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M33.4219 13.13L31.9619 7.49597C31.7403 6.63751 31.2397 5.87702 30.5388 5.334C29.838 4.79097 28.9765 4.49619 28.0899 4.49597H19.9119C19.0253 4.49619 18.1639 4.79097 17.463 5.334C16.7622 5.87702 16.2616 6.63751 16.0399 7.49597L14.5759 13.132" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.668 35H32.334C33.5275 35.0416 34.6888 34.6084 35.5635 33.7952C36.4381 32.9821 36.9547 31.8554 37 30.662V17.338C36.9542 16.1445 36.4371 15.0177 35.5622 14.2046C34.6872 13.3916 33.5257 12.9584 32.332 13H15.668C14.4742 12.9578 13.3123 13.3908 12.4373 14.204C11.5622 15.0172 11.0453 16.1443 11 17.338V30.66C11.0214 31.2515 11.1591 31.833 11.4053 32.3713C11.6515 32.9096 12.0014 33.3941 12.4349 33.7971C12.8684 34.2001 13.377 34.5138 13.9318 34.7202C14.4865 34.9266 15.0765 35.0217 15.668 35V35Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M30 28V24" stroke="#68D237" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 28V26" stroke="#68D237" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                    Watch</div>
                <div className="px-4 py-8 border rounded-lg flex flex-col justify-center items-center"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 10.804L14.208 10.206C13.6766 10.0289 13.114 9.96533 12.5565 10.0194C11.999 10.0736 11.4591 10.2441 10.9718 10.5202C10.4844 10.7962 10.0604 11.1715 9.72732 11.6218C9.3942 12.072 9.15936 12.5872 9.038 13.134L6.19 25.948C6.0638 26.5167 6.00009 27.0975 6 27.68V32C6 33.5913 6.63214 35.1175 7.75736 36.2427C8.88258 37.3679 10.4087 38 12 38H14.57C16.0577 38 17.4924 37.4472 18.5956 36.449C19.6988 35.4508 20.3917 34.0784 20.54 32.598L21 28" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 10.804L33.792 10.206C34.3234 10.0289 34.886 9.96533 35.4435 10.0194C36.001 10.0736 36.5409 10.2441 37.0282 10.5202C37.5156 10.7962 37.9396 11.1715 38.2727 11.6218C38.6058 12.072 38.8406 12.5872 38.962 13.134L41.81 25.948C41.9363 26.5174 42.0001 27.0988 42 27.682V32C42 33.5913 41.3679 35.1175 40.2426 36.2427C39.1174 37.3679 37.5913 38 36 38H33.43C31.9423 38 30.5076 37.4472 29.4044 36.449C28.3012 35.4508 27.6083 34.0784 27.46 32.598L27 28" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M42 28.0001C39.7177 26.6896 37.1318 26 34.5 26C31.8682 26 29.2823 26.6896 27 28.0001" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 28.0001C18.7177 26.6896 16.1318 26 13.5 26C10.8682 26 8.28233 26.6896 6 28.0001" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 28C21.8655 27.3509 22.9181 27 24 27C25.0819 27 26.1345 27.3509 27 28" stroke="#68D237" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                    Glasses</div>
                <div className="px-4 py-8 border rounded-lg flex flex-col justify-center items-center"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20.766V10C10.0002 9.62871 10.1038 9.26477 10.2991 8.94898C10.4944 8.63319 10.7738 8.37801 11.106 8.21203L15.106 6.21203C15.4108 6.0597 15.7495 5.98779 16.09 6.00312C16.4304 6.01846 16.7613 6.12053 17.0512 6.29964C17.3411 6.47876 17.5805 6.72898 17.7465 7.02657C17.9126 7.32417 17.9998 7.65925 18 8.00003V20.764" stroke="#68D237" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 20.766H18C18.5304 20.766 19.0391 20.9767 19.4142 21.3518C19.7893 21.7268 20 22.2356 20 22.766V38C20 39.0609 19.5786 40.0783 18.8284 40.8284C18.0783 41.5786 17.0609 42 16 42H12C10.9391 42 9.92172 41.5786 9.17157 40.8284C8.42143 40.0783 8 39.0609 8 38V22.766C8 22.2356 8.21071 21.7268 8.58579 21.3518C8.96086 20.9767 9.46957 20.766 10 20.766Z" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 24H36C37.0609 24 38.0783 24.4214 38.8284 25.1716C39.5786 25.9217 40 26.9391 40 28V40C40 40.5304 39.7893 41.0391 39.4142 41.4142C39.0391 41.7893 38.5304 42 38 42H30C29.4696 42 28.9609 41.7893 28.5858 41.4142C28.2107 41.0391 28 40.5304 28 40V28C28 26.9391 28.4214 25.9217 29.1716 25.1716C29.9217 24.4214 30.9391 24 32 24V24Z" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20 30H8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                    Cosmetic</div>
                <div className="px-4 py-8 border rounded-lg flex flex-col justify-center items-center"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 10.5H18" stroke="#68D237" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.47803 21.924L9.76003 23.35C11.0314 24.1448 12.5006 24.5663 14 24.5663C15.4994 24.5663 16.9687 24.1448 18.24 23.35L20.522 21.924" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 4H15C15.5304 4 16.0391 4.21071 16.4142 4.58579C16.7893 4.96086 17 5.46957 17 6V10.17C17 13.986 18.036 17.73 20 21C21.9632 24.2713 23.0002 28.0148 23 31.83V40C23 41.0609 22.5786 42.0783 21.8284 42.8284C21.0783 43.5786 20.0609 44 19 44H9C7.93913 44 6.92172 43.5786 6.17157 42.8284C5.42143 42.0783 5 41.0609 5 40V31.83C5 28.014 6.036 24.27 8 21C9.96323 17.7287 11.0002 13.9852 11 10.17V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4Z" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M36 34V44" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 44H40" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M35.9999 34C34.992 34.0012 33.9958 33.7844 33.0795 33.3645C32.1632 32.9445 31.3486 32.3314 30.6915 31.5672C30.0344 30.8029 29.5503 29.9056 29.2725 28.9367C28.9947 27.9678 28.9297 26.9504 29.0819 25.954L30.9759 13.694C31.1259 12.72 31.9679 12 32.9579 12H39.4819C39.9722 11.999 40.4457 12.1782 40.8126 12.5034C41.1794 12.8286 41.4141 13.2772 41.4719 13.764L42.9499 26.194C43.0655 27.1748 42.9719 28.1689 42.6753 29.1109C42.3787 30.0528 41.8858 30.9212 41.2291 31.6588C40.5724 32.3964 39.7668 32.9864 38.8655 33.39C37.9641 33.7935 36.9875 34.0014 35.9999 34Z" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M42.22 20H30" stroke="#68D237" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                    Food
                    High Grade</div>
            </div>
            <div className="flex w-[95%] mx-auto">
                <div className="w-1/2 mx-2 bg-[#F5F5F5] p-20 flex flex-col justify-center items-center rounded-lg">
                    <div>
                        <p className="text-xs">Hot Deal</p>
                        <p className="my-2 font-semibold">TOURS SAFE</p>
                        <p className="my-2 font-semibold">TRUE DISCOUNT</p>
                        <button className="btn bg-[#68D237] border-none text-white">Order Now</button>
                    </div>
                </div>
                <div className="w-1/2 mx-2 bg-[#F5F5F5] p-20 flex flex-col justify-center items-center rounded-lg">
                    <div>
                        <p className="text-xs">New Product</p>
                        <p className="my-2 font-semibold">EXPERIENCE TECHNOLOGY</p>
                        <p className="my-2 font-semibold">RELAX HIGHTLY</p>
                        <button className="btn bg-[#68D237] border-none text-white">Order Now</button>
                    </div>
                </div>
            </div>
            <div className="w-[95%] mx-auto">
                <h1 className="text-xl font-semibold my-2">Men's Clothing</h1>
                <div className="grid grid-cols-4 gap-4">
                    {allProducts.filter(pd => pd.category === "men's clothing").map(pd => <EachDetails
                        key={pd.id}
                        product={pd}
                        setProductModal={setProductModal}
                        state={Math.round(Math.random() * 3)}
                    ></EachDetails>)}
                </div>
                <h1 className="text-xl font-semibold my-2">Jewelery</h1>
                <div className="grid grid-cols-4 gap-4">
                    {allProducts.filter(pd => pd.category === "jewelery").map(pd => <EachDetails
                        key={pd.id}
                        product={pd}
                        setProductModal={setProductModal}
                        state={Math.round(Math.random() * 3)}
                    ></EachDetails>)}
                </div>
                <h1 className="text-xl font-semibold my-2">Electronics</h1>
                <div className="grid grid-cols-4 gap-4">
                    {allProducts.filter(pd => pd.category === "electronics").map(pd => <EachDetails
                        key={pd.id}
                        product={pd}
                        setProductModal={setProductModal}
                        state={Math.round(Math.random() * 3)}
                    ></EachDetails>)}
                </div>
                <h1 className="text-xl font-semibold my-2">Women's Clothing</h1>
                <div className="grid grid-cols-4 gap-4">
                    {allProducts.filter(pd => pd.category === "women's clothing").map(pd => <EachDetails
                        key={pd.id}
                        product={pd}
                        setProductModal={setProductModal}
                        state={Math.round(Math.random() * 3)}
                    ></EachDetails>)}
                </div>
                <div className="grid grid-cols-3 my-4 gap-3">
                    <div className="flex flex-col justify-center items-center border p-4 rounded-lg">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 14H38.646C39.464 14 40.2 14.498 40.502 15.258L43.714 23.286C43.902 23.758 44 24.262 44 24.77V36.666C44 37.1964 43.7893 37.7051 43.4142 38.0802C43.0391 38.4553 42.5304 38.666 42 38.666H38.338" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M44 28H36V20H42.4" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M32 38.8398H16.34" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25.112 10H28C28.5304 10 29.0391 10.2107 29.4142 10.5858C29.7893 10.9609 30 11.4696 30 12V30H4" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 38.832H6C5.46957 38.832 4.96086 38.6213 4.58579 38.2462C4.21071 37.8711 4 37.3624 4 36.832V12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10H8.476" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M37.408 36.5919C37.7021 36.8861 37.9355 37.2353 38.0947 37.6196C38.2539 38.004 38.3358 38.4159 38.3358 38.8319C38.3358 39.2479 38.2539 39.6598 38.0947 40.0442C37.9355 40.4285 37.7021 40.7777 37.408 41.0719C37.1138 41.3661 36.7646 41.5994 36.3802 41.7586C35.9959 41.9178 35.584 41.9997 35.168 41.9997C34.752 41.9997 34.34 41.9178 33.9557 41.7586C33.5713 41.5994 33.2221 41.3661 32.928 41.0719C32.6338 40.7777 32.4005 40.4285 32.2413 40.0442C32.0821 39.6598 32.0001 39.2479 32.0001 38.8319C32.0001 38.4159 32.0821 38.004 32.2413 37.6196C32.4005 37.2353 32.6338 36.8861 32.928 36.5919C33.2221 36.2977 33.5713 36.0644 33.9557 35.9052C34.34 35.746 34.752 35.6641 35.168 35.6641C35.584 35.6641 35.9959 35.746 36.3802 35.9052C36.7646 36.0644 37.1138 36.2977 37.408 36.5919" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.408 36.592C15.7021 36.8858 15.9355 37.2348 16.0948 37.6189C16.2541 38.003 16.3362 38.4147 16.3364 38.8305C16.3366 39.2464 16.2549 39.6581 16.0959 40.0424C15.9369 40.4266 15.7039 40.7758 15.41 41.07C15.1161 41.3641 14.7671 41.5975 14.383 41.7568C13.9989 41.9161 13.5872 41.9982 13.1714 41.9984C12.7556 41.9986 12.3438 41.9168 11.9595 41.7579C11.5753 41.5989 11.2261 41.3659 10.932 41.072C10.3379 40.4784 10.0039 39.6732 10.0035 38.8334C10.0032 37.9936 10.3364 37.188 10.93 36.594C11.5235 35.9999 12.3288 35.6659 13.1686 35.6655C14.0083 35.6652 14.8139 35.9984 15.408 36.592" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.794 18.636C14.5879 18.636 12.4722 17.7596 10.9122 16.1997C9.35231 14.6398 8.47595 12.5241 8.47595 10.318C8.47595 5.818 12.302 1.996 16.8 2C17.8923 2.0004 18.9738 2.21594 19.9829 2.63432C20.9919 3.0527 21.9087 3.66573 22.6808 4.43841C23.4529 5.21109 24.0653 6.12828 24.4829 7.13761C24.9006 8.14695 25.1153 9.22867 25.115 10.321C25.1146 11.4133 24.899 12.4949 24.4806 13.5039C24.0623 14.513 23.4492 15.4297 22.6765 16.2018C21.9039 16.974 20.9867 17.5863 19.9773 18.004C18.968 18.4216 17.8863 18.6364 16.794 18.636" stroke="black" stroke-width="1.5" />
                            <path d="M20.4899 8.47021L15.8679 13.0922L13.0959 10.3182" stroke="#68D237" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h1 className="text-xl font-semibold my-2">Free Shipping</h1>
                        <p>For invoices
                            over $1.500 </p>
                    </div>
                    <div className="flex flex-col justify-center items-center border p-4 rounded-lg">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.98 34L27.98 38L31.98 42" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M26.8279 15.1722C27.21 15.5412 27.5147 15.9825 27.7243 16.4705C27.934 16.9586 28.0443 17.4834 28.0489 18.0146C28.0535 18.5457 27.9523 19.0724 27.7512 19.564C27.5501 20.0556 27.2531 20.5022 26.8775 20.8777C26.5019 21.2533 26.0553 21.5503 25.5637 21.7515C25.0722 21.9526 24.5454 22.0538 24.0143 22.0492C23.4832 22.0445 22.9583 21.9342 22.4703 21.7246C21.9823 21.5149 21.5409 21.2102 21.1719 20.8282C20.4433 20.0738 20.0401 19.0633 20.0492 18.0146C20.0583 16.9658 20.479 15.9625 21.2206 15.2209C21.9623 14.4793 22.9655 14.0586 24.0143 14.0495C25.0631 14.0404 26.0735 14.4435 26.8279 15.1722" stroke="#68D237" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13 15V21" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M35 15V21" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 30H10C8.93913 30 7.92172 29.5786 7.17157 28.8284C6.42143 28.0783 6 27.0609 6 26V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H38C39.0609 6 40.0783 6.42143 40.8284 7.17157C41.5786 7.92172 42 8.93913 42 10V22" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M36 30H38C39.0609 30 40.0783 30.4214 40.8284 31.1716C41.5786 31.9217 42 32.9391 42 34C42 35.0609 41.5786 36.0783 40.8284 36.8284C40.0783 37.5786 39.0609 38 38 38H28" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <h1 className="text-xl font-semibold my-2">Cash Back</h1>
                        <p>When paying for products via Dasun Wallet</p>
                    </div>
                    <div className="flex flex-col justify-center items-center border p-4 rounded-lg">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38 34H36C35.4696 34 34.9609 33.7893 34.5858 33.4142C34.2107 33.0391 34 32.5304 34 32V22C34 21.4696 34.2107 20.9609 34.5858 20.5858C34.9609 20.2107 35.4696 20 36 20H38C39.0609 20 40.0783 20.4214 40.8284 21.1716C41.5786 21.9217 42 22.9391 42 24V30C42 31.0609 41.5786 32.0783 40.8284 32.8284C40.0783 33.5786 39.0609 34 38 34Z" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 34H10C8.93913 34 7.92172 33.5786 7.17157 32.8284C6.42143 32.0783 6 31.0609 6 30V24C6 22.9391 6.42143 21.9217 7.17157 21.1716C7.92172 20.4214 8.93913 20 10 20H12C12.5304 20 13.0391 20.2107 13.4142 20.5858C13.7893 20.9609 14 21.4696 14 22V32C14 32.5304 13.7893 33.0391 13.4142 33.4142C13.0391 33.7893 12.5304 34 12 34Z" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M37 20V19C37 15.5522 35.6304 12.2456 33.1924 9.80761C30.7544 7.36964 27.4478 6 24 6C20.5522 6 17.2456 7.36964 14.8076 9.80761C12.3696 12.2456 11 15.5522 11 19V20" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M27.75 40H32C33.0609 40 34.0783 39.5786 34.8284 38.8284C35.5786 38.0783 36 37.0609 36 36V34" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25.25 42.5H22.75C22.087 42.5 21.4511 42.2366 20.9822 41.7678C20.5134 41.2989 20.25 40.663 20.25 40C20.25 39.337 20.5134 38.7011 20.9822 38.2322C21.4511 37.7634 22.087 37.5 22.75 37.5H25.25C25.913 37.5 26.5489 37.7634 27.0178 38.2322C27.4866 38.7011 27.75 39.337 27.75 40C27.75 40.663 27.4866 41.2989 27.0178 41.7678C26.5489 42.2366 25.913 42.5 25.25 42.5V42.5Z" stroke="#68D237" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <h1 className="text-xl font-semibold my-2">24/7 Support</h1>
                        <p>When something goes wrong</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Categories;