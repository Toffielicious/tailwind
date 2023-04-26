const Navbar = () => {


    return (
        <nav className="bg-white-800">
            <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{
                lineHeight: "23px",
                fontWeight: 300,
                backgroundImage: "url(bg.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}>
                <div >
                    <div className="flex flex-wrap items-center justify-between h-16">
                        <div className="flex-shrink-0 flex flex-row pl-20 gap-3">
                            <img src="PUPLogo.png" height='88px' width='88px' />
                            <div className="flex flex-col font-sanscinzel">
                                <h1 className="text-red font-bold text-lg pt-3">
                                    POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
                                </h1>
                                <h2 className="text-blackish font-bold text-sm/[15px]">
                                    The Country's 1st PolytechnicU
                                </h2>
                                <div className="flex flex-row space-x-4 pt-2 ">
                                    <a href="#" className="text-red font-bold hover:cursor-pointer">About PUP</a>
                                    <a href="#" className="text-red font-bold px-7 hover:cursor-pointer">Academic</a>
                                    <a href="#" className="text-red font-bold px-7 hover:cursor-pointer">Students</a>
                                    <a href="#" className="text-red font-bold px-4 hover:cursor-pointer">Research</a>
                                </div>
                            </div>
                        </div>
                        <input style={{ boxShadow: 'i' }} placeholder="Type keyword here..." className="border-bord"></input>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;