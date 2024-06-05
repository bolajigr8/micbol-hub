'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { CarProps } from '@/types'

type CarDetailsProps = {
  isOpen: boolean
  closeModal: () => void
  car: CarProps
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-0'
            leaveTo='opacity-100'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </TransitionChild>
          <article className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full inset-0 items-center justify-center p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter='ease-in duration-300'
                enterFrom='opacity-0  scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-out duration-0'
                leaveFrom='opacity-0 scale-100'
                leaveTo='opacity-100 scale-95'
              >
                <DialogPanel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl  transition-all flex flex-col gap-5 p-6'>
                  <button
                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                    type='button'
                    onClick={closeModal}
                  >
                    <Image
                      src='/close.svg'
                      alt='close'
                      width={20}
                      height={20}
                      className='object-contain'
                    />
                  </button>
                  <article className='flex-1 flex flex-col gap-3'>
                    <div className='relative w-full  h-40 bg-pattern bg-center bg-cover rounded-lg'>
                      <Image
                        src='/bmw.png'
                        alt='car model'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>
                    <footer className='flex gap-3'>
                      {/* car */}
                      <div className='flex-1 relative w-full bg-primary-blue-100 h-24 rounded-lg'>
                        <Image
                          src='/bmw.png'
                          alt='car model'
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                      {/* car */}
                      <div className='flex-1 relative w-full bg-primary-blue-100 h-24 rounded-lg'>
                        <Image
                          src='/bmw.png'
                          alt='car model'
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                      {/* car */}
                      <div className='flex-1 relative w-full bg-primary-blue-100 h-24 rounded-lg'>
                        <Image
                          src='/bmw.png'
                          alt='car model'
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                    </footer>
                    {/* car info */}
                    <div className='flex-1  flex flex-col gap-2'>
                      <h2 className='font-semibold text-xl capitalize'>
                        {car.make} {car.model}
                      </h2>
                      <article className='mt-3 flex flex-wrap gap-4'>
                        {Object.entries(car).map(([key, value]) => {
                          return (
                            <div
                              className='flex justify-between gap-5 w-full text-right'
                              key={key}
                            >
                              <h4 className='text-gray capitalize'>
                                {key.split('_').join(' ')}
                              </h4>
                              <p className='text-black-100 font-semibold'>
                                {value}
                              </p>
                            </div>
                          )
                        })}
                      </article>
                    </div>
                  </article>
                </DialogPanel>
              </TransitionChild>
            </div>
          </article>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails
