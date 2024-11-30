import React from 'react'

export default function Contact() {
  return (
    <div className='p-6 flex flex-col items-center bg-cover bg-center'>
      <h1 className='text-black text-3xl font-bold mb-6'>
        <strong>Contact Me!</strong>
      </h1>

      <div className='my-6 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg w-full max-w-4xl text-center'>
        <h3 className='text-lg font-semibold text-gray-700 mb-4'>
          Please do not hesitate to reach out for comments.. ❤️
        </h3>

        <div className='flex flex-col items-center text-gray-700 space-y-4'>
          <p className='flex items-center space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="#5f6368">
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
            </svg>
            <span>Blantyre, Malawi</span>
          </p>

          <p className='flex items-center space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="#5f6368">
              <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z"/>
            </svg>
            <span>099876765</span>
          </p>

          <p className='flex items-center space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="#5f6368">
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
            </svg>
            <span>yankhomhango@gmail.com</span>
          </p>
        </div>
      </div>

      <form className='w-full max-w-4xl p-6 bg-white bg-opacity-90 rounded-lg shadow-lg mt-8'>
        <textarea
          cols={50}
          rows={7}
          name="message"
          placeholder="Write your message here..."
          className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        ></textarea>
        <br />
        <button
          type="submit"
          className='w-full py-3 bg-gray-400 text-white font-semibold rounded-md hover:bg-gray-500 transition duration-200'
        >
          Submit
        </button>
      </form>
    </div>
  )
}
