import Head from 'next/head';
import { useRouter } from 'next/router'


function Home() {
  const router = useRouter()
  console.log(router.query.id);

  return (
    <div>
        <Head>
        <title>{router.query.id} - TitleMetaNextjs</title>
        <meta name="description" content="Meta description for the Home page" />
        </Head>
     <div className='font-bold text-2xl'>
     Id {router.query.id}
     </div> 
    </div>
  )
}

export default Home