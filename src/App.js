import React from 'react'


export default function App() {
  return (
    <div className='bg-indigo-400 w-2/3  text-center mt-10 ml-auto mr-auto p-20'>
    <h1 className='font-black text-2xl'>TIPTOP CALC</h1>
       <section className=' bg-slate-200 flex  '>
        <from className=' flex flex-col justify-start border-2 rounded w-2/4 pl-10 pb-5 pt-5'>
          <label className='text-left'>Bill</label>
          <input type='text' placeholder='$' className='bg-gray-100 border-2 border-gray-400 rounded-lg ' />
          <label className='text-left'>Select Tip % </label>
          <div className='grid grid-cols-3 grid-rows-2 '>
          <input type='submit' value='5%' className='border-2 rounded-lg bg-indigo-500 text-white '/>
          <input type='submit' value='10%' className='border-2 rounded-lg bg-indigo-500 text-white '/>
          <input type='submit' value='15%' className='border-2 rounded-lg bg-indigo-500 text-white '/>
          <input type='submit' value='20%' className='border-2 rounded-lg bg-indigo-500 text-white '/>
          <input type='submit' value='50%' className='border-2 rounded-lg bg-indigo-500 text-white '/>
          <input type='submit' value='CUSTOM' className='border-2 rounded-lg bg-white text-indigo-500'/>
          </div>
          <label className='text-left'>Number of people</label>
          <input type='text' placeholder='🙍' className='bg-gray-100 border-2 border-gray-400 rounded-lg' />
        </from>
       
       <section className=' bg-indigo-500 text-white border-gray-400 rounded-lg border-2 w-2/4 m-5 pt-4 pb-4 pl-2 pr-2'>
        <p>Tip Amount</p>
        <p className='text-xs'>/person</p>
        <p>$</p>
        <p>Total</p>
        <p className='text-xs'>/person</p>
        <p>$</p>
        
        <button className=' border-2 rounded-lg bg-white text-indigo-500'>RESET
        </button>

       </section>
   
       </section>




    






    </div>
  )
}
