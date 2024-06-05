'use client'
import Image from 'next/image'
import CustomBtn from './CustomBtn'

const Hero = () => {
  const handleScroll = () => {}

  return (
    <section className='hero'>
      <article className='pt-36 flex-1 padding-x '>
        <h1 className='hero__title'>
          Find book or rent a car -- quickly and easy
        </h1>
        <p className='hero__subtitle'>
          Streamline your car rental experiences with our effortless booking
          process.
        </p>
        <CustomBtn
          title='explore cars'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </article>
      <div className='hero__image-container '>
        <div className='hero__image'>
          <Image src='/hero.png' alt='hero' fill className='object-contain' />
        </div>
        <div className='hero__image-overlay' />
      </div>
    </section>
  )
}

export default Hero
