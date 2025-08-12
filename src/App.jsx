import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import clock from "./assets/clock.jpg"
import handshake from "./assets/handshake.jpg"
import finance from "./assets/finance.jpg"



function App() {

   const images = [
    "https://www.greenapplefinance.in/slider1.jpg",
    "https://www.greenapplefinance.in/slider2.jpg",
    "https://www.greenapplefinance.in/slider3.jpg"
  ]; 

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 120; 
    const elementPosition = section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

  };
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // change every 2 sec

    return () => clearInterval(interval);
  }, [images.length]);

  


  return (
    <>
      <div>

        <header className="fixed top-0 left-0 w-full z-50 ">

          <div className=" py-1 flex justify-end gap-2 px-2 items-center  bg-gradient-to-br  bg-[#4779f8] to-[#e765d2]">
            <FaPhoneAlt color="white" />
            <p className="text-white font-medium text-lg">+91 9368432124 </p>
          </div>


          <div className=" text-gray-800 font-medium text-[18px] flex justify-between items-center gap-8 py-4 px-4 bg-white ">
            <div className="text-[30px] font-bold">Finance</div>

            <div className="flex gap-10">
              <button onClick={() => scrollToSection("category1")} className=" cursor-pointer hover:underline">Home</button>
              <button onClick={() => scrollToSection("category2")} className=" cursor-pointer hover:underline">About Us</button>
              <button onClick={() => scrollToSection("category3")} className=" cursor-pointer hover:underline">Loan Service</button>
              <a href="/payments"  className=" cursor-pointer hover:underline">Payment</a>
            </div>
          </div>
        </header>


        <main>
          <div className="h-24"></div>


         <section
      id="category1"
      className="relative w-full h-[500px] flex items-center justify-center"
    >
      <img
        src={images[currentIndex]}
        alt=""
        className="w-full h-full object-cover transition-all duration-700 ease-in-out"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
        <h2 className="text-4xl font-extrabold">Finance Service</h2>
        <h2 className="text-2xl font-bold">PVT. LTD.</h2>
        <div>
          <button className="bg-[#0e7490] rounded-2xl py-2 px-4 m-2 cursor-pointer">
            Contact
          </button>
          <button className="bg-gray-400 rounded-2xl py-2 px-4 cursor-pointer">
            Apply
          </button>
        </div>
      </div>
    </section>


          <section id="category2" className="h-screen flex flex-col bg-gray-200">
            <div className="flex flex-col items-center justify-center mt-2">
              <div className=" flex justify-center items-center  mt-5">
                <div className=" w-[full] flex  justify-between flex-row-reverse mx-4 gap-6">
                  <div className=" w-[50%]">
                    <h2 className=" text-3xl font-bold pb-3 text-[#0e7490]">About Us</h2>
                    <p>Capital Loan Pvt. Ltd. is dealing in Home Loan,
                      Personal Loan, Agriculture Loan, Shop Loan, Flat Loan, Project Loan,
                      Education Loan, Pay Slip Loan, Car Loan, Machine Loan, Business Loans,
                      Loan Against Property & Project Etc.</p>

                    <div className='flex flex-col p-2 lg:p-0 lg:flex-row justify-center gap-2.5 my-10 '>
                      <div className=' max-w-[1200px] w-full my-5 lg:w-[full]  flex flex-col lg:flex-row gap-2.5'>
                        <div className='lg:w-[50%] h-53  shadow-[0_0_0_1px_rgba(0,0,0,0.1)] rounded-2xl'>
                          <div className=' flex justify-center'>
                            <img src={clock} alt="" className='w-25 mt-5 rounded-full' />
                          </div>
                          <div>
                            <h2 className=' text-[14px] font-okra text-center m-4 font-bold text-red-500'>24/7 Unlimited Support</h2>
                            <p className='text-center text-[12px] text-[#1F1F1F] font-Okra,Helvetica,sans-serif px-4'>Our customer support team is ready to help our clients all the time.</p>
                          </div>
                        </div>
                        <div className=' h-53 lg:w-[50%] shadow-[0_0_0_1px_rgba(0,0,0,0.1)] rounded-2xl'>
                          <div className=' flex justify-center'>
                            <img src={handshake} alt="" className='w-25 mt-5 rounded-full' />
                          </div>
                          <div>
                            <h2 className=' text-[14px] font-okra text-center m-4 font-bold text-red-500'>We Are Committed</h2>
                            <p className='text-center text-[12px] text-[#1F1F1F] font-Okra,Helvetica,sans-serif px-4'>Skilled professionals are always ready to provide reliable services to our clients!...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" w-[50%]" >
                    <img src={finance} alt="" className=" w-[full]  rounded-xl" />
                  </div>
                </div>
                <div>

                </div>
              </div>
            </div>
          </section>


          <section
            id="category3"
            className="h-screen flex flex-col  justify-center bg-amber-50"
          >
            <div className='  flex justify-center '>
              <div className='w-[100%]  lg:w-[full] max-w-[1200px] '>
                <h2 className=' text-3xl py-2 p-2 lg:p-0 sm:text-[24px] lg:text-[28px] font-bold '>OUR SERVICE</h2>
              </div>

            </div>
            <div className='flex flex-col p-2 lg:p-0 lg:flex-row justify-center gap-2.5 my-10 '>
              <div className=' max-w-[1200px] w-full my-5 lg:w-[full]  flex flex-col lg:flex-row gap-2.5'>
                <div className='lg:w-[25%] h-90  shadow-[0_0_0_1px_rgba(0,0,0,0.1)] rounded-2xl bg-blue-100'>
                  <div className=' flex justify-center'>
                    <img src="https://www.greenapplefinance.in/personal.jpeg" alt="" className='w-50 m-5 h-35 rounded-xl' />
                  </div>
                  <div>
                    <h2 className=' text-[18px] font-okra text-center m-4 font-bold'>Personal Loan</h2>
                    <p className='text-center text-[18px] text-[#1F1F1F] font-Okra,Helvetica,sans-serif px-4'>Get Personal Loan on Easy EMI basis from Green Apple Financial Services Pvt. Ltd.</p>
                  </div>
                </div>
                <div className='lg:w-[25%] h-90  shadow-[0_0_0_1px_rgba(0,0,0,0.1)] rounded-2xl bg-blue-100'>
                  <div className=' flex justify-center'>
                    <img src="https://www.greenapplefinance.in/homeLoan.png" alt="" className='w-50 m-5 h-35 rounded-xl' />
                  </div>
                  <div>
                    <h2 className=' text-[18px] font-okra text-center m-4 font-bold'>Home Loan</h2>
                    <p className='text-center text-[18px] text-[#1F1F1F] font-Okra,Helvetica,sans-serif px-4'>Get Home Loan on Easy EMI basis from Green Apple Financial Services Pvt. Ltd.</p>
                  </div>
                </div>
                <div className='lg:w-[25%] h-90  shadow-[0_0_0_1px_rgba(0,0,0,0.1)] rounded-2xl bg-blue-100'>
                  <div className=' flex justify-center'>
                    <img src="https://www.greenapplefinance.in/education.jpeg" alt="" className='w-50 h-35 m-5 rounded-xl' />
                  </div>
                  <div>
                    <h2 className=' text-[18px] font-okra text-center m-4 font-bold'>Education Loan</h2>
                    <p className='text-center text-[18px] text-[#1F1F1F] font-Okra,Helvetica,sans-serif px-4'>Get Education Loan on Easy EMI basis from Green Apple Financial Services Pvt. Ltd.</p>
                  </div>
                </div>
                <div className='lg:w-[25%] h-90  shadow-[0_0_0_1px_rgba(0,0,0,0.1)] rounded-2xl bg-blue-100'>
                  <div className=' flex justify-center'>
                    <img src="https://www.greenapplefinance.in/businessLoan.png" alt="" className='w-50 m-5 h-35 rounded-xl' />
                  </div>
                  <div>
                    <h2 className=' text-[18px] font-okra text-center m-4 font-bold'>Business Loan</h2>
                    <p className='text-center text-[18px] text-[#1F1F1F] font-Okra,Helvetica,sans-serif px-4'>Get Business Loan on Easy EMI basis from Green Apple Financial Services Pvt. Ltd.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


         
        </main>
      </div>
    </>
  );
}

export default App;
