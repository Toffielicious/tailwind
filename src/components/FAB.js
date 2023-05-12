
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
        window.scrollTo({ top: 0, scrollbehavior: 'smooth' });
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

