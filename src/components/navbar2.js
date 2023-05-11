import Link from 'next/link'

function Nav2() {
  return (
    <nav
      className="flex flex-wrap items-center justify-between m-0 text-lg font-noto  text-gray-500 bg-white bg-center bg-cover  sm:text-xl "
      style={{ lineHeight: "23px", fontWeight: 300, backgroundImage: "url(bg.jpg)", vbackgroundRepeat: "no-repeat", backgroundPosition: "top ", backgroundSize: "cover", }}
    >
      <div className="lg:px-10 mx-auto col-md-12 ">
        <div className="">
          <ul className="flex justify-between ">
            <li>
              <a href="#">
                <img src="govph.png" className="px-4 center hover:bg-red object-cover" />
              </a>
            </li>
            <li className="pt-1">
              <Link href="/" className=" font-normal center hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer px-4 lg:px-4 py-3" >Home</Link>
            </li>
            <li className="pt-1 hide ">

              <a href="#" className=" font-normal hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer md:px-2 lg:px-4 py-3" >Good Governance</a>
            </li >
            <li className="pt-1 hide">

              <a href="#" className="font-normal  hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer md:px-2 lg:px-4 py-3" >Transparency</a>
            </li>
            <li className="pt-1 hide">

              <Link href="/inter" className=" font-normal hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer md:px-2 lg:px-4 py-3" >International Affairs</Link>
            </li>
            <li className="pt-1 hide">
              <a href="#" className="font-normal  hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer md:px-2 lg:px-4 py-3"  >Bid Notices and Invitation</a>
            </li>
          
            <li className="pt-1 xl:pl-72">
              <Link href="/contact" className=" font-normal  justify-self-end center hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer md:px-2 px-4 py-3" >Contact Us</Link>
            </li>
            
          </ul>
        </div>
      </div>

    </nav>
  );
}
export default Nav2;