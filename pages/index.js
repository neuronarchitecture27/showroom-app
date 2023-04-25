import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import locations from '../data/locations.json'
import categories from '../data/categories.json'
import SmallCard from '@/components/SmallCard'
import MediumCard from '@/components/MediumCard'
import LargeCard from '@/components/LargeCard'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const  metadata = {
  title: ""
}

export default function Home() {
  return (
    <div>
          <Head>
          <title>Home - TitleMetaNextjs</title>
        <meta name="description" content="Meta description for the Home page" />
          </Head>
        
          <Header />
          <Banner />
          <main className='max-w-7xl mx-auto px-8 sm:px-16'>
            {/**Locations Summary */}
            <section className='pt-6'>
              <h2 className='text-4xl font-bold pb-5'>Explore Nearby</h2>
              {/**Pull data from server */}
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {locations?.map((item) => (
              <SmallCard key={item.location} img={item.img} distance={item.distance} location={item.location} />
              )) }
              </div>
            </section>
            {/**Categories Summary */}
            <section>
            <h2 className='text-4xl font-bold py-8'>Live Anywhere</h2>
              <div className='flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3'>
              {categories?.map(item => (
                <MediumCard  key={""} title={item.title} img={item.img} />
               ))}
              </div>
              
            </section>

              {/**Bottom Banner */}
            <LargeCard 
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="A wishlist curated by Airbnb"
            buttonText="Get Inspired"
            />

          </main>
        <Footer />
    </div>
   
  )
}


// export async function getStaticProps() {
//   const exploreData = await fetch('https://jsonkeeper.com/b/4Q89')
//   .then((res) => res.json)
//   return {
//     props: {
//       exploreData
//     }
//   }

// }