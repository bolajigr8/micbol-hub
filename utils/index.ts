import { manufacturers } from '@/constants'
import { CarProps } from '@/types'
import { filterProps } from '@/types'

export const fetchTours = async (filter: filterProps) => {
  const { manufacturer, year, limit, model, fuel } = filter

  // const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla'
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}$model=${model}&limit=${limit}&fuel_type=${fuel}`
  const headers = {
    'x-rapidapi-key': '08175c56dfmsh3e76e629e0da987p17cc4cjsned9a6aa7c60e',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  }
  const resp = await fetch(url, { headers: headers })
  const data = resp.json()
  return data
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50 // Base rental price per day in dollars
  const mileageFactor = 0.1 // Additional rate per mile driven
  const ageFactor = 0.05 // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}

// update search Params
export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)
  searchParams.set(type, value)
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`

  return newPathName
}
