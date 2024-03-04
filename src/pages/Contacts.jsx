import ContactImg from '../assets/Contact-img/contact-img.png';
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';
import StyledSection from '../components/StyledSection';
import EmailIcon from "../assets/Contact-img/icons/Email.png";
import PhoneCallIcon from "../assets/Contact-img/icons/PhoneCall.png";
import MapIcon from "../assets/Contact-img/icons/Map Pin.png";
import MapImg from "../assets/Contact-img/Map Image.png";

const Contacts = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${ContactImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="mt-0 h-[15vh] flex items-center md:pl-12 sm:pl-10 xs:pl-8"
      >
        <h2 className="text-gray200 hidden md:block">Contact</h2>
      </div>

      <StyledSection className='flex justify-between sm:flex-col'>
        <div className='w-[20%] py-[3.5rem] px-3 bg-white rounded-md shadow-2xl md:w-[25%] sm:flex sm:items-center sm:justify-between sm:w-full sm:py-1 sm:mb-5 xs:px-1'>
          <div className='flex flex-col items-center justify-center text-center text-gray800 text-sm mb-5 sm:w-[32%] sm:pt-3'>
            <img src={MapIcon} alt="map-pin-icon" className='w-9 mb-3 sm:w-5' />

            <span className='lg:text-xs xs:text-[0.65rem]'>2715 Ash Dr. San Jose, South Dakota 83475</span>
          </div>

          <div className='flex flex-col items-center justify-center text-center text-gray800 text-sm py-4 border-t border-b border-solid border-gray200 sm:w-[32%] sm:border-0 sm:pt-3'>
            <img src={EmailIcon} alt="email-icon" className='w-8 mb-3 sm:w-5' />

            <span className='mb-1 lg:text-xs xs:text-[0.68rem]'>Proxy@gmail.com</span>
            <span className='lg:text-xs xs:text-[0.68rem]'>Help.proxy@gmail.com</span>
          </div>

          <div className='flex flex-col items-center justify-center text-center text-gray800 text-sm pt-4 sm:w-[32%] sm:pt-0'>
            <img src={PhoneCallIcon} alt="phonecall-icon" className='w-8 mb-3 sm:w-5 sm:pt-0' />

            <span className='mb-0 lg:text-[0.7rem] xs:text-[0.65rem]'>(219) 555-0114</span>
            <span className='lg:text-[0.7rem] xs:text-[0.65rem]'>(164) 333-0487</span>
          </div>
        </div>

        <div className='w-[75%] py-7 pt-8 px-12 bg-white rounded-md shadow-2xl md:w-[70%] md:px-8 sm:w-full'>
          <div>
            <h1 className='text-xl font-bold text-gray900 mb-2 sm:text-base'>Just Say Hello!</h1>

            <p className='text-gray500 w-[70%] mb-5 lg:text-sm lg:w-[90%] xs:w-full'>Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</p>
          </div>

          <div className=''>
            <div className='flex items-center justify-between sm:flex-col sm:gap-4'>
              <input type="text" placeholder='Template Cookie' className='w-[48%] py-2 px-2 outline-none border border-solid border-gray100 rounded-sm hover:border-success lg:text-sm sm:w-full' />

              <input type="text" placeholder='zakirsoft@gmail.com' className='w-[48%] py-2 px-2 outline-none border border-solid border-gray100 rounded-sm hover:border-success lg:text-sm sm:w-full' />
            </div>

            <input type="text" placeholder='Hello|' className='border border-solid border-gray100 block w-full my-5 py-2 px-2 rounded-sm outline-none hover:border-success lg:text-sm' />

            <textarea placeholder='Subjects' className='border border-solid border-gray100 block w-full h-36 rounded-sm px-2 py-1 outline-none hover:border-success lg:text-sm sm:h-32' />

            <button className='bg-success px-7 py-2 rounded-3xl text-white text-sm mt-5 xs:text-xs xs:px-4'>Send Message</button>
          </div>
        </div>
      </StyledSection>

      <div className='mt-5'>
        <img src={MapImg} alt="map-image" className='h-[40vh] w-full object-cover object-center' />
      </div>

      <NewsLetter/>
    </div>
  )
}

export default Contacts