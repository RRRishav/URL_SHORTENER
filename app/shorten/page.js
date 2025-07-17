'use client'

import React, { useState } from 'react'

const Shorten = () => {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [generated, setGenerated] = useState('')

  const generate = () => {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl
    })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    fetch('/api/generate', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
        setUrl('')
        setShortUrl('')
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-purple-700">Generate your short URLs</h1>
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          value={url}
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-purple-600"
        />

        <input
          type="text"
          value={shortUrl}
          placeholder="Enter your preferred short URL text"
          onChange={(e) => setShortUrl(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-purple-600"
        />

        <button
          onClick={generate}
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
        >
          Generate
        </button>
      </div>

      {/* Render result once, correctly */}
      {generated && (
        <div className="mt-6 bg-white p-4 rounded shadow-md">
          <span className="font-bold">Your Link: </span>
          <code>
            <a href={generated} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {generated}
            </a>
          </code>
        </div>
      )}
    </div>
  )
}

export default Shorten
