"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MotivationPage() {
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentTip, setCurrentTip] = useState("");

  const quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Education is the most powerful weapon which you can use to change the world.",
    "The expert in anything was once a beginner.",
    "Your time is limited, don't waste it living someone else's life.",
    "The difference between ordinary and extraordinary is that little extra.",
    "Learning never exhausts the mind.",
    "The more you learn, the more you earn.",
    "Knowledge is power. Information is liberating.",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "The beautiful thing about learning is that nobody can take it away from you.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  ];

  const studyTips = [
    "Set specific goals for each study session",
    "Use the Pomodoro Technique (25 min work, 5 min break)",
    "Eliminate distractions and create a focused environment",
    "Take active notes instead of passive reading",
    "Review and revise regularly",
    "Stay hydrated and take care of yourself",
    "Find your optimal study time and stick to it",
    "Break down complex topics into smaller chunks",
    "Teach others what you&apos;ve learned",
    "Get enough sleep - it&apos;s crucial for memory consolidation",
  ];

  useEffect(() => {
    // load random quote and tip on component mount
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomTip = studyTips[Math.floor(Math.random() * studyTips.length)];
    setCurrentQuote(randomQuote);
    setCurrentTip(randomTip);
  }, [quotes, studyTips]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        {/* main content card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Stay Focused
            </h1>
            <p className="text-xl text-white/80">
              Redirected from a distracting website
            </p>
          </div>

          {/* quotes */}
          <div className="mb-12 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-6">
                💭 Today's Motivation
              </h2>
              <blockquote className="text-2xl md:text-3xl text-white/90 italic leading-relaxed">
                &ldquo;{currentQuote}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* study tips */}
          <div className="mb-12 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-6">
                💡 Study Tip
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                {currentTip}
              </p>
            </div>
          </div>

          {/* action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              🏠 Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105"
            >
              ← Go Back
            </button>
          </div>
        </div>

        {/* footer */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            Stay focused, stay productive! 💪
          </p>
        </div>
      </div>
    </div>
  );
}
