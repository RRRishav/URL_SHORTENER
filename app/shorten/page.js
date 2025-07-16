'use client'

import React, { useState } from 'react'

const Shorten = () => {
    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [generated, setGenerated] = useState(false)



    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-8 text-purple-700">Generate your short URLs</h1>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col gap-4 w-full max-w-md">
                <input
                    type="text"
                    value ={url}
                    placeholder="Enter your URL"
                    onChange={e =>{
                        setUrl(e.target.value)
                    }}
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-purple-600"
                />

                <input
                    type="text"
                     value ={shortUrl}
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-purple-600"
                    placeholder="Enter your preferred short URL text"
                    onChange={e =>{
                        setShortUrl(e.target.value)
                    }}
                />

                <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
                    Generate
                </button>
            </div>
        </div>
    )
}

export default Shorten
