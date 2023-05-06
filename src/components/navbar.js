

const Navbar = () => {


    return (
        <nav class="bg-white-800 navbarResponsive ">
            <div class="mx-auto px-2 sm:px-4 md:px-6 end-btn lg:px-8" style={{
                lineHeight: "23px", fontWeight: 300, backgroundImage: "url(bg.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover",
            }}>
                <div className="2xl:px-64 flex flex-row end-btn2 justify-between">

                    <div>
                        <div className="flex flex-row">
                            <img src="PUPLogo.png" class="max-w-[90px] max-h-[90px]" />
                            <div class="flex flex-col menu font-sanscinzel pt-4">
                                <div class="navbarMenu hide">
                                    <a href="#" class="text-red text-sm font-bold flex flex-row gap-2 hover:underline" style={{ fontSize: '18px' }} >
                                        Polytechnic University of the Philippines
                                    </a>
                                    <a href="#" class="text-blackish text-sm font-bold" style={{ fontSize: '15px' }}>
                                        The Country's 1st PolytechnicU
                                    </a>
                                </div>

                                <ul className="hidden  md:flex md:flex-row md:gap-11 pt-4 text-red font-bold">
                                    <li><a href="#">About PUP</a></li>
                                    <li><a href="#">Academic</a></li>
                                    <li><a href="#">Students</a></li>
                                    <li><a href="#">Research</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-row my-8 hideSearch " >
                        <div className='hidden md:flex searc h-6 rounded-sm' style={{ paddingLeft: '0px' }}>
                            <input placeholder="Type keyword here..." class="inputSearch" />
                            <button disabled className='flex flex-wrap content-center justify-center text-white bg-red hover:cursor-pointer rounded-r-sm h-7 w-7'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                        </div>
                        
                    </div>
                </div>
                <button class="hidden bg-red text-white font-bold  px-4 rounded" id="menu-button">Menu</button>

            </div>
        </nav>


    );
};
export default Navbar;


{/* old code with btn */ }

{/* <div className="px-10 mx-auto col-md-12">
                    <div class="flex flex-wrap items-center justify-between h-16">
                        <div class="flex-shrink-0 flex flex-row pl-2 sm:pl-4 md:pl-20 gap-3 ">
                            <img src="PUPLogo.png" class="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20" />
                            <div class="flex flex-col font-sanscinzel">
                                <h1 class="text-red text-lg sm:text-xl md:text-2xl pt-1 sm:pt-3 md:pt-4 font-bold hidden sm:block">
                                    POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
                                </h1>
                                <h2 class="text-blackish text-sm sm:text-base md:text-lg font-bold hidden sm:block">
                                    The Country's 1st PolytechnicU
                                </h2>

                                <div class="hidden md:flex flex-row space-x-2 pt-2 md:pt-3">
                                    <a href="#" class="text-red font-bold hover:cursor-pointer">About PUP</a>
                                    <a href="#" class="text-red font-bold px-2 hover:cursor-pointer">Academic</a>
                                    <a href="#" class="text-red font-bold px-2 hover:cursor-pointer">Students</a>
                                    <a href="#" class="text-red font-bold hover:cursor-pointer">Research</a>
                                </div>

                                <div class="md:hidden flex flex-row justify-end pt-2">
                                    <button class="flex items-center px-3 py-2 border rounded text-red border-red hover:text-white hover:bg-red">
                                        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 6H2V4h16v2zM2 10h16v-2H2v2zm16 5H2v-2h16v2z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="ml-2">Menu</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div>
                            <input placeholder="Type keyword here..." class="inputSearch" />
                        </div>
                    </div>
                </div> */}