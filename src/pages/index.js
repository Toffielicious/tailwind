import Navbar from '@components/navbar2.js'
import Footer from '@components/footer.js'
import Navbar2 from '@/components/navbar'
import Footer2 from '@components/footer2.js'
import Icons from '@components/icons.js'
import React from "react";
// import Slide from '@components/slider.js'



export default function home() {

  
  return (
    <>
      <section>
        <Navbar />
        <Navbar2 />

      </section>
      <section class="bg-gray  ">

        {/* <Slide /> */}

      </section>

      <section className='' >
        <Icons />
        <hr class='line mt-0'></hr>
      </section>



      <section className=''>
        <div className='mx-60 mt-10'>

          <div class="flex lg:flex-row justify-around sm:flex-col sm:gap-2 lg:gap-0">
            <div className='' style={{ maxWidth: '50%' }}>
              <div className="" style={{ width: '400px' }}>
                <div>
                  <a className="py-4 mb-2 font-bold pl-8 m-0 text-red hover:cursor-pointer">Announcements and Advisories</a>
                  <div className='flex flex-row'>
                    <p className='pl-8 text-red '>____________________________________</p>
                    <p className='text-l'>___________________</p>
                  </div>

                </div>
                <div className="flex flex-wrap overflow-auto overflow-x-hidden content" style={{ height: "600px" }}>
                  <div className="px-8 py-4 announcements text-red">
                    <a href="#" className='hover:underline' >Administrative Applicants for Selection/Promotion: List of All Applicants (First and Second Level) April 2023</a>
                    <p className="text-blackish pt-2">Posted: April 20, 2023</p>
                  </div>
                  <div className="px-8 py-4 announcements text-red">
                    <a href="#" className='hover:underline'>Advisory on the Submission of Online Application for Graduation and Other Scheduled Activities for Year-End Graduation (Second Semester) A.Y. 2022-2023</a>
                    <p className="text-blackish pt-2">Posted: April 10, 2023</p>
                  </div>
                  <div className="px-8 py-4 announcements text-red">
                    <a href="#" className='hover:underline'>PUP ICT Office is looking for Computer Programmers (J.O.)</a>
                    <p className="text-blackish pt-2">Posted: March 02, 2023</p>
                  </div>
                  <div className="px-8 py-4 announcements text-red">
                    <a href="#" className='hover:underline'>List of Qualified Applicants for Promotion (First and Second Level Positions) Batches 1, 2, and 3</a>
                    <p className="text-blackish pt-2" >Posted: February 07, 2023</p>
                  </div>
                  <div className="px-8 py-4 announcements text-red">
                    <a href="#" className='hover:underline'>List of Eligible Applicants for Promotion (First and Second Level Positions)</a>
                    <p className="text-blackish pt-2">Posted: February 01, 2023</p>
                  </div>
                  <div className="px-8 py-4 announcements text-red">
                    <a href="#" className='hover:underline'>Advisory to All Graduates of the PUP Main Campus (Sta. Mesa, Manila)</a>
                    <p className="text-blackish pt-2">Posted: September 16, 2022</p>
                  </div>
                  <div className="px-8 py-4 announcements text-red">
                    <a href="#" className='hover:underline'>Internal Guidelines for Opt-Out and Voluntary Contribution of Students under Republic Act 10931</a>
                    <p className="text-blackish pt-2">Posted: April 04, 2022</p>
                  </div>
                </div>
              </div>
            </div>



            <div className=''>
              <div class="flex flex-row">
              <a className="py-4 mb-2 font-bold  m-0 text-red hover:cursor-pointer">Latest News from the University</a>
              <div>
                {/* <button></button>
                <button></button> */}
              </div>


              </div>
              
              <div className='flex flex-row'>
                <p className=' text-red '>____________________________________</p>
                <p className='text-l'>___________________</p>
              </div>


            </div>


            <div className='flex flex-col gap-3 justify-center '>
              <img src="//i.imgur.com/vaNWHC9.jpg" alt="" class="rounded-lg" width={210} height={124} />
              <div className="img-container">
                <img src="//i.imgur.com/T2sYWP4.jpg" alt="" class="rounded-lg" width={210} height={124} />
              </div>
              <div className="img-container">
                <img src="//i.imgur.com/jIaVBKM.jpg" alt="" class="rounded-lg" width={210} height={124} />
              </div>
              <div className="img-container">
                <img src="//i.imgur.com/EryMqbT.jpg" alt="" class="rounded-lg" width={210} height={124} />
              </div>
              <div className="img-container">
                <img src="//i.imgur.com/aqFGgGg.jpg" alt="" class="rounded-lg" width={210} height={124} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class='line mt-10'></hr>


      <section class="flex flex-col space-y-4 mx-8 items-center justify-center my-6" style={{marginBottom:'-55px'}}>
        <div className='flex flex-row m-0 '>
        <div className="flex flex-wrap justify-center mt-10  border-grey">
          <div className="flex justify-center w-3/4 h-auto">
            <div className="">
              <a class="twitter-timeline" data-width="350" data-height="820" data-theme="dark" href="https://twitter.com/ThePUPOfficial?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
          </div>
        </div>
      
        <div class="flex flex-col space-y-4 items-center justify-center m-6 pt-4">
          <iframe width="750" height="570" src="https://www.youtube.com/embed/EVp6JBwTudk?list=UU3D3_jrSi3sYmx5L5p5RAwA" title="The Observer Online: Tanglaw Fest 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/episode/6hSNhWq3gSGcSouucc8kl0?utm_source=generator" width="750" height="280" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        </div>
      </section>

      



      <section class='bg-gray'>
        <Footer />
      </section>
      <section class="bg-mb ">
        <Footer2 />
      </section>
    </>

  )
}