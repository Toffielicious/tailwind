const Icons = () => {
    return (
        <div class="flex flex-row justify-center pt-20 gap-20">
           
            <span class="inline-flex items-center justify-center h-20 w-20 rounded-full border-2 border-red  hover:text-white bg-white hover:bg-red">
                {/* <i class="fa fa-brands fa-facebook text-white" style={{ fontSize: '32px' }}></i> */}
                <i class="fa fa-edit icon-medium-effect icon-effect-2 text-red hover:text-white " style={{fontSize:'32px'}}></i>
            </span>
            <span class="inline-flex items-center justify-center h-20 w-20 rounded-full border-2 border-red bg-white hover:bg-red">
                {/* <i class="fa fa-brands fa-twitter text-white" style={{ fontSize: '32px' }}></i> */}
                <i class="fa fa-solid fa-star text-red hover:text-white" style={{fontSize:'32px'}}></i>
            </span>
            <span class="inline-flex items-center justify-center h-20 w-20 rounded-full border-2 border-red bg-white hover:bg-red">
                {/* <i class=" fa fa fa-youtube text-white" style={{ fontSize: '32px' }}></i> */}
                <i class="fa fa-solid fa-cubes text-red hover:text-white" style={{fontSize:'32px'}}></i>
            </span>
            <span class="inline-flex items-center justify-center h-20 w-20 rounded-full border-2 border-red bg-white hover:bg-red">
                {/* <i class="fa fa-brands fa-linkedin text-white" style={{ fontSize: '32px' }}></i> */}
                <i class="fa fa-university text-red hover:text-white " style={{fontSize:'32px'}} aria-hidden="true"></i>
            </span>
        </div>
    )
}

export default Icons
