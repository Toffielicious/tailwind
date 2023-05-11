

const Navbar = () => {

    const about = [
        { a: 'University Profile' },
        { a: 'Vision and Mission' },
        { a: 'History' },
        { a: 'Logo and Symbols' },
        { a: 'Hymn' },
        { a: 'Annual Reports' },
        { a: 'Awards and Recognitions' },
        { a: 'Contact us' },
        { a: 'Maps' },
        { a: 'University Code' },
        { a: 'Institutional Development Plan' },
        { a: 'Quality Policy Statement' },
        { a: 'Branches and Satellite Campuses' },
        { a: 'Teaching and Learning Development' },
        { a: 'Memorandum Orders' },
        { a: 'Strategic Performance Management System' },
    ]

    const acad = [
        { a: 'Academic Programs' },
        { a: 'Open University System' },
        { a: 'Graduate Studies' },
        { a: 'Colleges' },
        { a: 'Institute of Technology' },
        { a: 'Senior High School' },
        { a: 'Laboratory High SChool' },
        { a: 'Library Services' },
        { a: 'Online Public Access Catalog' },
        { a: 'Quality Assurance' },
        { a: 'Branches and Satellite Campuses' },
        { a: 'Teaching and Learning Development' },
        { a: 'PUP eMabini Learning Portal' },
        { a: 'OVPAA' },
    ]

    const students = [
        { a: 'Student Services' },
        { a: 'Student Organizations' },
        { a: 'Student Publications' },
        { a: 'Student Council' },
        { a: 'Student Handbook' },
        { a: 'University Registrar' },
        { a: 'PUP Student Information System' },
        { a: 'PUP Online Document Request System' },
        { a: 'PUP Bookstore' },
        { a: 'Downloadable Forms' },
        { a: 'Online Job Postings' },
    ]

    const research = [
        { a: 'Researchers' },
        { a: 'Extensions' },
        { a: 'Institutional Planning' },
        { a: 'Intellectual Property' },
        { a: 'Research Publications' },
        { a: 'Science and Technology' },
        { a: 'Cultural and Language' },
        { a: 'Strategic Foresight and Innovation' },
        { a: 'Human and Social Development' },
        { a: 'PUP Student Information System' },
        { a: 'Gender and Development' },
        { a: 'PUP Online Survey for Faculty Evaluation' },
        { a: 'University Thesis and Dissertion Manual' },
    ]

    return (
        <nav class="bg-white-800 navbarResponsive ">
            <div class="mx-auto px-2 sm:px-4 md:px-6 end-btn lg:px-8 " style={{ lineHeight: "23px", fontWeight: 300, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", }}>
                <div className="2xl:px-64 flex flex-row end-btn2 md:justify-center xl:justify-between">

                    <div>
                        <div className="flex flex-row ">
                            <img src="PUPLogo.png" class="md:max-w-[90px] md:max-h-[90px] sm:max-w-[60px] sm:max-h-[60px] pupLogo" />
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
                                    <li><a class="isHover" href="#">About PUP</a>
                                        <ul class="dropdown-content text-black bg-white hidden text-gray divide-y divide-gray group-hover:block ">
                                            {about.map((item, index) => (
                                                <ul key={index} className=" py-2 rounded-tl-xl redHover rounded-tr-xl hover:bg-white hover:text-red group-hover:block">
                                                    <p className="font-thin text-gray transition duration-200 ease-in-out px-4 transform hover:translate-x-2 hover:text-red" >
                                                        <a key={index} href="#" className="font-thin text-graytext hover:text-red ">{item.a}</a>
                                                    </p>
                                                </ul>
                                            ))}
                                        </ul>
                                    </li>
                                    <li><a class="isHover" href="#">Academic</a>
                                        <div class="dropdown-content text-black bg-white hidden text-gray divide-y divide-gray group-hover:block ">
                                            {acad.map((item, index) => (
                                                <ul key={index} className="px-4 py-2 redHover rounded-tl-xl rounded-tr-xl hover:bg-white group-hover:block">
                                                    <p className="font-thin text-gray transition duration-200 ease-in-out transform hover:translate-x-2 hover:text-red">
                                                        <a key={index} href="#" className="font-thin text-graytext hover:text-red">{item.a}</a>
                                                    </p>
                                                </ul>
                                            ))}
                                        </div>
                                    </li>
                                    <li><a class="isHover" href="#">Students</a>
                                        <div class="dropdown-content text-black bg-white hidden text-gray divide-y divide-gray group-hover:block ">
                                            {students.map((item, index) => (
                                                <ul key={index} className="px-4 py-2 redHover rounded-tl-xl rounded-tr-xl hover:bg-white group-hover:block">
                                                    <p className="font-thin text-gray transition duration-200 ease-in-out transform hover:translate-x-2 hover:text-red">
                                                        <a key={index} href="#" className="font-thin text-graytext hover:text-red">{item.a}</a>
                                                    </p>
                                                </ul>
                                            ))}
                                        </div>
                                    </li>
                                    <li><a class="isHover" href="#">Research</a>
                                        <div class="dropdown-content text-black bg-white hidden text-gray divide-y divide-gray group-hover:text-red">
                                            {research.map((item, index) => (
                                                <ul key={index} className="px-4 py-2 redHover rounded-tl-xl rounded-tr-xl hover:bg-white hover:text-red" >
                                                    <p className="font-thin transition duration-200 ease-in-out transform hover:translate-x-2 hovers">
                                                        <a key={index} href="#" className="font-thin text-graytext hover:text-red">{item.a}</a>
                                                    </p>
                                                </ul>
                                            ))}
                                        </div>
                                    </li>
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
                <button class="hidden  text-white font-bold rounded" id="menu-button">
                    <i class="fa fa-solid fa-bars text-white px-2 py-2 bg-red burgerMenu" style={{ fontSize: "24px" }}></i>
                </button>
            </div>
        </nav>


    );
};
export default Navbar;
