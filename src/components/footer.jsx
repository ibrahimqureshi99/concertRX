import React from 'react'

export default function PageFooter() {
    return (
        <div>
            {/* Footer Section */}
            <div className=" w-full footer">
                <div className="py-16 w-full max-w-[1062px] mx-auto">
                    <img src="images/ConcertRx-full-logo.png" alt="ConcertRX Logo" className='mx-auto mb-16' />

                    {/* Footer Nav | Columns */}
                    <div className="flex w-full justify-between mb-12 gap-8">
                        {/* Footer Nav | First Column */}
                        <div className="flex flex-col gap-[30px] w-full max-w-[145px]">
                            <h4 className="text-xl leading-5 font-bold text-zinc-800">
                                Product
                            </h4>
                            <ul className="">
                                <li className="text-sm leading-[21px] font-medium mb-3">
                                    <button>Login</button>
                                </li>
                                <li className="text-sm leading-[21px] font-medium mb-3">
                                    <button>Pricing</button>
                                </li>
                                <li className="text-sm leading-[21px] font-medium mb-3">
                                    <button>----</button>
                                </li>
                                <li className="text-sm leading-[21px] font-medium mb-3">
                                    <button>---</button>
                                </li>
                            </ul>
                        </div>

                        {/* Footer Nav | Second Column */}
                        <div className="flex flex-col gap-[30px] w-full max-w-[214.33px]">
                            <h4 className="text-xl leading-5 font-bold text-zinc-800">
                                Use Cases
                            </h4>
                            <ul className="">
                                <li className="text-sm leading-[21px] font-medium mb-3">
                                    <button>Ozempic Waiting List</button>
                                </li>
                                <li className="text-sm leading-[21px] font-medium mb-3">
                                    <button>Compounding Workflow</button>
                                </li>
                                <li className="text-sm leading-[21px] font-medium mb-3">
                                    <button>Vaccination Journey</button>
                                </li>
                                <li className="text-sm leading-[21px] font-medium mb-3">
                                    <button>Special Orders</button>
                                </li>
                                <li className="text-sm leading-[21px] font-medium">
                                    <button>Drug Journeys</button>
                                </li>
                            </ul>
                        </div>

                        {/* Footer Nav | Third Column */}
                        <div className="flex flex-col gap-[30px] w-full max-w-[146px]">
                            <h4 className="text-xl leading-5 font-bold text-zinc-800">
                                Company
                            </h4>
                            <ul className="">
                                <li className="text-sm leading-[21px] font-medium mb-3">
                                    <button>About Us</button>
                                </li>
                                <li className="text-sm leading-[21px] font-medium mb-3">
                                    <button>Careers</button>
                                </li>
                                <li className="text-sm leading-[21px] font-medium mb-3">
                                    <button>FAQs</button>
                                </li>
                            </ul>
                        </div>

                        {/* Footer Nav | Fourth Column */}
                        <div className="flex flex-col gap-[30px] w-full max-w-[214.33px]">
                            <h4 className="text-xl leading-5 font-bold text-zinc-800">
                                Support
                            </h4>
                            <ul className="">
                                <li className="text-sm leading-[21px] font-medium mb-3">
                                    <button>
                                        <span className="font-bold">Australia:</span> 0482 097 007
                                    </button>
                                </li>
                                <li className="text-sm leading-[21px] font-medium mb-3">
                                    <button>
                                        <span className="font-bold">United Kingdom:</span> 07700 174007 </button>
                                    
                                </li>
                            </ul>
                        </div>

                        {/* Footer Nav | Fifth Column */}
                        <div className="flex flex-col gap-[30px] w-full max-w-[214.33px]">
                            <h4 className="text-xl leading-5 font-bold text-zinc-800">
                                Contact us
                            </h4>
                            <ul className="">
                                <li className="text-sm leading-[21px] font-medium mb-3 flex gap-3 items-center">
                                    <div>
                                        <svg
                                            width="25"
                                            height="24"
                                            viewBox="0 0 25 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M21.6665 10C21.6665 17 12.6665 23 12.6665 23C12.6665 23 3.6665 17 3.6665 10C3.6665 7.61305 4.61472 5.32387 6.30254 3.63604C7.99037 1.94821 10.2796 1 12.6665 1C15.0535 1 17.3426 1.94821 19.0305 3.63604C20.7183 5.32387 21.6665 7.61305 21.6665 10Z"
                                                stroke="#27272A"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M12.6665 13C14.3234 13 15.6665 11.6569 15.6665 10C15.6665 8.34315 14.3234 7 12.6665 7C11.0096 7 9.6665 8.34315 9.6665 10C9.6665 11.6569 11.0096 13 12.6665 13Z"
                                                stroke="#27272A"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div>Level 29/66-84 Goulburn St Sydney NSW 2000</div>
                                </li>
                                <li className="text-sm leading-[21px] font-medium mb-3 flex gap-3 items-center">
                                    <div>
                                        <svg
                                            width="25"
                                            height="24"
                                            viewBox="0 0 25 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4.6665 4H20.6665C21.7665 4 22.6665 4.9 22.6665 6V18C22.6665 19.1 21.7665 20 20.6665 20H4.6665C3.5665 20 2.6665 19.1 2.6665 18V6C2.6665 4.9 3.5665 4 4.6665 4Z"
                                                stroke="#27272A"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M22.6665 6L12.6665 13L2.6665 6"
                                                stroke="#27272A"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div><button>finance@gigarx.capital</button></div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer | Links */}
                    {/* Links */}
                    <ul className="flex justify-center divide-x divide-zinc-600 mb-8">
                        <li className="text-base leading-4 font-medium text-zinc-800 pr-5">
                            <button>Privacy Policy</button>
                        </li>
                        <li className="text-base leading-4 font-medium text-zinc-800 px-5">
                            <button>Terms and Conditions</button>
                        </li>
                        <li className="text-base leading-4 font-medium text-zinc-800 px-5">
                            <button>EULA</button>
                        </li>
                        <li className="text-base leading-4 font-medium text-zinc-800 px-5">
                            <button>Security</button>
                        </li>
                        <li className="text-base leading-4 font-medium text-zinc-800 pl-5">
                            <button>Site Map</button>
                        </li>
                    </ul>

                    {/* Powered by */}
                    <div className="flex flex-col gap-2 justify-center text-center">
                        <p className='text-xs leading-3 font-medium text-zinc-600'>Powered by</p>
                        <img
                            src="images/GigaRx-Capital-logo.png"
                            alt="qr code"
                            className=" self-center"
                        />
                    </div>
                </div>
            </div>

            {/* Product Updates */}
            <div className=" w-full product-updates-section">
                <div className="py-20 w-full max-w-[1062px] mx-auto">
                    {/* Div with text and qr code */}
                    <div className="flex justify-between mb-12">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-[40px] leading-[54px] font-bold text-zinc-800">
                                Want to receive product updates?
                            </h2>
                            <p className="max-w-[417px] text-lg leading-[27px] font-normal text-zinc-600">
                                To opt-in to our text message update service. <br /> Text YES to +61482
                                097 007 OR Scan the QR code. <br /> You can send STOP to unsubscribe
                                anytime.
                            </p>
                        </div>
                        <div>
                            <img
                                src="images/qr-code.png"
                                alt="qr code"
                                className="qr-code-box-shadow"
                            />
                        </div>
                    </div>

                    <p className="text-center text-base font-medium text-zinc-700">
                        Copyright © 2022 GigaRx Capital Pty Ltd and/or its subsidiaries or
                        affiliates. All Rights Reserved. ConcertRx, ScriptCards, ShrinkMan,
                        StoreOps and certain product names used herein are trademarks or
                        registered trademarks of GigaRx Capital Pty Ltd and/or one of its
                        subsidiaries or affiliates in Australia and/or other countries. Any
                        other trademarks contained here in are the property of their
                        respective owners.
                    </p>
                </div>
            </div></div>
    )
}
