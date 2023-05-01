const Footer = () => {
    return (
        <div class=" ">
            <div className=" footerResponsive flex lg:flex-row lg:justify-center sm:flex-col">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div>
                    <div class="flex flex-col p-10 m-0">
                        <p className="text-sm font-bold text-red uppercase pb-4">ONLINE SERVICES</p>
                        <div class="flex flex-col gap-2">
                            <a href="" className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer ">PUP WebMail</a>
                            <a href="" className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer">PUP iApply</a>
                            <a href="" className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer">SIS for Students</a>
                            <a href="" className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer">SIS for faculty</a>

                            <p className="text-sm font-bold text-red uppercase pb-2 pt-8">DOWNLOADS</p>
                            <div class="flex flex-col gap-2">
                                <a href="" className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer">For Students</a>
                                <a href="" className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer">For Faculty and Employees</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col p-10">
                    <p className="text-sm font-bold text-red uppercase pb-4">QUICK LINKS</p>
                    <div class="flex flex-col gap-2">
                        <a href="" className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer ">About PUP</a>
                        <a href="" className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer">Admission Information</a>
                        <a href="" className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer">Branchesa and Campuses</a>
                        <a href="" className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer">Academic Programs</a>
                        <a href="" className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer">Transparency Seal</a>
                        <a href="" className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer">Bid Notices and Invitation</a>
                        <a href="" className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer">International Affairs</a>
                        <a href="" className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer">Jobs for PUPians</a>
                    </div>
                </div>
                <div className="flex flex-col p-10 gap-3">
                    <p className="text-sm font-bold text-red uppercase pb-4">KEEP IN TOUCH</p>
                    <div class="flex flex-row gap-4 ">
                        <span class="inline-flex items-center hover:cursor-pointer justify-center h-12 w-12 rounded-full bg-red hover:bg-fb">
                            <i class="fa fa-brands fa-facebook text-white" style={{fontSize:'32px'}}></i>
                        </span>
                        <span class="inline-flex items-center hover:cursor-pointer justify-center h-12 w-12 rounded-full bg-red hover:bg-tt">
                            <i class="fa fa-brands fa-twitter text-white" style={{fontSize:'32px'}}></i>
                        </span>
                        <span class="inline-flex items-center hover:cursor-pointer justify-center h-12 w-12 rounded-full bg-red hover:bg-yt">
                            <i class="fa fa-youtube-play text-white" style={{fontSize:'32px'}}></i>
                            
                        </span>
                        <span class="inline-flex items-center hover:cursor-pointer justify-center h-12 w-12 rounded-full bg-red hover:bg-li">
                            <i class="fa fa-brands fa-linkedin text-white" style={{fontSize:'32px'}}></i>
                        </span>
                        <span class="inline-flex items-center hover:cursor-pointer justify-center h-12 w-12 rounded-full bg-red hover:bg-wf">
                            <i class="fa fa-solid fa-rss text-white" style={{fontSize:'32px'}}></i>
                        </span>
                        <span class="inline-flex items-center hover:cursor-pointer justify-center h-12 w-12 rounded-full bg-red hover:bg-sf">
                            <i class="fa fa-brands fa-spotify text-white" style={{fontSize:'32px'}}></i>
                        </span>
                    </div>
                    <p className="text-sm font-bold text-red uppercase pb-0 pt-5">CONTACT US</p>
                    <div className="flex gap-2">
                        <p className="text-graytext text-textsize">Phone:</p>
                        <p class="font-medium text-blackish">(+63 2) 5335-1PUP (5335-1787) or 5335-1777</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-graytext text-textsize">Email:</p>
                        <p class="font-medium text-blackish">inquire@pup.edu.ph</p>

                    </div>

                    <p className="text-sm font-bold text-red uppercase  pt-5">PUPWEBSITE 10</p>
                    <div className="flex flex-row gap-2">
                    <a className="text-graytext text-textsize hover:underline hover:cursor-pointer">Terms of Use </a>
                    <p className="text-graytext text-textsize hover:underline ">|</p>
                    <a className="text-graytext text-textsize hover:underline hover:cursor-pointer">Privacy Statement</a>
                    <p className="text-graytext text-textsize hover:underline ">|</p>
                    <a className="text-graytext text-textsize hover:underline cursor-pointer">About PUPWebSite</a>
                    </div>
                    
                </div>


            </div>
            <section />
            <p class="flex justify-center text-xs text-blackish pb-12 font-normal">© 1998-2021 POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</p>
        </div>
    )
}

export default Footer