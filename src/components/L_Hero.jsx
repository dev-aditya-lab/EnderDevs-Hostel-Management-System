import React from 'react'

function L_Hero() {
  return (
    <section className="relative py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            🏡 Simplifying Hostel Management for Colleges & Students
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Manage hostel rooms seamlessly. Track availability. Register students with ease.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg shadow-md hover:bg-blue-700">
              🔹 Create College Account
            </button>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg shadow-md hover:bg-green-700">
              🔹 Find Your Hostel
            </button>
          </div>
          <p className="mt-6 text-gray-600 text-sm">
            Join 100+ colleges in making hostel management effortless!
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/hero.png" 
            alt="Hero Section Image" 
            className="w-full max-w-md md:max-w-lg rounded-lg " 
          />
        </div>
      </div>
    </section>
  )
}

export default L_Hero