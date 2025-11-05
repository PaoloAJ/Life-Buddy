"use client";
import React, { useState } from "react";
import { supabase } from "../supabase-client";
import Image from "next/image";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handling submission");
    console.log(email);
    console.log(password);

    const emailIsEmpty = email.trim() === "";
    const passwordIsEmpty = password.trim() === "";

    setEmailError(emailIsEmpty);
    setPasswordError(passwordIsEmpty);

    if (password.length < 8 && !passwordIsEmpty) {
      setErrorMessage("Password must be at least 8 characters long.");
      setPasswordError(true);
      return;
    }

    if (!emailIsEmpty && !passwordIsEmpty) {
      const { data, error } = await supabase.auth.signUp({ email, password });
    }
  };

  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="p-8 rounded-2xl shadow-md w-full max-w-md space-y-6 border-2 border-black-300">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-1 text-center font-semibold">
            {errorMessage}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 ${
                emailError
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              placeholder="you@example.com"
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 ${
                passwordError
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              placeholder="*********"
            />
            {passwordError && !errorMessage ? (
              <p className="text-red-500 text-sm mt-1">
                {"Password is required"}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center gap-2">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-white">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={() => {
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
          <span>Sign Up with Google</span>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
