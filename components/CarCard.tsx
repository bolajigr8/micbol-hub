'use client'

import Image from 'next/image'
import { useState } from 'react'
import CustomBtn from './CustomBtn'
import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils'
import CarDetails from './CarDetails'

interface cardCardProps {
  car: CarProps
}

const CarCard = ({ car }: cardCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const { city_mpg, make, year, model, transmission, drive } = car
  const carRent = calculateCarRent(city_mpg, year)

  return (
    <section className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
      <p className='flex text-[32px] mt-6 font-extrabold'>
        <span className='self-start   text-[14px] font-semibold '>$</span>
        {carRent}
        <span className='self-end   text-[14px] font-medium '>/day</span>
      </p>
      <div className='w-full h-40 relative my-3  object-contain '>
        <Image
          src='/bmw.png'
          alt='car model'
          fill
          priority
          className='object-contain'
        />
      </div>
      <footer className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <aside className='flex flex-col justify-center items-center gap-2'>
            <Image
              src='/steering-wheel.svg'
              alt='steering-wheel'
              width={20}
              height={20}
            />
            <p className='text-[14px]'>
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </aside>
          <aside className='flex flex-col justify-center items-center gap-2'>
            <Image src='/tire.svg' alt='tire' width={20} height={20} />
            <p className='text-[14px]'>{drive?.toUpperCase()}</p>
          </aside>
          <aside className='flex flex-col justify-center items-center gap-2'>
            <Image src='/gas.svg' alt='gas' width={20} height={20} />
            <p className='text-[14px]'>{city_mpg} mpg</p>
          </aside>
        </div>
        <div className='car-card__btn-container'>
          <CustomBtn
            title='view'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </footer>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </section>
  )
}

export default CarCard
