import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 120; // height of header + top bar
    const elementPosition = section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

  };
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Payment submitted!");
  };


  return (
    <>
      <div>
        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-50 ">
          {/* Top Bar */}
          <div className=" py-1 flex justify-end gap-2 px-2 items-center bg-gradient-to-b  bg-[#0e7490]">
            <FaPhoneAlt color="white" />
            <p className="text-white font-medium text-lg">+91 9368432124 </p>
          </div>

          {/* Nav Bar */}
          <div className=" text-white text-[18px] flex justify-between items-center gap-8 py-2 px-4 bg-gradient-to-br  bg-[#4779f8] to-[#e765d2]">
            <div className="text-[30px] font-bold">Finance</div>

            <div className="flex gap-10">
              <button onClick={() => scrollToSection("category1")} className=" cursor-pointer">Home</button>
              <button onClick={() => scrollToSection("category2")} className=" cursor-pointer">About Us</button>
              <button onClick={() => scrollToSection("category3")} className=" cursor-pointer">Loan Service</button>
              <button onClick={() => scrollToSection("category4")} className=" cursor-pointer">Payment</button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main>
          <div className="h-24"></div>

          {/* Section 1 */}
          <section
            id="category1"
            className="relative w-full h-[500px] flex items-center justify-center"
          >
            <img
              src="https://media.istockphoto.com/id/1503371245/photo/percentage-sign-on-top-of-coin-stacks-before-blue-financial-graph.jpg?s=612x612&w=0&k=20&c=T9YGg7XIZTG_8E2h1xsTaQkdLGCTjkX_rnMr0adtAQk="
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
              <h2 className="text-4xl font-extrabold">Finance Service</h2>
              <h2 className="text-2xl font-bold">PVT. LTD.</h2>
              <div>
                <button className=" bg-[#0e7490] rounded-2xl py-2 px-4 m-2 cursor-pointer">Contact</button>
                <button className=" bg-gray-400 rounded-2xl py-2 px-4 cursor-pointer">Apply</button>
              </div>
            </div>

          </section>

          {/* Section 2 */}
          <section id="category2" className="h-screen flex flex-col">
            <div className="flex flex-col items-center justify-center mt-2">
              <div className=" flex justify-center items-center flex-col mt-5">
                <div className=" w-[80%] flex items-center justify-between">
                  <div className=" w-[50%]">
                    <h2 className=" text-3xl font-bold py-3">WHY CHOOSE US</h2>
                    <h2 className=" text-3xl font-bold py-3 text-[#0e7490]">About Us</h2>
                    <p>Capital Loan Pvt. Ltd. is dealing in Home Loan,
                      Personal Loan, Agriculture Loan, Shop Loan, Flat Loan, Project Loan,
                      Education Loan, Pay Slip Loan, Car Loan, Machine Loan, Business Loans,
                      Loan Against Property & Project Etc.</p>
                    <div>
                      <button className=" bg-[#0e7490] rounded-2xl py-2 px-4 m-2 cursor-pointer">Contact</button>
                      <button className=" bg-gray-400 rounded-2xl py-2 px-4 cursor-pointer">Apply</button>
                    </div>
                  </div>
                  <div className=" w-[40%]" >
                    <img src="https://www.greenapplefinance.in/about.png" alt="" className=" w-[full] h-[300px] rounded-xl" />
                  </div>
                </div>
                <div>

                </div>
              </div>
            </div>
          </section>


          <section
            id="category3"
            className="h-screen flex flex-col  justify-center"
          >
            <div className='  flex justify-center '>
              <div className='w-[100%]  lg:w-[80%] max-w-[1200px] '>
                <h2 className=' text-3xl py-2 p-2 lg:p-0 sm:text-[24px] lg:text-[28px] font-bold '>OUR SERVICE</h2>
              </div>

            </div>
            <div className='flex flex-col p-2 lg:p-0 lg:flex-row justify-center gap-2.5 my-10 '>
              <div className=' max-w-[1200px] w-full my-5 lg:w-[80%]  flex flex-col lg:flex-row gap-2.5'>
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


          <section
            id="category4"
            className="h-screen flex items-center justify-center "
          >
            <div className="min-h-screen flex items-center justify-center w-full bg-gray-100">
              <div className="flex justify-center items-center  bg-gray-100">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
                >
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    Credit Card Payment
                  </h2>

                
                  <div className="mb-4">
                    <label className="block font-medium mb-2">Phone </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Contact Phone"
                      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>

                  
                  <div className="mb-4">
                    <label className="block font-medium mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>

                 
                  <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                      <label className="block font-medium mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        maxLength="5"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block font-medium mb-2">CVV</label>
                      <input
                        type="password"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        maxLength="4"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>
                  </div>

                  
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
                  >
                    Pay Now
                  </button>
                </form>
              </div>

            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
