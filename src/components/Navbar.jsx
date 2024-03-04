import LogoImg from '../assets/Home-img/icon-img/logo-img.png';
import PhoneIcon from '../assets/Home-img/icon-img/phone-icon.png';

const Navbar = () => {
  return (
    <header>
      <div className='flex items-center justify-between text-gray300 bg-gray900 pb-4 pt-2 px-32'>
        <div className='flex items-center'>
          <span className='text-xl mr-1'><ion-icon name="location-outline"></ion-icon></span>

          <h2 className='text-sm'>Store Location: Lincoln- 344, Illinois, Chicago, USA</h2>
        </div>

        <div className='flex items-center'>
          <select className='outline-none cursor-pointer mx-2 hover:text-success duration-75 ease-in-out text-sm bg-gray900 text-gray300'>
            <option value="">Eng</option>
            <option value="">Esp</option>
          </select>

          <select className='outline-none cursor-pointer mx-2 hover:text-success duration-75 ease-in-out text-sm bg-gray900 text-gray300'>
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">GBP</option>
          </select>

          <h2 className='mx-2'>|</h2>

          <span className='flex'>
            <button className='ml-2 hover:text-success duration-75 ease-in-out text-sm'>Sign In</button>
            <h2 className='mx-1'>/</h2>
            <button className='mx-1 hover:text-success duration-75 ease-in-out text-sm'>Sign Up</button>
          </span>
        </div>
      </div>

      <hr className='text-gray200' />

      <div className='my-8 flex items-center justify-between px-32 font-[poppins]'>
        <span className='flex items-center'>
          <img src={LogoImg} alt="logo-img" />

          <h2 className='text-3xl font-medium ml-1'>Ecobazar</h2>
        </span>

        <div className='w-[40%] flex items-center'>
          <span className='relative w-[85%]'>
            <input type="text" className='w-full h-8 px-3 pl-7 py-[1.2rem] outline-none border border-gray300 rounded-bl-md rounded-tl-md placeholder:font-normal text-sm' placeholder='Search' />

            <span className='absolute left-2 top-2 text-lg text-gray900'><ion-icon name="search"></ion-icon></span>
          </span>

          <button className="bg-success py-[0.5rem] px-4 text-white rounded-br-md rounded-tr-md">Search</button>
        </div>

        <div className='flex items-center'>
          <span className="text-3xl text-gray900 border-r-2 border-gray200 pr-3 py-0 cursor-pointer hover:text-success duration-100 ease-in-out"><ion-icon name="heart-outline"></ion-icon></span>

          <div className='flex items-center ml-3'>
            <span className='text-3xl text-gray900 cursor-pointer hover:text-success duration-100 ease-in-out'><ion-icon name="bag-outline"></ion-icon></span>

            <div className='ml-1'>
              <p className="text-[0.65rem] text-gray700">Shopping cart:</p>

              <p className='text-xs font-semibold text-gray900'>$57.00</p>
            </div>
          </div>
        </div>
      </div>

      <hr className='text-gray200' />

      <div className='bg-white'>
        <nav className='px-32 py-3 flex items-center justify-between text-gray900 font-medium'>
          <ul className='flex items-center'>
            <li><a href="#" className='mr-7'>Home</a></li>
            <li><a href="#" className='mx-7'>Blog</a></li>
            <li><a href="#" className='mx-7'>About Us</a></li>
            <li><a href="#" className='ml-7'>Contact Us</a></li>
          </ul>

          <div className='flex items-center'>
            <img src={PhoneIcon} alt="phone-icon" className='mr-2' />
            <p>(219) 555-0114</p>
          </div>
        </nav>
      </div>

      <hr className='text-gray200' />
    </header>
  )
}

export default Navbar