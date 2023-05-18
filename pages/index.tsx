import Image from 'next/image'
import Logo from "../public/Logo.svg";
// import { AveriaLibre } from 'next/font/google'
// const averialibre = AveriaLibre({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
      <Image src={Logo} alt="Quora Logo" width={300} height={100} />
      
    </div>
    <div>
      <div className='text-center text-#AE2323 text-3xl font-extrabold font-custom mt-2'>DUPLICATE QUESTION PAIRS</div>
      <div className='mt-3' >
      <label className='text-2xl font-custom flex justify-center mt-8' >Enter Question 1</label>
      <div className='flex justify-center items-center mt-4 '>
      <input className='border-4 border-red-500 w-96 text-center' type='text'></input>

      </div>
      </div>
      <div className=''>

      <label className='text-2xl font-custom flex justify-center mt-8'>Enter Question 2</label>
      <div className='flex justify-center items-center mt-4'>
      <input className='border-4 border-red-500 w-96 text-center' type='text'></input>

      </div>
      
      </div>
      <div className='text-center mt-10'>
        <input className='w-40 text-2xl font-semibold bg-rose-600 text-white py-2.5 rounded-lg' type="submit" ></input>
      </div>
    </div>
    </>
  )
}

