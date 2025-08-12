import { FaLock } from 'react-icons/fa';
import indiaFlag from "./assets/indianFlag.png";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

function PaymentCredit() {
  const [formData, setFormData] = useState({
    contact: "",
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [otp, setOtp] = useState("");
  const [success, setSuccess] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === "cardNumber") {
      formattedValue = value.replace(/\D/g, "");
      formattedValue = formattedValue.replace(/(.{4})/g, "$1 ").trim();
    }

    if (name === "expiry") {
      formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length > 2) {
        formattedValue = formattedValue.slice(0, 2) + "/" + formattedValue.slice(2, 4);
      }
    }

    if (name === "contact") {
      formattedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.contact.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Mock sending OTP (Replace with real API)
    console.log(`Sending OTP to +91${formData.contact}`);
    alert(`OTP sent to +91${formData.contact}`);

 
    setShowOtpPopup(true);
  };

  
  const handleVerifyOtp = (e) => {
    e.preventDefault();

    
    if (otp === "1234") {
      setShowOtpPopup(false);
      setSuccess(true);
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <>
      
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="py-1 flex justify-end gap-2 px-2 items-center bg-gradient-to-br bg-[#4779f8] to-[#e765d2]">
          <FaPhoneAlt color="white" />
          <p className="text-white font-medium text-lg">+91 9368432124</p>
        </div>

        <div className="text-gray-800 font-medium text-[18px] flex justify-between items-center gap-8 py-4 px-4 bg-white">
          <div className="text-[30px] font-bold">Finance</div>
          <div className="flex gap-10">
            <a href="/" className="hover:underline">Home</a>
            <a href="/" className="hover:underline">About Us</a>
            <a href="/" className="hover:underline">Loan Service</a>
            <a href="/payments" className="hover:underline">Payment</a>
          </div>
        </div>
      </header>

      
      <div className="min-h-screen flex items-center justify-center w-full bg-gray-100 pt-20">
        <div className="flex justify-center items-center bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl"
          >
            <h2 className="text-lg font-bold mb-6">Credit Card/ Debit Card Payments</h2>

            
            <div className="mb-4">
              <label className="block font-medium mb-2">Phone</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Your Contact Phone"
                className="w-full border rounded-lg pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                style={{
                  backgroundImage: `url(${indiaFlag})`,
                  backgroundSize: "20px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "10px center"
                }}
              />
            </div>

           
            <div className="mb-4">
              <label className="block font-medium mb-2">Name on Card</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
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
                  maxLength="3"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            
            <button
              type="submit"
              className="px-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all cursor-pointer"
            >
              Pay Now
            </button>

            <p className="py-3 text-[14px] flex items-center gap-2">
              <FaLock /> Encrypted and Secure Payments
            </p>
          </form>
        </div>
      </div>

      
      {showOtpPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <form
            onSubmit={handleVerifyOtp}
            className="bg-white p-6 rounded-lg shadow-lg w-80"
          >
            <h3 className="text-lg font-bold mb-4">Enter OTP</h3>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowOtpPopup(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      )}

      
      {success && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-bold text-green-600">✅ Payment Successful!</h3>
            <button
              onClick={() => setSuccess(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentCredit;
