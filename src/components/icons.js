
const Icons = () => {


    return (
        <div >
            <div class="flex flex-row  md:m-20  sm:gap-20 hover:text-white lg:mx-20 2xl:px-72 ">
                <div className="flex flex-row iconSpacing justify-between">
                    <a class="flex  he3 items-center flex-col hover:cursor-pointer justify-center w-24  hover:text-red text-white lg:m-6">
                        <span class="inline-flex he2 items-center  justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red hover:text-white bg-white hover:bg-red">
                            <i class="fa fa-edit  icon-medium-effect icon-effect-2 text-red hover:text-white" style={{ lineHeight: '16px', transitionDelay: '5' }}></i>
                        </span>
                        <h4 class="text-red pt-4 font-semibold ">Apply Now</h4>
                    </a>
                    <a class=" flex item-center justify-center flex-col hover:cursor-pointer hover:underline hover:text-red text-white lg:m-6">
                        <div class=" items-center flex justify-center ">
                            <span class="inline-flex he2 items-center  justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red bg-white hover:bg-red">
                                <i class="fa fa-solid fa-star text-red hover:text-white" style={{ lineHeight: '16px' }}></i>
                            </span>
                        </div>
                        <h4 class="text-red pt-4 font-semibold" style={{ fontSize: '16px' }}>Attend an Event</h4>
                    </a>
                    <a class=" flex item-center justify-center  flex-col hover:cursor-pointer justify-center hover:underline hover:text-red text-white lg:m-6">
                        <div class=" pt-5 items-center flex justify-center">
                            <span class="inline-flex he2 items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red bg-white hover:bg-red">
                                <i class="fa fa-solid fa-cubes text-red hover:text-white" style={{ lineHeight: '16px' }}></i>
                            </span>
                        </div>
                        <h4 class="text-red pt-5 text-center font-semibold">PUP and Sustainability<br></br> Development Programs</h4>
                    </a>
                    <a class="flex item-center justify-center flex-col hover:cursor-pointer justify-center hover:underline hover:text-red text-white lg:m-6">
                        <div className=" items-center flex justify-center">
                            <span class="inline-flex he2 items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red bg-white hover:bg-red">
                                <i class="fa fa-university he2 text-red hover:text-white" style={{ lineHeight: '16px' }} aria-hidden="true"></i>
                            </span>
                        </div>
                        <h4 class="text-red pt-4 font-semibold">Campus Life</h4>
                    </a>
                </div>

            </div>
        </div>





        // <div className="flex flex-row sm:flex-row md:flex-row iconResponsive  justify-between lg:mx-20 my-8 lg:pt-0 sm:pt-20 sm:gap-20 2xl:px-72 hover:text-red">
        //     <a class="flex item-center justify-center he3  flex-col hover:cursor-pointer justify-center w-24  hover:text-red text-white lg:m-6">
        //         <span class="inline-flex he items-center  justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red hover:text-white bg-white hover:bg-red">
        //             <i class="fa fa-edit he2 icon-medium-effect icon-effect-2 text-red hover:text-white" style={{ fontSize: '32px', lineHeight: '16px', transitionDelay: '5' }}></i>
        //         </span>
        //         <h4 class="text-red pt-4 font-semibold ">Apply Now</h4>
        //     </a>
        //     <a class=" flex item-center justify-center flex-col hover:cursor-pointer justify-center hover:underline hover:text-red text-white m-6">
        //         <div class="lg:pl-4">
        //             <span class="inline-flex he items-center  justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red bg-white hover:bg-red">
        //                 <i class="fa fa-solid fa-star text-red hover:text-white" style={{ fontSize: '32px', lineHeight: '16px' }}></i>
        //             </span>
        //         </div>
        //         <h4 class="text-red pt-4 font-semibold" style={{ fontSize: '16px' }}>Attend an Event</h4>
        //     </a>
        //     <a class=" flex item-center justify-center  flex-col hover:cursor-pointer justify-center hover:underline hover:text-red text-white m-6">
        //         <div class="lg:pl-11 pt-5">
        //             <span class="inline-flex he items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red bg-white hover:bg-red">
        //                 <i class="fa fa-solid fa-cubes text-red hover:text-white" style={{ fontSize: '32px', lineHeight: '16px' }}></i>
        //             </span>
        //         </div>
        //         <h4 class="text-red pt-5 text-center font-semibold">PUP and Sustainability<br></br> Development Programs</h4>
        //     </a>
        //     <a class="flex item-center justify-center flex-col hover:cursor-pointer justify-center hover:underline hover:text-red text-white m-6">
        //         <div className="lg:pl-1">
        //             <span class="inline-flex he items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-4 border-red bg-white hover:bg-red">
        //                 <i class="fa fa-university he2 text-red hover:text-white" style={{  lineHeight: '16px' }} aria-hidden="true"></i>
        //             </span>
        //         </div>
        //         <h4 class="text-red pt-4 font-semibold">Campus Life</h4>
        //     </a>
        // </div>
    )
}

export default Icons
