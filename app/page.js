import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-purple-200 via-purple-100 to-white min-h-screen flex items-center justify-center">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl shadow-xl rounded-3xl bg-white/80 p-10">
        <div className="flex flex-col gap-6 items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-2">
            The best URL shortener in the Market
          </h1>
          <p className="text-lg text-gray-700">
            We are the most straightforward URL Shortener in the world.
          </p>
          <p className="text-lg text-gray-700">
            Shorten your long links instantly and share them with ease.
          </p>
          <p className="text-lg text-gray-700">
            Fast, reliable, and secure—trusted by thousands of users.
          </p>
          <ul className="flex gap-6 mt-6">
            <li>
              <Link href="/shorten">
                <button className="bg-purple-700 text-white px-6 py-2 rounded-full shadow hover:bg-purple-800 transition font-semibold text-lg">
                  Try Now
                </button>
              </Link>
            </li>
            <li>
              <Link href="/github">
                <button className="bg-white border border-purple-700 text-purple-700 px-6 py-2 rounded-full shadow hover:bg-purple-50 transition font-semibold text-lg">
                  GitHub
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center relative w-full h-full">
         
          <p className="text-xl font-semibold text-purple-700 text-center">
            Start shortening your URLs today and experience the difference!
          </p>
        </div>
      </section>
    </main>
  )
}
