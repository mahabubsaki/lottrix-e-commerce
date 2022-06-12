import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import banner from '../Assets/banner.webp'

const PopUpModal = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        const confirmation = JSON.parse(localStorage.getItem('popUp'))
        if (!confirmation) {
            setTimeout(() => {
                setShow(true)
            }, 5000)
        }
    }, [])
    const handleSignUp = (e) => {
        e.preventDefault()
        localStorage.setItem('popUp', true)
        toast.success('Signed to newsletter successfully')
        setShow(false)
    }
    const handleConfirmation = (e) => {
        if (e.target.checked) {
            localStorage.setItem('popUp', true)
        }
        else {
            localStorage.setItem('popUp', false)
        }
    }
    return (
        <>
            <label for="my-modal-4" class="btn modal-button hidden">open modal</label>

            <input type="checkbox" id="my-modal-4" class="modal-toggle" checked={show} readOnly />
            <div class="modal">
                <div class="modal-box relative w-11/12 max-w-5xl">
                    <label for="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setShow(false)}>✕</label>
                    <div class="flex items-center">
                        <img src={banner} alt="" className='w-3/5' />
                        <div className="w-2/5 px-4">
                            <p className="text-3xl font-semibold">Get Notification!</p>
                            <p className="my-4">Sign up for the newsletter today to receive notifications about new products.</p>
                            <form onSubmit={handleSignUp}>
                                <input type="email" name="email" id="email" className='p-2 my-2 border border-[gray] rounded-lg w-full' required placeholder="Email Address" />
                                <button className="btn w-full my-2 bg-[#68D237] text-white">Sign Up Now</button>
                            </form>
                            <div className="flex my-2 items-center">
                                <input type="checkbox" className="mx-3" onChange={handleConfirmation} />
                                <p>Do not show popup again</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopUpModal;