import { MouseEventHandler } from 'react'

export interface customBtn {
  title: string
  containerStyles?: string
  textStyles?: string
  rightIcon?: string
  isDisabled?: boolean
  btnType?: 'button' | 'submit'
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface SearchManuFacturerProps {
  manufacturer: string
  setM: (manufacturer: string) => void
}

export interface CarProps {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}

export interface CarCardProps {
  model: string
  make: string
  mpg: number
  transmission: string
  year: number
  drive: string
  cityMPG: number
}

export interface filterProps {
  manufacturer: string
  year: number
  fuel: string
  limit: number
  model: string
}
export interface optionsprops {
  title: string
  value: string
}
export interface customFilterProps {
  title: string
  options: optionsprops[]
}

export interface ShowMoreProps {
  pageNumber: number
  isNext: boolean
}

export interface HomeProps {
  searchParams: filterProps
}
