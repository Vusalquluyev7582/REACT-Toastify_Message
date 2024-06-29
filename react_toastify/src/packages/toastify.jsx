import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Toastify() {

    const notify = () => toast.success('🚀 Təbriklər Qazandınız', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Slide,
        // icon: "🚀"
    });

    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer />
        </div>
    )
}

export default Toastify