const Navbar = () => {


    return (
        <nav class="bg-white-800">
            <div class="mx-auto px-2 sm:px-4 md:px-6 lg:px-8" style={{
                lineHeight: "23px",
                fontWeight: 300,
                backgroundImage: "url(bg.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}>
                <div>
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
                        <input style={{ boxShadow: 'i' }} placeholder="Type keyword here..." class="border-bord"></input>
                    </div>
                </div>
            </div>
        </nav>


    );
};
export default Navbar;