import Navbar from '@components/navbar2.js'
import Footer from '@components/footer.js'
import Navbar2 from '@/components/navbar'
import Footer2 from '@components/footer2.js'
import Icons from '@components/icons.js'
import React from "react";
import Slide from '@components/slider.js'
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Fab from 'src/components/FAB.js'
import Modal from '@/components/modal'



export default function Home() {


  const [slideIndex, setSlideIndex] = useState(0);

  const Prev = () => {
    setSlideIndex((slideIndex - 1 + midSlider.length) % midSlider.length);
  };

  const Next = () => {
    setSlideIndex((slideIndex + 1) % midSlider.length);
  };


  const midSlider = [
    {
      src: 'https://i.ibb.co/BV3VPxr/2023-04-26-phivolcs-commits-to-training-pup-on-redas.jpg',
      text: 'PHIVOLCS commits to training PUP on REDAS',
      date: 'April 26, 2023'
    },
    {
      src: 'https://i.ibb.co/VxB17QQ/2023-04-26-earth-day-2023-celebrated-through-the-arts-1.jpg',
      text: 'Earth Day 2023 celebrated through the arts',
      date: 'April 26, 2023'
    },
    {
      src: 'https://www.pup.edu.ph/resources/images/fillers/3.jpg',
      text: 'DBM Sec. Pangandaman and DepEd Usec Jumamil-Mercado receives Tanglaw ng Bayan Award',
      date: 'April 25, 2023'
    },
    {
      src: 'https://www.pup.edu.ph/resources/images/fillers/4.jpg',
      text: '#GetThatBar2022: PUP Law retains top performance',
      date: 'April 25, 2023'
    },
    {
      src: 'https://www.pup.edu.ph/resources/images/fillers/5.jpg',
      text: 'CSSD works with various stakeholders for history and cultural heritage promotion',
      date: 'April 25, 2023'
    },
    {
      src: 'https://www.pup.edu.ph/resources/images/fillers/6.jpg',
      text: 'Philhealth employees nationwide take Civil Service Review with ICPD',
      date: 'April 20, 2023'
    },
    {
      src: 'https://www.pup.edu.ph/resources/images/fillers/7.jpg',
      text: 'PUP partners with 350 Pilipinas on "Climate Deals',
      date: 'April 20, 2023'
    },
    {
      src: 'https://i.ibb.co/84sW6Fy/2023-04-13-cssd-officially-becomes-an-associate-member-of-the-pssc.jpg',
      text: 'CSSD officially becomes an associate member of the PSSC',
      date: 'April 12, 2023'
    },
    {
      src: 'https://i.ibb.co/84sW6Fy/2023-04-13-cssd-officially-becomes-an-associate-member-of-the-pssc.jpg',
      text: "Sen. Risa graces EMO's F2F gender sensitivity training",
      date: 'April 04, 2023'
    },
    {
      src: 'https://i.ibb.co/CWK75gC/2023-04-03-cssd-formally-partners-with-abo-akademi-university.jpg',
      text: 'CSSD formally partners with Abo Akademi University',
      date: 'April 03, 2023'
    },
  ]

  return (
    <>
      <section>
        <Modal class="" />
        <Navbar />
        <Navbar2 />

      </section>

      <Slide />
      <section class="bg-gray ">

      </section>

      <section className='' >
        <Icons />
        <hr class='line mt-10'></hr>
      </section>

      <section className=''>
        <div className='2xl:mx-60 mt-10 resize xl:gap-2 xl:flex-row lg:flex-row md:flex-col'>
          <div class="flex lg:flex-row justify-around sm:flex-col sm:gap-2 lg:gap-0 updatesSec">
            <div className='wid30 md:flex-col lg:flex-col' >
              <div className="sliderMargin" >
                <div className=''>
                  <a className="py-4 mb-2 font-bold   m-0 text-red hover:cursor-pointer">Announcements and Advisories</a>
                  <div className='flex flex-row'>
                    <p className=' text-red '>____________________________________</p>
                    <p className='text-l hideLine'>___________________</p>
                  </div>
                </div>
                <div className="flex flex-wrap overflow-auto" style={{ height: "600px" }}>
                  <div className=" py-4 text-red">
                    <a href="#" className='hover:underline ' >Administrative Applicants for Selection/Promotion: List of All Applicants (First and Second Level) April 2023</a>
                    <p className="text-blackish pt-2">Posted: April 20, 2023</p>
                  </div>
                  <div className=" py-4  text-red">
                    <a href="#" className='hover:underline'>Advisory on the Submission of Online Application for Graduation and Other Scheduled Activities for Year-End Graduation (Second Semester) A.Y. 2022-2023</a>
                    <p className="text-blackish pt-2">Posted: April 10, 2023</p>
                  </div>
                  <div className=" py-4 text-red">
                    <a href="#" className='hover:underline'>PUP ICT Office is looking for Computer Programmers (J.O.)</a>
                    <p className="text-blackish pt-2">Posted: March 02, 2023</p>
                  </div>
                  <div className="py-4 text-red">
                    <a href="#" className='hover:underline'>List of Qualified Applicants for Promotion (First and Second Level Positions) Batches 1, 2, and 3</a>
                    <p className="text-blackish pt-2" >Posted: February 07, 2023</p>
                  </div>
                  <div className=" py-4 text-red">
                    <a href="#" className='hover:underline'>List of Eligible Applicants for Promotion (First and Second Level Positions)</a>
                    <p className="text-blackish pt-2">Posted: February 01, 2023</p>
                  </div>
                  <div className=" py-4 text-red">
                    <a href="#" className='hover:underline'>Advisory to All Graduates of the PUP Main Campus (Sta. Mesa, Manila)</a>
                    <p className="text-blackish pt-2">Posted: September 16, 2022</p>
                  </div>
                  <div className=" py-4 text-red">
                    <a href="#" className='hover:underline'>Internal Guidelines for Opt-Out and Voluntary Contribution of Students under Republic Act 10931</a>
                    <p className="text-blackish pt-2">Posted: April 04, 2022</p>
                  </div>
                </div>
              </div>
            </div>


            <div className=" mw ">
              <div className="justify-between flex sliderMargin">
                <h1 className="mb-2 font-bold text-red">Latest News from the University</h1>
                
                <div className="">
                  <div className='flex gap-1'>
                  <button onClick={Prev} className="border sliderBtn px-1.5 text-grayest py-1.5 bc rounded-sm items-center hover:bg-red hover:text-white">
                  <i class="fa fa-sharp fa-solid fa-chevron-left px-1  text-grayest" style={{ fontSize: '10px' }}></i>
                  </button>
                  <button onClick={Next} className="border sliderBtn px-1.5 py-1.5 text-grayest rounded-sm items-center hover:bg-red hover:text-white">
                  <i class="fa fa-sharp fa-solid fa-chevron-right px-1 text-grayest" style={{ fontSize: '10px' }}></i>
                  </button>
                  </div>
                </div>
              </div>
              <div className='flex flex-row pb-4 sliderMargin'>
                <div class=" flex flex-row">
                  <p className=' flex text-red justify-center items-center'>____________________________________</p>
                  <p className='text-l hideLine'>________________________</p>
                </div>
              </div>
              <div className=" sliderMargin">
                <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} selectedItem={slideIndex} onChange={(index) => setSlideIndex(index)} showIndicators={false} showArrows={false}>
                  {midSlider.map((midslide, index) => (
                    <div key="" className="flex flex-col flex-wrap ">
                      <div key={index}>
                        <img src={midslide.src} alt={`Image ${index}`} className="object-cover " style={{height: '480px'}} />
                      </div>
                      <div className="flex flex-col pt-5">
                        <a href="" className="h-auto font-semibold text-left text-red hover:underline">{midslide.text}</a>
                        <p className="text-left">{midslide.date}</p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>



            <div className=''>
              <div className='picsMargin flex flex-col gap-3 justify-center  '>
                <img src="//i.imgur.com/vaNWHC9.jpg" alt="" class="rounded-lg pics hover:cursor-pointer" width={210} height={124} />
                <div className="img-container">
                  <img src="//i.imgur.com/T2sYWP4.jpg" alt="" class="rounded-lg pics hover:cursor-pointer" width={210} height={124} />
                </div>
                <div className="img-container">
                  <img src="//i.imgur.com/jIaVBKM.jpg" alt="" class="rounded-lg pics hover:cursor-pointer" width={210} height={124} />
                </div>
                <div className="img-container">
                  <img src="//i.imgur.com/EryMqbT.jpg" alt="" class="rounded-lg pics hover:cursor-pointer" width={210} height={124} />
                </div>
                <div className="img-container">
                  <img src="//i.imgur.com/aqFGgGg.jpg" alt="" class="rounded-lg pics hover:cursor-pointer" width={210} height={124} />
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      <hr class='line mt-10'></hr>


      <section class="flex flex-col space-y-4 embed-links sm:w-full items-center justify-center my-6 " style={{ marginBottom: '-55px' }}>

        <div className='flex flex-row embedResponsive items-center justify-center sm:flex-col md:flex-col lg:flex-row '>
          <div className="flex flex-wrap justify-center twitty lg:mb-6 border-grey">
            <div className="flex justify-center w-full h-auto ">
              <div className="twit">
                <a class="twitter-timeline" data-height="820" data-theme="dark" href="https://twitter.com/ThePUPOfficial?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </div>
            </div>
          </div>

          <div class="flex flex-col w-full xl:mb-6 xl:mt-6 xl:m-6 pt-6 ">
            <div className='youtube-spotMargin flex flex-col space-y-4 items-center justify-center '>
              <iframe class="youtube" data-height="350" src="https://www.youtube.com/embed/EVp6JBwTudk?list=UU3D3_jrSi3sYmx5L5p5RAwA" title="The Observer Online: Tanglaw Fest 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe class="spotify md:mb-5" data-height="350" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/episode/6hSNhWq3gSGcSouucc8kl0?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </div>

      </section>

      <section class='bg-gray'>
        <Footer />
      </section>
      <section class="bg-mb ">
        <Footer2 />
      </section>

      <Fab />

    </>

  )
}