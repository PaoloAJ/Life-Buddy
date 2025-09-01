"use client";
import React from "react";

function Home() {
  return (
    <main className="min-h-screen py-10 px-6 text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to LifeBuddy
      </h1>

      {/* Coming Soon Message */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-200">
            🚀 Website Coming Soon!
          </h2>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            We&apos;re working hard to bring you an enhanced Life Buddy
            experience with more features, better analytics, and a comprehensive
            dashboard. Stay tuned for updates!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/privacy-policy"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-white/20 rounded-xl shadow-md flex items-center justify-center text-xl font-semibold hover:scale-105 transition-transform"
          >
            Tile {i + 1}
          </div>
        ))}
      </div> */}
    </main>
  );
}

export default Home;
