

function Navigation() {
  return (
    <nav
      className="flex flex-wrap items-center justify-between m-0 text-lg font-noto  text-gray-500 bg-white bg-center bg-cover backdrop-contrast-200 sm:text-xl"
      style={{
        lineHeight: "23px",
        fontWeight: 300,
        backgroundImage: "url(bg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top ",
        backgroundSize: "cover",
      }}
    >
      <div className="px-10 mx-auto col-md-12">
        <div className="">
          <ul className="flex justify-center space-x-1">
            <li>
              <a href="#">
                <img src="govph.png" className="px-4 center hover:bg-red" />
              </a>
            </li>
            <li className="pt-1">
              <a href="#" className=" font-normal center hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>Home</a>
            </li>
            <li className="pt-1 hide">
              <a href="#"></a>
              <a href="#" className=" font-normal hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>Good Governance</a>
            </li >
            <li className="pt-1 hide">
              <a href="#"></a>
              <a href="#" className="font-normal  hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>Transparency</a>
            </li>
            <li className="pt-1 hide">
              <a href="#"></a>
              <a href="#" className=" font-normal hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>International Affairs</a>
            </li>
            <li className="pt-1 hide">
              <a href="#"></a>
              <a href="#" className="font-normal  hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>Bid Notices and Invitation</a>
            </li>

            <li className="pt-1 pl-72">
              <a href="#" className=" font-normal pt-1 justify-self-end center hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>Contact Us</a>
            </li>



          </ul>
        </div>


      </div>
      {/* <div className="flex flex-row ">
        <ul className="flex justify-center space-x-1 p-lr">
          <a className="px-10 hover:bg-red hover:cursor-pointer" style={{ padding: '3px 16px' }}>
            <img src="govph.png" className="" />
          </a>
          <li className="pt-1">
            <a href="#" className="font-semibold hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>Home</a>
          </li>
          <div class="hide">
            <li className="pt-1">
              <a href="#"></a>
              <a href="#" className="font-semibold hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>Good Governance</a>
            </li >
            <li className="pt-1">
              <a href="#"></a>
              <a href="#" className="font-semibold hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>Transparency</a>
            </li>
            <li className="pt-1">
              <a href="#"></a>
              <a href="#" className="font-semibold hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>International Affairs</a>
            </li>
            <li className="pt-1">
              <a href="#"></a>
              <a href="#" className="font-semibold hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>Bid Notices and Invitation</a>
            </li>
          </div>
        </ul>
      </div> */}





      {/* <div className="col-md-12">
              <ul className="flex flex-row social-list ">
                <div>
                <li class="hover:bg-red">
                <a class="univ itl-tooltip" href="https://www.gov.ph" target="_blank" data-original-title="" title="">
                  <img src="govph.png" alt="GOV.PH" className="pr-4 pl-7 hover:bg-red" /></a>
                </li>

                </div>


                <li>
                <a class="univ itl-tooltip" href="/" data-original-title="" title="">Home</a>
                </li>



                <li>
                <a class="univ itl-tooltip hidden-xs" href="/goodgovernance/" data-original-title="" title="">Good Governance</a>
                </li>


                <li>
                  
                <a class="univ itl-tooltip hidden-xs" href="/goodgovernance/transparency" data-original-title="" title="">Transparency</a>
                </li>


                <li>
                <a class="univ itl-tooltip hidden-xs hidden-sm" href="/international/" data-original-title="" title="">International Affairs</a>
                </li>


                <li>
                <a class="univ itl-tooltip hidden-xs" href="/bidnotices/" data-original-title="" title="">Bid Notices and Invitation</a>
                </li>


                <li class="pull-right">
                <a class="univ itl-tooltip flex flex-end" href="/about/contactus" data-original-title="" title="">Contact us</a>
                </li>

              </ul>

            </div> */}


    </nav>
  );
}
export default Navigation;