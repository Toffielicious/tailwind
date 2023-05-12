import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

const Slider = () =>{  
     
      const [slide, setSlide] = useState(0);

      const slides = [
        { src:'b1.jpg', },
        { src:'b2.jpg' },
        { src:'b3.jpg' },
        { src:'b4.jpg' },
        { src:'b5.jpg' },
        { src:'b6.jpg' },
        { src:'b7.jpg' },
        { src:'b8.jpg' },
      ]

      const Prev = () => {
        setSlide((slide - 1 + slides.length) % slides.length);
      };
    
      const Next = () => {
        setSlide((slide + 1) % slides.length);
      };

      const [hovered, setHovered] = useState(false);

      return (
        <div className='show' style={{ position: '' }} onMouseEnter={() => setHovered(true)}  onMouseLeave={() => setHovered(false)}>
        <Carousel showIndicators={hovered} className='' interval={5000} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay selectedItem={slide} onChange={(index) => setSlide(index)} showArrows={false}>
            
            <img src="b1.jpg" alt="Image 1" />
            <img src="b2.jpg" alt="Image 1" />
            <img src="b3.jpg" alt="Image 1" />
            <img src="b4.jpg" alt="Image 1" />
            <img src="b5.jpg" alt="Image 1" />
            <img src="b6.jpg" alt="Image 1" />
            <img src="b7.jpg" alt="Image 1" />
            <img src="b8.jpg" alt="Image 1" />
            
         </Carousel>
            <div className='show2'>
                <button class="btn bg-black/25 hover:bg-black/50 hover:cursor-pointer absolute top-1/2 left-0 w-100 h-100" onClick={Prev} style={{width:'100px', height:'100px'}}>
                    <i class="fa fa-sharp fa-solid fa-chevron-left pr-2 text-white" style={{fontSize:'36px'}}></i>
                </button>
                <button class="btn bg-black/25 hover:bg-black/50  hover:bg-black/50 absolute top-1/2 right-0 w-100 h-100" onClick={Next} style={{width:'100px', height:'100px'}}>
                <   i class="fa fa-sharp fa-solid fa-chevron-right pl-2 text-white " style={{fontSize:'36px'}}></i>
                </button>
            </div>
        </div>

      );
      
}

export default Slider
















// import React from 'react';
// import 'flowbite';

// const slider = () => {

   

//     return (
//         <>
//             <div id="default-carousel" class="block  slider show m-0" style={{ paddingTop: "100px", }} data-carousel="slide" data-carousel-interval="5000">

//                 <div class="block w-full  h-56  md:h-96 " >

//                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item >
//                         <img src="b1.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                     </div>

//                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item>
//                         <img src="b2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                     </div>

//                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item>
//                         <img src="b3.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                     </div>

//                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item>
//                         <img src="b4.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                     </div>

//                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item>
//                         <img src="b5.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                     </div>
//                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item>
//                         <img src="b6.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                     </div>
//                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item>
//                         <img src="b7.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                     </div>
//                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item>
//                         <img src="b8.jpg" class=" absolute block  w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                     </div>
//                 </div>

//                 <div class="show2">

//                     {/* <!-- Slider indicators --> */}

//                     <div class="absolute z-30 flex space-x-3 -translate-x-1/2 left-1/2 " style={{ paddingTop: '60px' }}>
//                         <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//                         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//                         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//                         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//                         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//                         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="5"></button>
//                         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="6"></button>
//                         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="7"></button>
//                     </div>
//                     {/* <!-- Slider controls --> */}
//                     <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" style={{ paddingTop: '80px',}} data-carousel-prev>
//                         <span class="inline-flex items-center justify-center w-8 h-8  sm:w-10 sm:h-10 bg-black/25 dark:bg-gray-800/30 group-hover:bg-black/50">
//                             <svg aria-hidden="true" class="w-24 h-24 text-white  sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
//                             <span class="sr-only">Previous</span>
//                         </span>
//                     </button>
//                     <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" style={{ paddingTop: '80px' }} data-carousel-next>
//                         <span class="inline-flex items-center justify-center w-8 h-8  sm:w-10 sm:h-10 bg-black/25 dark:bg-gray-800/30 group-hover:bg-black/50">
//                             <svg aria-hidden="true" class="w-24 h-24 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
//                             <span class="sr-only">Next</span>
//                         </span>
//                     </button>

//                 </div>
//             </div>
//         </>

        
//     )
// };

// export default slider



// // import { Carousel } from "react-responsive-carousel";
// // import "react-responsive-carousel/lib/styles/carousel.min.css";

// // const ImageSlider = () => {
// //   return (
// //     <Carousel showThumbs={false}>
// //       <div>
// //         <img src="b1.jpg" alt="Image 1" />
// //       </div>
// //       <div>
// //         <img src="b2.jpg" alt="Image 2" />
// //       </div>
// //       <div>
// //         <img src="b3.jpg" alt="Image 3" />
// //       </div>
// //       <div>
// //         <img src="b4.jpg" alt="Image 1" />
// //       </div>
// //       <div>
// //         <img src="b5.jpg" alt="Image 2" />
// //       </div>
// //       <div>
// //         <img src="b6.jpg" alt="Image 3" />
// //       </div>
// //       <div>
// //         <img src="b7.jpg" alt="Image 3" />
// //       </div>
// //       <div>
// //         <img src="b8.jpg" alt="Image 3" />
// //       </div>
// //     </Carousel>
// //   );
// // };

// // export default ImageSlider;