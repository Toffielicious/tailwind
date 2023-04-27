const Icons = () => {
    return (
        <div class="flex flex-row justify-center m-20 pt-30 gap-10 sm:pt-20 sm:gap-20 ">
            <span class="inline-flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-2 border-red hover:text-white bg-white hover:bg-red">
                <i class="fa fa-edit icon-medium-effect icon-effect-2 text-red hover:text-white" style={{ fontSize: '16px', lineHeight: '16px' }}></i>
            </span>
            <span class="inline-flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-2 border-red bg-white hover:bg-red">
                <i class="fa fa-solid fa-star text-red hover:text-white" style={{ fontSize: '16px', lineHeight: '16px' }}></i>
            </span>
            <span class="inline-flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-2 border-red bg-white hover:bg-red">
                <i class="fa fa-solid fa-cubes text-red hover:text-white" style={{ fontSize: '16px', lineHeight: '16px' }}></i>
            </span>
            <span class="inline-flex items-center justify-center h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full border-2 border-red bg-white hover:bg-red">
                <i class="fa fa-university text-red hover:text-white" style={{ fontSize: '16px', lineHeight: '16px' }} aria-hidden="true"></i>
            </span>
        </div>

    )
}

export default Icons
