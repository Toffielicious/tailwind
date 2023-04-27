import Navbar from '@components/navbar2.js'
import Footer from '@components/footer.js'
import Navbar2 from '@/components/navbar'
import Footer2 from '@components/footer2.js'
import Icons from '@components/icons.js'
import React from "react";
import Slider from "react-slick";



export default function home() {
  return (
    <>
      <section>
        <Navbar />
        <Navbar2 />

      </section>

      <section class="bg-gray">
        <Icons />
      </section>

      <section className='sm:flex-col'>
        <div className="flex flex-wrap content-center  sm:flex-col justify-center h-auto mt-14">
          <div className="flex flex-wrap w-3/4 h-auto center">
            <div className="w-2/5 content-container">
              <div className="title">
                <h1 className="py-4 mb-2 font-bold px-9  text-red underline">Announcements and Advisories</h1>
              </div>
              <div className="flex flex-wrap overflow-auto overflow-x-hidden content" style={{ height: "600px" }}>
                <div className="px-8 py-4 announcements text-red">
                  <a href="#" className='hover:underline' >Administrative Applicants for Selection/Promotion: List of All Applicants (First and Second Level) April 2023</a>
                  <p className="text-blackish">Posted: April 20, 2023</p>
                </div>
                <div className="px-8 py-4 announcements text-red">
                  <a href="#" className='hover:underline'>Advisory on the Submission of Online Application for Graduation and Other Scheduled Activities for Year-End Graduation (Second Semester) A.Y. 2022-2023</a>
                  <p className="text-blackish">Posted: April 10, 2023</p>
                </div>
                <div className="px-8 py-4 announcements text-red">
                  <a href="#" className='hover:underline'>PUP ICT Office is looking for Computer Programmers (J.O.)</a>
                  <p className="text-blackish">Posted: March 02, 2023</p>
                </div>
                <div className="px-8 py-4 announcements text-red">
                  <a href="#" className='hover:underline'>List of Qualified Applicants for Promotion (First and Second Level Positions) Batches 1, 2, and 3</a>
                  <p className="text-blackish" >Posted: February 07, 2023</p>
                </div>
                <div className="px-8 py-4 announcements text-red">
                  <a href="#" className='hover:underline'>List of Eligible Applicants for Promotion (First and Second Level Positions)</a>
                  <p className="text-blackish">Posted: February 01, 2023</p>
                </div>
                <div className="px-8 py-4 announcements text-red">
                  <a href="#" className='hover:underline'>Advisory to All Graduates of the PUP Main Campus (Sta. Mesa, Manila)</a>
                  <p className="text-blackish">Posted: September 16, 2022</p>
                </div>
                <div className="px-8 py-4 announcements text-red">
                  <a href="#" className='hover:underline'>Internal Guidelines for Opt-Out and Voluntary Contribution of Students under Republic Act 10931</a>
                  <p className="text-blackish">Posted: April 04, 2022</p>
                </div>
              </div>

            </div>
            <div className="w-2/5 bg-red-500 md:flex-col content-container">
            </div>
            <div className="flex flex-col flex-wrap  items-center justify-center w-1/5 content-container gap-2 ">
              <div className="img-container ">
                <img src="//i.imgur.com/vaNWHC9.jpg" alt="" class="rounded-lg" width={200} height={150} />
              </div>
              <div className="img-container">
                <img src="//i.imgur.com/T2sYWP4.jpg" alt="" class="rounded-lg" width={200} height={150} />
              </div>
              <div className="img-container">
                <img src="//i.imgur.com/jIaVBKM.jpg" alt="" class="rounded-lg" width={200} height={150} />
              </div>
              <div className="img-container">
                <img src="//i.imgur.com/EryMqbT.jpg" alt="" class="rounded-lg" width={200} height={150} />
              </div>
              <div className="img-container">
                <img src="//i.imgur.com/aqFGgGg.jpg" alt="" class="rounded-lg" width={200} height={150} />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="flex flex-col space-y-4 items-center justify-center m-6 md:flex-row">
        <div class="flex flex-col md:flex-row">
          <div class="flex flex-wrap justify-center mt-10 border-b-[1px] border-grey w-full md:w-1/2">
            <div class="mr-5">
              <a class="twitter-timeline" data-width="350" data-height="700" data-theme="dark" href="https://twitter.com/ThePUPOfficial?ref_src=twsrc%5Etfw"></a>
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
          </div>

          <div class="flex flex-col space-y-4 items-center justify-center m-6  md:w-1/2">
            <iframe class="w-full sm:w-96 md:w-750" height="422" src="https://www.youtube.com/embed/EVp6JBwTudk?list=UU3D3_jrSi3sYmx5L5p5RAwA" title="The Observer Online: Tanglaw Fest 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe class="w-full sm:w-96 md:w-750 lg:w-750" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/episode/6hSNhWq3gSGcSouucc8kl0?utm_source=generator" height="280" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
      </section>



      <section class='bg-gray'>
        <Footer />
      </section>
      <section class="bg-black ">
        <Footer2 />
      </section>
    </>

  )
}