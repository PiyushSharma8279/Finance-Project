import React from 'react'
import Footer from '../Footer'
import { FaAngleDoubleRight } from "react-icons/fa";

function PersonalLoan() {
    return (
        <>
        <div>
              <header className="fixed top-0 left-0 w-full z-50">
        <div className="py-1 flex justify-center sm:justify-end gap-2 px-2 items-center bg-gradient-to-br from-[#4779f8] to-[#e765d2]">
          
          <p className="text-white font-medium text-sm sm:text-lg">The Capital Finance</p>
        </div>

        <div className="text-gray-800 font-medium text-base sm:text-[18px] flex flex-col sm:flex-row justify-between items-center gap-4 py-4 px-4 bg-white">
          <a href="/" className="text-2xl sm:text-3xl font-bold cursor-pointer">Finance</a>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-10 text-sm sm:text-base">
            <a href="/" className="hover:underline">Home</a>
            <a href="/" className="hover:underline">About Us</a>
            <a href="/" className="hover:underline">Loan Service</a>
            <a href="/payments" className="hover:underline">Payment</a>
          </div>
        </div>
      </header>
      <div className="py-32 flex flex-col items-center px-4">
  <div className="max-w-6xl w-full">
    <h2 className="text-center text-2xl font-bold py-2">
      Eligibility for <span className="text-green-400"> Loan</span>
    </h2>
    <p className="text-center font-medium">
      Rate of interest 5% and the loan amount will Upto 1 lakh - 30 lakhs
    </p>

    <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
  
      <div className="bg-[#1f2937] p-4 text-white flex-1 rounded-lg md:h-[260px] border-r-4 border-b-4 border-green-400">
        <h2 className="py-2 font-bold text-green-400 text-xl">Required Documents Of Loan</h2>
        <div className=' py-1 flex items-center gap-1 '>
            <FaAngleDoubleRight className='text-green-400'/>
            <p>5 Photographs</p>
        </div>
        <div className=' py-1 flex items-center gap-1 '>
            <FaAngleDoubleRight className='text-green-400'/>
            <p>Address</p>
        </div>
        <div className=' py-1 flex items-center gap-1 '>
            <FaAngleDoubleRight className='text-green-400'/>
            <p>I.D. Proof</p>
        </div>
        <div className=' py-1 flex items-center gap-1 '>
            <FaAngleDoubleRight className='text-green-400'/>
            <p>Bank Statement of Last 6 months</p>
        </div>
        <div className=' py-1 flex items-center gap-1 '>
            <FaAngleDoubleRight className='text-green-400'/>
            <p>File Charge = 4500 Rs.</p>
        </div>
      </div>

      
      <div className="bg-[#1f2937] p-4 text-white flex-1 rounded-lg md:h-[340px] border-r-4 border-b-4 border-green-400">
        <h2 className="py-2 font-bold text-green-400 text-xl">Required Documents of Guarantor</h2>
        <div className=' py-1 flex items-center gap-1 '>
            <FaAngleDoubleRight className='text-green-400'/>
            <p>5 Recent Photographs of Guarantor</p>
        </div>
        <div className=' py-1 flex items-center gap-1 '>
            <FaAngleDoubleRight className='text-green-400'/>
            <p>Address Proof</p>
        </div>
        <div className=' py-1 flex items-center gap-1 '>
            <FaAngleDoubleRight className='text-green-400'/>
            <p>ID Proof</p>
        </div>
        <div className=' py-1 flex items-center gap-1 '>
            <FaAngleDoubleRight className='text-green-400'/>
            <p>Bank Details</p>
        </div>
        <div className=' py-1 flex items-center gap-1 '>
            <FaAngleDoubleRight className='text-green-400'/>
            <p>Property Documents (in case of property guarantor)</p>
        </div>
        <div className=' py-1 flex items-center gap-1 '>
            <FaAngleDoubleRight className='text-green-400'/>
            <p> Last two month of pay slip & last six month bank statement (in case of
          govt/pvt)</p>
        </div>
      </div>

      
      <div className="bg-[#1f2937] p-4 text-white flex-1 rounded-lg md:h-[260px] border-r-4 border-b-4 border-green-400">
        <h2 className="py-2 font-bold text-green-400 text-xl">Valid Documents as I.D. Proof</h2>
        <div className=' py-1 flex items-center gap-1 '>
            <FaAngleDoubleRight className='text-green-400'/>
            <p>Aadhar Card</p>
        </div>
        <div className=' py-1 flex items-center gap-1 '>
            <FaAngleDoubleRight className='text-green-400'/>
            <p>Pan Card</p>
        </div>
        <div className=' py-1 flex items-center gap-1 '>
            <FaAngleDoubleRight className='text-green-400'/>
            <p>Voter Card</p>
        </div>
        <div className=' py-1 flex items-center gap-1 '>
            <FaAngleDoubleRight className='text-green-400'/>
            <p>Driving License</p>
        </div>
      </div>
    </div>
  




        </div>

      </div>



      <Footer/>
        </div>
        
        
        </>
    )
}

export default PersonalLoan
