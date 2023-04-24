import Image from "next/image"
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xlg:h-[600px] 2xlg:h-[700px]">
        <Image
              src="https://links.papareact.com/0fm"
              fill={true}
              objectFit="cover"
              alt="banner"
        />
        <div className="absolute top-1/2 w-full text-center">
            <p className="sm:text-lg text-sm font-bold">Not sure where to go?</p>
            <button className="text-purple-500 bg-white py-4 px-10 shadow-md rounded-full my-3 font-bold hover:shadow-xl active:scale-90 transition duration-150  ">Explore!</button>
        </div>
    </div>
  )
}

export default Banner