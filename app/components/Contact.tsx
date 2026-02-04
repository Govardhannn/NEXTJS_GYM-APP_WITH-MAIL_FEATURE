"use client";

import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/send/mail",
        { name, email, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      setName("");
      setEmail("");
      setMessage("");

      toast.success(data.message);
    } catch (error: unknown) {
     console.log ( "Something went wrong", error);
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 text-white">
      
      {/* Glass Card */}
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.25)] p-10">
        
        <form onSubmit={sendMail} className="space-y-6 font-bold ">

          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-white\ text-center tracking-widest ">
            CONTACT US
          </h1>

          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">
              Name
            </label>

            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full p-3 rounded-lg
                bg-black/40
                border border-gray-700
                focus:outline-none
                focus:border-indigo-500
                focus:ring-1 focus:ring-indigo-500
                transition
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full p-3 rounded-lg
                bg-black/40
                border border-gray-700
                focus:outline-none
                focus:border-indigo-500
                focus:ring-1 focus:ring-indigo-500
                transition
              "
            />
          </div>

          {/* Message section */}
          <div>
            <label className="block text-gray-300 mb-2">
              Message
            </label>

            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
                w-full p-3 rounded-lg
                bg-black/40
                border border-gray-700
                focus:outline-none
                focus:border-indigo-500
                focus:ring-1 focus:ring-indigo-500
                transition
              "
            />
          </div>

          {/* Button  section*/}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-lg
              bg-indigo-600
              hover:bg-indigo-700
              transition-all duration-300
              font-semibold
              flex items-center justify-center gap-3
              hover:scale-[1.02]
              disabled:opacity-70
            "
          >
            {loading && <ClipLoader size={20} color="white" />}
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
