import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
    return (
        <>
        
        <div className="bg-[#06b6d4] p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:justify-evenly gap-8 md:gap-0">

                
                <div className="md:w-[40%]">
                    <h2 className="text-lg md:text-xl font-bold py-2">The First Capital</h2>
                    <p className="md:w-[70%] text-sm md:text-base">
                        The  Capital Money is dealing in Personal Loan, Loan against Property, Project Loan
                        & Gold Loan. We believe in fair dealing and prompt disbursement of funds on a priority basis.
                    </p>
                </div>

                
                <div className="md:w-[20%]">
                    <h2 className="text-lg md:text-xl font-bold">Quick Links</h2>
                    <div className="py-2 text-sm md:text-base"><a href="#">Home</a></div>
                    <div className="py-2 text-sm md:text-base"><a href="#">About Us</a></div>
                    <div className="py-2 text-sm md:text-base"><a href="#">Loan Services</a></div>
                    <div className="py-2 text-sm md:text-base"><a href="/payments">Payment</a></div>
                </div>

               
                <div className="md:w-[20%]">
                    <h2 className="text-lg md:text-xl font-bold">Contact Us</h2>
                    <div className="flex items-start gap-2 pt-2">
                        <FaMapMarkerAlt size={20} className="flex-shrink-0" />
                        <p className="text-sm md:text-base">
                            SCO No. 156-157, 2nd Floor Sector 9C, Madhya Marg Chandigarh - 160009
                        </p>
                    </div>
                    <p className='p-4'>rahul@thecapitalmoney.com</p>
                </div>

            </div>
        </div>
        <p className='p-6'>All Right Reserved | Copyright © 2013 The Capital Money.</p>
        </>
    );
}

export default Footer;



