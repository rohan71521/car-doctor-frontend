import parts from '../../assets/images/about_us/parts.jpg'
import person from '../../assets/images/about_us/person.jpg'


function About() {
    
    return(
        <div id="about" className="w-full flex flex-col md:flex-row justify-center items-center gap-16 py-20 md:py-32">

            {/* image section */}
            <section className="md:w-1/2 relative">
                <img className='w-9/12 rounded' src={person} alt="" />
                <img className='w-1/2 absolute top-1/2 left-1/2 rounded border-8 border-third-color' src={parts} alt="" />
            </section>
            <section className="md:w-1/2">
                <h4 className='text-theme-color py-5'>About Us</h4>
                <h2>We are qualified </h2>
                <h2>& of experience</h2>
                <h2>in this field</h2>
                <p className='py-5'>There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected humour, 
                    or randomised words which don&apos;t look even slightly believable
                </p>
                <p className='pb-7'>the majority have suffered alteration in some form, by injected humour, 
                    or randomised words which don&apos;t look even slightly believable. 
                </p>
                <button className='button primary-outline-button'> Get More Information</button>
            </section>
        </div>
    )
}

export default About;