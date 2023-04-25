const Footer = () => {
    return (
        <>
        <div className="flex flex-row justify-center">
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
            <div className="flex flex-col p-10">
                <p className="text-sm font-bold text-red uppercase pb-4">KEEP IN TOUCH</p>
                <div>
                <i class="fa fa-facebook"></i>
                </div>
                <p className="text-sm font-bold text-red uppercase pb-4 pt-5">CONTACT US</p>
                <p>Phone: (+63 2) 5335-1PUP (5335-1787) or 5335-1777</p>
                <p>Email: inquire@pup.edu.ph</p>
                <p className="text-sm font-bold text-red uppercase pb-4 pt-5">PUPWEBSITE 10</p>
                <p>Terms of Use | Privacy Statement | About PUPWebSite</p>
            </div>

            
        </div>
        <section /> 
        <p class="flex justify-center">© 1998-2021 POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</p>
        </>
    )
}

export default Footer
