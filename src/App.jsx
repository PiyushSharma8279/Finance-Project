import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import clock from "./assets/clock.jpg";
import handshake from "./assets/handshake.jpg";
import finance from "./assets/finance.jpg";
import home from "./assets/home.jpg";
import imagecalc from "./assets/47.jpg";
import ContactForm from "./ContctUs";

function App() {
  const images = [
    "https://www.greenapplefinance.in/slider1.jpg",
    "https://www.greenapplefinance.in/slider2.jpg",
    "https://www.greenapplefinance.in/slider3.jpg",
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 120;
    const elementPosition = section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    if (!loanAmount || !interestRate || !loanTenure) {
      setEmi("Please enter all values.");
      return;
    }
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const years = parseFloat(loanTenure);
    const R = annualRate / 12 / 100;
    const N = years * 12;
    const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(`Your EMI is ₹${emiValue.toFixed(2)} per month`);
  };

  return (
    <div>
     
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="py-1 flex justify-center sm:justify-end gap-2 px-2 items-center bg-gradient-to-br from-[#4779f8] to-[#e765d2]">
          <FaPhoneAlt color="white" />
          <p className="text-white font-medium text-sm sm:text-lg">
            +91 9368432124
          </p>
        </div>

        <div className="text-gray-800 font-medium flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 py-4 px-4 bg-white">
          <a href="/" className="text-2xl sm:text-3xl font-bold cursor-pointer">Finance</a>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-10">
            <button onClick={() => scrollToSection("category1")} className="hover:underline cursor-pointer">
              Home
            </button>
            <button onClick={() => scrollToSection("category2")} className="hover:underline cursor-pointer">
              About Us
            </button>
            <button onClick={() => scrollToSection("category3")} className="hover:underline cursor-pointer">
              Loan Service
            </button>
            <a href="/payments" className="hover:underline">
              Payment
            </a>
          </div>
        </div>
      </header>

      <main>
        <div className="h-28"></div>

        
        <section id="category1" className="relative w-full h-[300px] sm:h-[500px] flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt=""
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center px-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold">Finance Service</h2>
            <h2 className="text-lg sm:text-2xl font-bold">PVT. LTD.</h2>
            <div className="flex gap-2 mt-4">
              <button className="bg-[#0e7490] rounded-2xl py-2 px-4 text-white cursor-pointer">Contact</button>
              <button className="bg-gray-400 rounded-2xl py-2 px-4 text-white cursor-pointer">Apply</button>
            </div>
          </div>
        </section>

     
        <section id="category2" className="min-h-screen flex flex-col bg-gray-200 px-4 py-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6">
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold pb-3 text-[#0e7490]">About Us</h2>
              <p className="text-sm sm:text-base">
                Capital Loan Pvt. Ltd. is dealing in Home Loan, Personal Loan, Agriculture Loan, Shop Loan, Flat Loan, Project Loan, Education Loan, Pay Slip Loan, Car Loan, Machine Loan, Business Loans, Loan Against Property & Project Etc.
              </p>
              <div className="flex flex-col lg:flex-row gap-4 my-10">
                <div className="flex-1 shadow rounded-2xl p-4 bg-white">
                  <img src={clock} alt="" className="w-20 h-20 mx-auto rounded-full" />
                  <h2 className="text-center font-bold text-red-500 mt-3">24/7 Unlimited Support</h2>
                  <p className="text-center text-sm">Our customer support team is ready to help our clients all the time.</p>
                </div>
                <div className="flex-1 shadow rounded-2xl p-4 bg-white">
                  <img src={handshake} alt="" className="w-20 h-20 mx-auto rounded-full" />
                  <h2 className="text-center font-bold text-red-500 mt-3">We Are Committed</h2>
                  <p className="text-center text-sm">Skilled professionals are always ready to provide reliable services to our clients!...</p>
                </div>
              </div>
            </div>
           
            <div className="w-full lg:w-1/2">
              <img src={finance} alt="" className="w-full rounded-xl" />
            </div>
          </div>
        </section>

      
        <section id="category3" className="min-h-screen flex flex-col justify-center bg-amber-50 px-4 py-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">OUR SERVICE</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {[
              { title: "Personal Loan", img: "https://www.greenapplefinance.in/personal.jpeg" },
              { title: "Home Loan", img: home },
              { title: "Education Loan", img: "https://www.greenapplefinance.in/personal.jpeg" },
              { title: "Business Loan", img: home },
            ].map((service, i) => (
              <div key={i} className="shadow rounded-2xl bg-blue-100 overflow-hidden">
                <img src={service.img} alt="" className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-center">{service.title}</h2>
                  <p className="text-center text-sm">Get {service.title} on Easy EMI basis from Green Apple Financial Services Pvt. Ltd.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

       
        <div className="flex flex-col lg:flex-row gap-6 bg-gray-100 p-4">
          <div className="flex-1 flex justify-center items-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md lg:pb-45">
              <h2 className="text-2xl font-bold text-center mb-4">Loan EMI Calculator</h2>
              <label className="block mb-2 font-medium">Loan Amount (₹)</label>
              <input type="number" className="w-full p-2 mb-4 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter amount" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
              <label className="block mb-2 font-medium">Annual Interest Rate (%)</label>
              <input type="number" step="0.01" className="w-full p-2 mb-4 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter interest rate" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
              <label className="block mb-2 font-medium">Tenure (Years)</label>
              <input type="number" className="w-full p-2 mb-4 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter years" value={loanTenure} onChange={(e) => setLoanTenure(e.target.value)} />
              <button onClick={calculateEMI} className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition cursor-pointer">Calculate EMI</button>
              {emi && <div className="mt-4 p-3 bg-green-50 text-green-700 font-semibold text-center rounded-lg">{emi}</div>}
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={imagecalc} alt="" className="w-full max-w-sm rounded-xl" />
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;