import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import CarCard from '@/components/CarCard'
import CustomFilter from '@/components/CustomFilter'
import { fetchTours } from '@/utils'
import { fuels } from '@/constants'
import { yearsOfProduction } from '@/constants'
import { HomeProps } from '@/types'
import ShowMore from '@/components/ShowMore'

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchTours({
    manufacturer: searchParams.manufacturer || 'toyota',
    year: searchParams.year || 2024,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || 'm8',
  })
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className='overflow-hidden'>
      <Hero />
      <section className='padding-x padding-y max-width mt-12'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold capitalize'>car catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <article className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </article>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars.map((car, index) => {
                return <CarCard key={index} car={car} />
              })}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <section className='home__error-container'>
            <h2 className='text-black text-4xl font-bold'>
              Sorry, no results!
            </h2>
            <p>{allCars?.message}</p>
          </section>
        )}
      </section>
    </main>
  )
}
