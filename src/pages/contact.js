import Navbar from '@components/navbar2.js'
import Footer from '@components/footer.js'
import Navbar2 from '@/components/navbar'
import Footer2 from '@components/footer2.js'
import Fab from 'src/components/FAB.js'


export default function contact() {
    return (
        <>
            <Navbar />
            <Navbar2 />

            <section className='mx-90'>
                <div className='body-margin '>
                    <h1 className='text-red font-semibold' style={{fontSize:'24px'}}>Contact Us</h1>

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