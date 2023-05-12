
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Navbar from '@components/navbar2.js'
import Footer from '@components/footer.js'
import Navbar2 from '@/components/navbar'
import Footer2 from '@components/footer2.js'
import Fab from 'src/components/FAB.js'
import Modal2 from 'src/components/modal2.js'

const International = ({ articlesData }) => {
    console.log(articlesData);

    const items = [
        { text: "International Exchange Students", },
        { text: "International Seminars/Fora", },
        { text: "International Scholarship Grants", },
        { text: "International Faculty Exchange", },
        { text: "International Organizations Affiliation", },
        { text: "International Linkages", },
    ];

    const contents = [
        { name: 'Office of International Affairs', link: './' },
        { name: 'Objective and Functions', link: 'vm.aspx' },
        { name: 'Services', link: 'services.aspx' },
        { name: 'International Linkages', link: 'linkages.aspx' },
        { name: 'Qualifications and Requirements', link: 'requirements.aspx' },
        { name: 'Frequently Asked Questions', link: 'faqs.aspx' },
        { name: 'Officials and Staff', link: 'personnel.aspx' },
        { name: 'Contact Information', link: 'contactinfo.aspx' },
    ];

    return (

        <>
            <Navbar />
            <Navbar2 />

            <div className="px-4 py-12 container-body">

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                ></link>
                <div className="flex flex-col lg:flex-row">
                    <div className="overflow-x-auto lg:w-9/12">
                        <h1 className="text-lg font-bold leading-7 text-left pb-4 text-[24px] text-red font-noto">International Affairs</h1>
                        <img className="place-self-center" src={'https://i.imgur.com/RDky3P6.jpg'} width={800} height={300}></img>
                        <p className="leading-loose text-grayer body-font mb-7">
                            The PUP Office of International Affairs is engaged in a wide variety of programs and activities aligned with
                            the vision of President Manuel M. Muhi towards establishment of PUP as a National Polytechnic University.
                        </p>
                        <p className="leading-loose text-grayer body-font mb-7">
                            Thus, the Office for International Affairs provides leadership and coordination for all University-wide
                            international activities for coherence and integration of the institution's international linkages,
                            cooperation, exchanges, programs and services:
                        </p>
                        <ul className="text-grayer list-disc list-inside">
                            {items.map((item) => (
                                <li key={item.text} className="mb-2">
                                    {item.text}
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="lg:px-4 lg:w-3/12">
                        <div className="overflow-hidden mb-50">
                            <h4 className="mt-10 text-[14px] text-left lg:mt-0 font-normal text-red pb-1 ">CONTENTS</h4>
                            <div className="absolute block w-10 h-0.5 bg-ligthgray"></div>
                            <ul className="block w-full pt-2 text-grayer ">
                                {contents.map((content, index) => (
                                    <li className="py-1 borderBot" key={index}>
                                        <p className="text-left transition  pt-2 duration-300 ease-in-out transform hover:text-red hover:translate-x-2">
                                            <a className="hover:underline " href={content.link}>
                                                {content.name}
                                            </a>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section class='bg-gray'>
                <Footer />
            </section>
            <section class="bg-mb ">
                <Footer2 />
            </section>
            <Fab />
            <Modal2 />


        </>
    )
}

export default International

