// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { useState } from 'react';

// const Slider = () =>{
    

 
//     const images = [
//         { src: 'https://i.imgur.com/Shm8d5a.jpg' },
//         { src: 'https://i.imgur.com/KtfenQC.jpg' },
//         { src: 'https://i.imgur.com/LysW4od.jpg' },
//         { src: 'https://i.imgur.com/h7C66lI.jpg' },
//         { src: 'https://i.imgur.com/GC0dTGx.jpg' },
//         { src: 'https://i.imgur.com/e8kj4pH.jpg' },
//         { src: 'https://i.imgur.com/vE1uxZe.jpg' },
//         { src: 'https://i.imgur.com/ROfBqoJ.jpg' },
//       ];
      
//       const [isHovered, setIsHovered] = useState(false);
//       const [slideIndex, setSlideIndex] = useState(0);

//       const arrowStyles = {
//         position: 'absolute',
//         top: '50%',
//         transform: 'translateY(-50%)',
//         zIndex: 2,
//         backgroundColor: '#555',
//         opacity: isHovered ? 0.5 : 0,
//         borderRadius: 0,
//         width: '100px',
//         height: '100px',
//         border: 'none',
//         outline: 'none',
//         cursor: 'pointer',
//         fontSize: '1.5em',
//         transition: 'opacity 0.3s ease',
//       };
//       const handlePrevClick = () => {
//         setSlideIndex((slideIndex - 1 + images.length) % images.length);
//       };
    
//       const handleNextClick = () => {
//         setSlideIndex((slideIndex + 1) % images.length);
//       };

//       return (
//         <div className='slider' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ position: 'relative' }}>
//             <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} selectedItem={slideIndex} onChange={(index) => setSlideIndex(index)} showArrows={false}>
//                 {images.map((image, index) => (
//                     <div key={index}>
//                         <img src={image.src} alt={`Image ${index}`} />
//                     </div>
//                 ))}
//             </Carousel>
//             <button onClick={handlePrevClick} style={{ ...arrowStyles, left: 0 }}>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//                 </svg>
//             </button>
//             <button onClick={handleNextClick} style={{ ...arrowStyles, right: 0 }}>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//                 </svg>
//             </button>
//         </div>
//       );
      
// }

// export default Slider
















// // import React from 'react';
// // import 'flowbite';

// // const slider = () => {

   

// //     return (
// //         <>
// //             <div id="default-carousel" class="block  slider show m-0" style={{ paddingTop: "100px", }} data-carousel="slide" data-carousel-interval="5000">

// //                 <div class="block w-full  h-56  md:h-96 " >

// //                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item >
// //                         <img src="b1.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
// //                     </div>

// //                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item>
// //                         <img src="b2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
// //                     </div>

// //                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item>
// //                         <img src="b3.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
// //                     </div>

// //                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item>
// //                         <img src="b4.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
// //                     </div>

// //                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item>
// //                         <img src="b5.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
// //                     </div>
// //                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item>
// //                         <img src="b6.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
// //                     </div>
// //                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item>
// //                         <img src="b7.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
// //                     </div>
// //                     <div class="hidden duration-500 ease-in-out carousel-item" data-carousel-item>
// //                         <img src="b8.jpg" class=" absolute block  w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
// //                     </div>
// //                 </div>

// //                 <div class="show2">

// //                     {/* <!-- Slider indicators --> */}

// //                     <div class="absolute z-30 flex space-x-3 -translate-x-1/2 left-1/2 " style={{ paddingTop: '60px' }}>
// //                         <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
// //                         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
// //                         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
// //                         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
// //                         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
// //                         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="5"></button>
// //                         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="6"></button>
// //                         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="7"></button>
// //                     </div>
// //                     {/* <!-- Slider controls --> */}
// //                     <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" style={{ paddingTop: '80px',}} data-carousel-prev>
// //                         <span class="inline-flex items-center justify-center w-8 h-8  sm:w-10 sm:h-10 bg-black/25 dark:bg-gray-800/30 group-hover:bg-black/50">
// //                             <svg aria-hidden="true" class="w-24 h-24 text-white  sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
// //                             <span class="sr-only">Previous</span>
// //                         </span>
// //                     </button>
// //                     <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" style={{ paddingTop: '80px' }} data-carousel-next>
// //                         <span class="inline-flex items-center justify-center w-8 h-8  sm:w-10 sm:h-10 bg-black/25 dark:bg-gray-800/30 group-hover:bg-black/50">
// //                             <svg aria-hidden="true" class="w-24 h-24 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
// //                             <span class="sr-only">Next</span>
// //                         </span>
// //                     </button>

// //                 </div>
// //             </div>
// //         </>

        
// //     )
// // };

// // export default slider



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