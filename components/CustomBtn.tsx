'use client'

import { customBtn } from '@/types'
import Image from 'next/image'

const CustomBtn = ({
  title,
  containerStyles,
  textStyles,
  rightIcon,
  handleClick,
  btnType,
  isDisabled,
}: customBtn) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      type={btnType}
      onClick={handleClick}
    >
      <span className={`flex-1   ${textStyles} `}>{title}</span>
      {rightIcon && (
        <div className='relative h-6 w-6'>
          <Image
            src={rightIcon}
            fill
            alt='rightIcon'
            className='object-contain'
          />
        </div>
      )}
    </button>
  )
}

export default CustomBtn
