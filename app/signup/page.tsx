"use client";
import React from "react";
// import {axios} from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Signup() {

    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password: "",
    });

    const Signup = async () => { console.log("you are signing up")};
  return (
    <div className="flex gap-6  flex-col items-center justify-center min-h-screen py-2">
      <h1>Sign Up</h1>
      <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} placeholder="Username" />
      <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Email" />
      <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Password" />
      <input type="submit" value="Sign Up" onClick={Signup} className="bg-blue-500  text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <p>Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link></p>
    </div>
  );
}
