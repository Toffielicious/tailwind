import Navbar from '@components/navbar2.js'
import Footer from '@components/footer.js'
import Navbar2 from '@/components/navbar'
import Footer2 from '@components/footer2.js'
import Fab from 'src/components/FAB.js'
import Modal from 'src/components/modal.js'


export default function contact() {

    const textContent = [
        {
            text: "When you contact the University through this Website, your submission is reviewed and then routed to the office/department concerned that can best attend to your needs. Because of the volume of messages this Web site receives we can't guarantee that you will receive a personal response, but rest assured that your submission was received, reviewed, and forwarded to the concerned department.",
            classes: 'leading-loose text-gray-600 body-font mb-7',
        },
        {
            text: 'We are committed in listening to you and improving our services based upon your wishes. Your suggestion(s) will be reviewed by the department that implements those changes.',
            classes: 'leading-loose text-gray-600 body-font mb-7',
        },
        {
            text: 'Although we are unable to reply individually to each message we receive, we appreciate your thoughts and opinions.',
            classes: 'leading-loose text-gray-600 body-font mb-7',
        },
    ]

    const contactData = [

        {
            title: 'For PUP iApply or online test/exam registration concerns',
            email: 'iapply@pup.edu.ph',
            classes: 'w-96  p-1 ',
        },
        {
            title: 'For SIS (Students and Faculty Module) concerns',
            email: 'sisconcerns@pup.edu.ph',
            classes: ' w-96  p-1',
        },
        {
            title: 'Student Records (Transcript of Records, Diploma, Certification)',
            email: 'registrar@pup.edu.ph',
            classes: ' w-96  p-1',
        },
        {
            title: 'Admission inquiries',
            email: 'admission.main@pup.edu.ph',
            classes: 'w-96  p-1',
        },
        {
            title: 'Open University',
            email: 'ous@pup.edu.ph',
            classes: ' w-96  p-1',
        },
        {
            title: 'If you are experiencing technical problems with the OU eLearning Portal',
            email: 'emabini.secretariat@pup.edu.ph',
            classes: ' w-96  p-1',
        },
    ]

    const studentRecords = [
        {
            details: [
                'Polytechnic University of the Philippines',
                'Office of the University Registrar',
                'Ground Floor South Wing, Main Building',
                'A. Mabini Campus, Anonas Street, Sta. Mesa',
                'Manila, Philippines 1016',
                '(632) 5335-1787 or 5335-1777 local 285',
            ],
        },
    ]

    const contacts = [
        {
            address: [
                'Polytechnic University of the Philippines',
                'Admission Services',
                'Ground Floor East Wing, Main Building',
                'A. Mabini Campus, Anonas Street, Sta. Mesa',
                'Manila, Philippines 1016',
            ],
            phone: [
                '(632) 5335-1798 or (632) 5335 1799',
                '(632) 5335 1787 or (632) 5335 1777 local 287 or 322'],
        },
    ]

    const branches = [
        {
            name: [
                'Polytechnic University of the Philippines',
                'Office of the Vice President for Branches and Campuses',
            ],
            address: [
                'Second Floor South Wing Executive Offices, Main Building',
                'A. Mabini Campus, Anonas Street, Sta. Mesa',
                'Manila, Philippines 1016',
            ],
            phone: ['(632) 5310-0418', '(632) 5335-1787 or 5335-1777 local 205'],
        },
    ]

    const contents = [
        { title: 'University Profile', href: './' },
        { title: 'Vision and Mission', href: 'vm.aspx' },
        { title: 'History', href: 'history.aspx' },
        { title: 'Logo and Symbols', href: 'logosymbols.aspx' },
        { title: 'Hymn', href: 'hymn.aspx' },
        { title: 'Annual Reports', href: 'annualreports.aspx' },
        { title: 'Awards and Recognitions', href: 'recognitions.aspx' },
        { title: 'Contact Information', href: 'contactinformation.aspx' },
        { title: 'Maps', href: 'maps.aspx' },
        { title: 'Board of Regents', href: 'board.aspx' },
        { title: 'Executive Officials', href: 'executive.aspx' },
        { title: 'Organization Structure', href: 'structure.aspx' },
        { title: 'Institutional Development Plan', href: 'developmentplan.aspx' },
        { title: 'Quality Policy Statement', href: 'qps.aspx' },
        { title: 'University Code', href: 'code.aspx' },
        { title: 'University Calendar', href: 'calendar.aspx' },
    ];
    return (
        <>
            <Navbar />
            <Navbar2 />
            <Modal />

            <div className="px-4 py-12 container-body">
                <div className="flex flex-col lg:flex-row">
                    <div className="overflow-x-auto lg:w-9/12">
                        <h1 className=" font-semibold leading-7 text-red text-left pb-5 mt-0 text-[30px]">Contact us</h1>
                        {textContent.map((content, index) => (
                            <p key={index} className="leading-loose body-font mb-7 text-grayer" style={{ fontSize: '17px' }}>
                                {content.text}
                            </p>
                        ))}
                        <h2 className="text-base font-semibold leading-7 text-red text-left" style={{ fontSize: '26px' }}>E-mail</h2>
                        <h3 className="my-5 text-sm text-left font-semibold text-red" style={{ fontSize: '20px' }}>For general concerns</h3>
                        <p className="mb-7">
                            <span className=" text-grayest contact-span " style={{ fontSize: '38px' }}>inquire@pup.edu.ph</span>
                        </p>

                        <table className="relative mb-4 border border-collapse table-fixed">
                            <thead className="" style={{ backgroundColor: '#ececec' }}>
                                <tr>
                                    <th className="p-1 text-lg font-normal text-gray border "> <p className='text-red'>Specific Concerns</p></th>
                                    <th className="p-1 text-lg font-normal text-gray border "><p className='text-red'>E-mail</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                {contactData.map((data, index) => (
                                    <tr key={index}>
                                        <td className={`border text-gray ${data.classes}`}><p className='text-grayer hover:text-red' style={{ fontSize: '14px' }}>{data.title}</p></td>
                                        <td className={`w-44 border p-1 text-right text-gray`}><p className='text-grayer hover:text-red' style={{ fontSize: '14px' }}>{data.email}</p></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h2 className="text-base font-bold leading-7 text-left text-red font-semibold" style={{ fontSize: '24px' }}>Postal Mail and Telephone</h2>
                        <h3 className="mt-4 text-sm text-left text-red font-semibold" style={{ fontSize: '20px' }}>
                            For inquiries regarding student records (transcript, diploma, certification):
                        </h3>
                        <blockquote>
                            {studentRecords.map((contact, index) => (
                                <div key={index} >

                                    {contact.details.map((detail, index) =>
                                        detail === 'Office of the University Registrar' ? (

                                            <strong className="text-grayer font-semibold py-2 pl-4 blockquote-p" style={{ fontSize: '19px' }} key={detail}>
                                                {detail}
                                            </strong>
                                        ) : (

                                            <p key={index} className="text-grayer py-2 pl-4 blockquote-p" style={{ fontSize: '19px' }}>
                                                {detail}
                                                <br />
                                            </p>
                                        )
                                    )}
                                </div>
                            ))}
                        </blockquote>
                        <h3 className="mt-0 text-sm text-left text-red font-semibold" style={{ fontSize: '20px' }}>For admission inquiries:</h3>
                        <blockquote>
                            {contacts.map((records, index) => (
                                <div key={index}>
                                    {records.address.map((line, index) =>
                                        line === 'Admission Services' ? (
                                            <strong className=" pl-4 text-grayer font-semibold blockquote-p py-2" style={{ fontSize: '19px' }} key={line}>
                                                {line}
                                            </strong>
                                        ) : (
                                            <p key={index} className="text-grayer pl-4 blockquote-p py-2" style={{ fontSize: '19px' }}>
                                                {line}
                                            </p>
                                        )
                                    )}
                                    <div>
                                        {records.phone.map((number, index) => (
                                            <p key={index} className=" text-grayer pl-4 blockquote-p py-2" style={{ fontSize: '19px' }}>
                                                {number}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </blockquote>
                        <h3 className="mt-0 text-sm text-left text-red font-semibold" style={{ fontSize: '20px' }}>For inquiries regarding the PUP Branches and Campuses:</h3>
                        <blockquote>
                            {branches.map((branch, index) => (
                                <div key={index}>
                                    {branch.name.map((title, index) =>
                                        title === 'Office of the Vice President for Branches and Campuses' ? (
                                            <strong className="text-grayer font-semibold py-2 pl-4 blockquote-p" style={{ fontSize: '19px' }} key={title}>
                                                {title}
                                            </strong>
                                        ) : (
                                            <p key={index} className="text-grayer py-2 pl-4 blockquote-p" style={{ fontSize: '19px' }} >
                                                {title}
                                            </p>
                                        )
                                    )}
                                    {branch.address.map((line, index) => (
                                        <p key={index} className="text-grayer py-2 pl-4 blockquote-p" style={{ fontSize: '19px' }} >
                                            {line}
                                        </p>
                                    ))}
                                    {branch.phone.map((number, index) => (
                                        <p key={index} className="text-grayer py-2 pl-4 blockquote-p" style={{ fontSize: '19px' }} >
                                            {number}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </blockquote>
                        <h3 className="mt-0 text-sm text-left text-red font-semibold" style={{ fontSize: '20px' }}>For PUP Open University inquiries:</h3>
                        <blockquote>
                            <p className='text-grayer py-2 pl-4' style={{ fontSize: '19px' }} >Polytechnic University of the Philippines</p>
                            <p className='text-grayer py-2 pl-4 font-semibold' style={{ fontSize: '19px' }} >Open University System</p>
                            <p className='text-grayer py-2 pl-4' style={{ fontSize: '19px' }} >Office of the Executive Director</p>
                            <p className='text-grayer py-2 pl-4' style={{ fontSize: '19px' }} >Fourth Floor Ninoy Aquino Library and Learning Resources Center</p>
                            <p className='text-grayer py-2 pl-4' style={{ fontSize: '19px' }} >A. Mabini Campus, Anonas Street, Sta. Mesa</p>
                            <p className='text-grayer py-2 pl-4' style={{ fontSize: '19px' }} >Manila, Philippines 1016</p>
                            <p className='text-grayer py-2 pl-4' style={{ fontSize: '19px' }} >(632) 8713-1505</p>
                            <p className='text-grayer py-2 pl-4' style={{ fontSize: '19px' }} >(632) 5335-1787 or 5335-1777 local 251</p>
                        </blockquote>

                        <p className="text-grayer pt-4 body-font">
                            <strong>Telephone</strong>
                        </p>
                        <a className="mt-1 text-red hover:underline body-font" href="contactinformation.aspx">
                            <p className='mb-10'>View contact information of specific offices and departments</p>
                        </a>
                    </div>
                    <div className='lg:px-4 lg:w-3/12'>
                        <div className="overflow-hidden mb-50">
                            <h4 className="mt-10 text-[14px] text-left lg:mt-0 pb-1 text-red">CONTENTS</h4>
                            <div className="absolute block w-10 h-0.5 bg-ligthgray"></div>
                            <ul className='block w-full pt-2 mt-1 text-grayer divide-y'>
                                {contents.map((content, index) => (
                                    <li className='py-1.5 ' key={index}>
                                        <p className='text-left transition duration-300 ease-in-out transform hover:text-red hover:underline hover:translate-x-2'>
                                            <a className='body-font' href={content.href}>{content.title}</a>
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



        </>
    )
}