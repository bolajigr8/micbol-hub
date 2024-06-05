import Image from 'next/image'
import Link from 'next/link'
import CustomBtn from './CustomBtn'

const Navbar = () => {
  return (
    <header className='absolute z-10 w-full'>
      <nav className='max-w-[1440px] mx-auto flex  justify-between items-center px-6 sm:px-16 py-4 '>
        <Link href='/' className='flex items-center justify-center'>
          <Image
            src='/logo.svg'
            alt='car hub logo'
            width={118}
            height={15}
            className='object-contain'
          />
        </Link>
        <CustomBtn
          title={'Sign-in'}
          containerStyles='bg-white  text-primary-blue min-w-[130px] font-semibold   rounded-full '
          btnType='button'
        />
      </nav>
    </header>
  )
}

export default Navbar
