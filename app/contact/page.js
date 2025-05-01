import React from 'react'

const contact = () => {
    return (

        <div className=" items-center">

            <div className=' flex justify-center items-center p-6 '>
                <span className=" text-white text-3xl top-4 mt-2 font-semibold">
                    Contact Us
                </span>
                <span className="items-center mt-1"><img width={40} height={60} src="/gif/contact1.gif" alt="" /></span>
            </div>

            <div className="bg-gray-700 bg-opacity-40 w-2/3 flex h-[55vh] justify-self-center  items-center text-white rounded-3xl gap-16">

                <div className="flex items-center justify-between float-left ml-20 gap-4 " >
                    <div className="flex flex-col text-white w-1/2 gap-4 p-6 ">
                        <input className="p-2 rounded-md " type="text" placeholder="Email" />
                        <input className="p-2 rounded-md " type="text" placeholder="Name" />
                        <input className="p-2 rounded-md " type="text" placeholder="Message" />
                        <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
                    </div>

                    <div className="flex float-right gap-14 ml-48">
                        <img src="/gif/contect.gif" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default contact
