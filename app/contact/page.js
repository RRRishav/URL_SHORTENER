import React from "react";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-200 to-blue-400 font-sans">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-md w-full text-center">
                <h1 className="text-blue-600 mb-4 text-2xl font-bold">Contact Me</h1>
                <p className="text-gray-700 mb-8">
                    I'd love to connect! Fill out the form below or reach out via email.
                </p>
                <form>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 mb-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 mb-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full p-3 mb-4 rounded-lg border border-gray-200 resize-y focus:outline-none focus:ring-2 focus:ring-blue-300"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white p-3 px-8 rounded-lg font-bold cursor-pointer shadow-md hover:scale-105 transition-transform"
                    >
                        Send Message
                    </button>
                </form>
                <div className="mt-8 text-blue-600">
                    <a href="mailto:rishav6787@gmail.com" className="no-underline font-bold">
                        rishav6787@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}
