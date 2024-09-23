 
import { useState } from 'react'
import './App.css'

function App() {
    
  const [principle , setPrinciple] = useState('')
  const [rate , setRate] = useState('')
  const [year , setYear] = useState('')
  const [interest , setInterest] = useState(0) 
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate , setIsRate] = useState(true)
  const [isYear , setIsYear] = useState(true)
 
  const validate = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
 
    console.log(event.target.value.match('^[0-9]*$'));

    if(!!event.target.value.match('^[0-9]*$')){
      if(event.target.name == 'amount'){
        setPrinciple(event.target.value)
        setIsPrinciple(true)
      } else if(event.target.name == 'interest'){
        setRate(event.target.value)
        setIsRate(true)
      } else {
         setYear(event.target.value)
         setIsYear(true)
      }
    } else {
      if(event.target.name == 'amount'){
        setPrinciple(event.target.value)
        setIsPrinciple(false)
      } else if(event.target.name == 'interest'){
        setRate(event.target.value)
        setIsRate(false)
      } else {
         setYear(event.target.value)
         setIsYear(false)
      }
    }
    
  }

  function handleReset() {
    setPrinciple('')
    setRate('')
    setYear('')
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }

  function handleCalculate(){
    console.log('inside calculate');
    
    setInterest((principle*rate*year)/100)
  }

  return (
    <>
     <main className='flex justify-center items-center w-full h-screen bg-gray-600'>
        <section className='w-[350px] h-[600px] flex justify-top p-[25px] items-center flex-col rounded'>
            <h1 className='text-[26px] font-semibold'>Simple interest App</h1>
            <p className='text-gray-800 mb-[25px]'>calculate your simple interest easily</p>
            <div className='w-[260px] h-[140px] bg-gray-400 mb-[30px] flex justify-center items-center flex-col text-white rounded'>
              <h3 className='text-[22px] font-semibold'><i className="fa-solid fa-indian-rupee-sign text-[19px]"></i>{interest}  </h3>
              <p>Total simple interest</p>
            </div>
            <p className='-ml-[135px] -mb-[7px]'>Principle amount</p>
            <input className='w-[260px] h-[40px] my-[10px] rounded border border-gray-300 pl-[10px]' value={principle} type="text" name='amount' onChange={(event) => {validate(event)}} />
            {!isPrinciple  && <span className='-ml[10px text-red-200'>*invalid input</span>}
            <p className='-ml-[145px] -mb-[7px]'>Rate of Interest</p>
            <input className='w-[260px] h-[40px] my-[10px] rounded border border-gray-300 pl-[10px]' value={rate} type="text" name='interest' onChange={(event) => {validate(event)}} />
            {!isRate  && <span className='-ml[10px text-red-200'>*invalid input</span>}
            <p className='-ml-[215px] -mb-[7px]'>Time</p>
            <input className='w-[260px] h-[40px] my-[10px] rounded border border-gray-300 pl-[10px]' type="text" value={year} name='time' onChange={(event) => {validate(event)}} />
            {!isYear  && <span className='-ml[10px text-red-200'>*invalid input</span>}
            <div className='w-[260px] h-[100px] flex justify-between items-center'>
              <button className='btn btn-primary' disabled={true}  onClick={handleCalculate} >Calculate</button>
              <button className='bg-gray-900 text-white font-semibold px-[16px] py-[8px] rounded' onClick={handleReset} >Reset</button>
            </div>

        </section>

       
     </main>    
    </>
  )
}

export default App
