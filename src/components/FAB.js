
import { useState, useEffect } from "react";
const Fab = () => {

    const [hide, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const yOffset = window.pageYOffset;
            setShowButton(yOffset > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const goTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };



    return (

        <>

            <div class="adminActions">
                <a class="adminButton" href=""><i class="fab fa-facebook-messenger text-white" style={{ fontSize: '26px' }}></i></a>
            </div>
            <button className={` adminActions2 ${hide ? "block" : "hidden"}`} onClick={goTop}>
                <div class="adminButton2 hover:bg-yellow-400" href=""><i class="fa fa-solid fa-chevron-up pt-2.5" style={{ fontSize: '24px' }} ></i></div>
            </button>


        </>

    )
}

export default Fab

// import { useState, useEffect } from "react";

// const FloatingButtons = () =>{

//     const [showButton, setShowButton] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//         const yOffset = window.pageYOffset;
//             setShowButton(yOffset > 0);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const handleClick = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     return(
//         <>
//             <button className="adminActions">
//                 <svg className="w-6 h-6 adminButton" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
//                     <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
//                 </svg>
//             </button>
//             <button className={`back-to-top  adminActions2 ${showButton ? "block" : "hidden"}`} onClick={handleClick}>
//                 <i className="fa fa-angle-up hover:bg-yellow-400 adminButton2"></i>
//             </button>
//         </>
//     )
// }

// export default FloatingButtons