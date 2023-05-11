import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Modal = () => {

  const Logos = [
    { src: 'seal.png', width: '100', height: '100' },
    { src: 'FOI.png', width: '100', height: '100' },
    { src: 'ISO.png', width: '116', height: '100' },
  ]

  const Modals = [
    { text: 'Applicant', i: 'fa-pencil-square' },
    { text: 'Student', i: 'fa-solid fa-book' },
    { text: 'Faculty Member or Employee', i: 'fa-users' },
    { text: 'Researcher or Extensionist', i: 'fa-flask' },
    { text: 'Alumni', i: 'fa-graduation-cap' },
    { text: 'Campus Life', i: 'fa-institution' },
    { text: 'Institutional Accreditation', i: 'fa-edit' },
    { text: 'View Homepage', i: 'fa-align-justify' },
  ]


  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onEscapePress = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onEscapePress);
    return () => {
      document.removeEventListener('keydown', onEscapePress);
    };
  }, []);

  const onWindowClick = (e) => {
    const modal = document.getElementsByClassName('bg-modal')[0];
    if (e.target === modal) {
      closeModal();
    }
  };


  return (
    <>
      <button className="flex service" onClick={() => setIsModalOpen(true)}>
        <span><i className="fa fa-desktop" />Show services menu</span>
      </button>

      {isModalOpen && (
        <div className="z-10 bg-modal" onClick={onWindowClick}>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div className="modal-content">
            <div className="w-full pt-2">
              <button className="btnCancel" onClick={closeModal}>+</button>
            </div>
            <div className="flex flex-col w-full text-center">
              <h1 className="font-serif text-4xl font-semibold text-red mb-7 md:text-xl"><span>WELCOME TO THE</span><br />POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</h1>
              <p className="mt-4 text-3xl mb-7 md:text-lg md:mt-0">Please click/tap the appropriate link to help you in your navigation of our services</p>
            </div>
            <div className="flex flex-col flex-wrap content-center w-full md:flex-row">
              <div className="modal-items-container">
                <div className="flex justify-center w-full py-6 logo-container">
                  <img src="PUPLogo.png" alt="" width={200} height={200} />
                </div>
                <div className="flex justify-center w-full logos-container gap-x-1">
                  {Logos.map((logo, index) => (
                    <img key={index} src={logo.src} alt="" width={logo.width} height={logo.height} />
                  ))}
                </div>
              </div>
              <div className="modal-items-container gap-y-2 md:gap-y-1">
                {Modals.map((modals, index) => (
                  <a key={index} href="" className="modal-links-container w-full bg-red py-2.5 px-4 h-20 md:h-11 rounded-sm hover:bg-mred flex-wrap content-center hover:pl-7 flex space-x-2 text-white">
                    <p className="text-4xl text-white md:text-lg font-base"><i className={`mr-3 fa ${modals.i}`}></i>{modals.text}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal;


