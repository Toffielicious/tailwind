const Icons = () => {
    return (
        // <div class="flex flex-row justify-between m-20 pt-30  sm:pt-20 sm:gap-20 hover:text-white ">
        //     <span class="inline-flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red hover:text-white bg-white hover:bg-red">
        //         <i class="fa fa-edit icon-medium-effect icon-effect-2 text-red hover:text-white" style={{ fontSize: '32px', lineHeight: '16px' }}></i>
        //     </span>
        //     <span class="inline-flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red bg-white hover:bg-red">
        //         <i class="fa fa-solid fa-star text-red hover:text-white" style={{ fontSize: '32px', lineHeight: '16px' }}></i>
        //     </span>
        //     <span class="inline-flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red bg-white hover:bg-red">
        //         <i class="fa fa-solid fa-cubes text-red hover:text-white" style={{ fontSize: '32px', lineHeight: '16px' }}></i>
        //     </span>
        //     <span class="inline-flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red bg-white hover:bg-red">
        //         <i class="fa fa-university text-red hover:text-white" style={{ fontSize: '32px', lineHeight: '16px' }} aria-hidden="true"></i>
        //     </span>
        // </div>

        <div className="flex flex-row justify-between mx-20 my-8 lg:pt-0 sm:pt-20 sm:gap-20 px-72 hover:text-red">
            <a class="flex item-center justify-center  flex-col hover:cursor-pointer justify-center w-24  hover:text-red text-white m-6">
                <span class="inline-flex  items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red hover:text-white bg-white hover:bg-red">
                    <i class="fa fa-edit  icon-medium-effect icon-effect-2 text-red hover:text-white" style={{ fontSize: '34px', lineHeight: '16px' }}></i>
                </span>
                <h4 class="text-red pt-4 font-semibold ">Apply Now</h4>
            </a>
            <a class=" flex item-center justify-center flex-col hover:cursor-pointer justify-center hover:underline hover:text-red text-white m-6">
                <div class="pl-4">
                    <span class="inline-flex items-center  justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red bg-white hover:bg-red">
                        <i class="fa fa-solid fa-star text-red hover:text-white" style={{ fontSize: '32px', lineHeight: '16px' }}></i>
                    </span>
                </div>
                <h4 class="text-red pt-4 font-semibold" style={{ fontSize: '16px' }}>Attend an Event</h4>
            </a>
            <a class=" flex item-center justify-center  flex-col hover:cursor-pointer justify-center hover:underline hover:text-red text-white m-6">
                <div class="pl-11 pt-5">
                    <span class="inline-flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red bg-white hover:bg-red">
                        <i class="fa fa-solid fa-cubes text-red hover:text-white" style={{ fontSize: '32px', lineHeight: '16px' }}></i>
                    </span>
                </div>
                <h4 class="text-red pt-5 text-center font-semibold">PUP and Sustainability<br></br> Development Programs</h4>
            </a>
            <a class="flex item-center justify-center flex-col hover:cursor-pointer justify-center hover:underline hover:text-red text-white m-6">

                <div className="pl-1">
                    <span class="inline-flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red bg-white hover:bg-red">
                        <i class="fa fa-university text-red hover:text-white" style={{ fontSize: '32px', lineHeight: '16px' }} aria-hidden="true"></i>
                    </span>
                </div>
                <h4 class="text-red pt-4 font-semibold">Campus Life</h4>
            </a>
        </div>

        // <div className="flex flex-row justify-between m-20 pt-30  sm:pt-20 sm:gap-20 hover:text-white">
        //     <a href="" className="links">
        //         <div className="icon2">
        //             <span class="inline-flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red hover:text-white bg-white hover:bg-red">
        //                 <i class="fa fa-edit icon-medium-effect icon-effect-2 text-red hover:text-white" style={{ fontSize: '34px', lineHeight: '16px' }}></i>
        //             </span>
        //         </div>
        //         <p>Apply Now</p>
        //     </a>
        //     <a href="" className="links">
        //         <div className="icon2">
        //             <div className="icon">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        //                     <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        //                 </svg>
        //             </div>
        //         </div>
        //         <p>Attend an Event</p>
        //     </a>
        //     <a href="" className="links">
        //         <div className="mt-6 icon2">
        //             <div className="icon">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        //                     <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        //                 </svg>
        //             </div>
        //         </div>
        //         <p>PUP and Sustainability Development Programs</p>
        //     </a>
        //     <a href="" className="links">
        //         <div className="icon2">
        //             <div className="icon">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        //                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        //                 </svg>
        //             </div>
        //         </div>
        //         <p>Campus Life</p>
        //     </a>
        // </div>
    )
}

export default Icons
