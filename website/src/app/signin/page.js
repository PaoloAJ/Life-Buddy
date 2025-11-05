"use client";
import React from "react";
import Image from "next/image";

function SignIn() {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="p-8 rounded-2xl shadow-md w-full max-w-md space-y-6 border-2 border-black-300">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="*********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center gap-2">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-white">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={() => {
            // TODO: Add your Google sign-in logic
            console.log("Google Sign In");
          }}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-50 transition cursor-pointer"
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google logo"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span>Sign In with Google</span>
        </button>
      </div>
    </div>
  );
}

export default SignIn;
