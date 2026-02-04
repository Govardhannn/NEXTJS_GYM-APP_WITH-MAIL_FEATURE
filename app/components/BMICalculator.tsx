"use client";
import Image from "next/image";
import { useState } from "react";

import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [bmi, setBmi] = useState<string>("");

  const calculateBMI = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight and gender.");
      return;
    }

    const heightNum = Number(height);
    const weightNum = Number(weight);

    const heightInMeters = heightNum / 100;
    const bmiValue = (weightNum / (heightInMeters * heightInMeters)).toFixed(2);

    setBmi(bmiValue);

    const bmiNumber = Number(bmiValue);

    if (bmiNumber < 18.5) {
      toast.warning(
        "You are underweight. Consider seeking advice from a healthcare provider.",
      );
    } else if (bmiNumber < 24.9) {
      toast.success(
        "You have normal weight. Keep maintaining a healthy lifestyle.",
      );
    } else if (bmiNumber < 29.9) {
      toast.warning(
        "You are overweight. Consider seeking advice from a healthcare provider.",
      );
    } else {
      toast.error(
        "You are in the obese range. It is recommended to seek advice from a healthcare specialist.",
      );
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-20 items-center">
        {/* FORM */}
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold mb-6 text-white">BMI CALCULATOR</h1>

          <form onSubmit={calculateBMI} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-300">Height (cm)</label>
              <input
                type="number"
                className="w-full  text-white p-3 rounded-lg bg-black/40 border border-gray-700 focus:outline-none focus:border-indigo-500"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300 ">Weight (kg)</label>
              <input
                type="number"
                className="w-full  text-white p-3 rounded-lg bg-black/40 border border-gray-700 focus:outline-none focus:border-indigo-500"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Gender</label>
              <select
                className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 focus:outline-none focus:border-indigo-500 text-white"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold"
            >
              Calculate BMI
            </button>

            {bmi && (
              <p className="text-xl text-center mt-4 text-green-400 ">
                Your BMI: <span className="font-bold">{bmi}</span>
              </p>
            )}
          </form>
        </div>

        {/* IMAGE */}
        <div className="hidden md:block">
          <Image
            src="/bmi.jpg"
            alt="BMI Image"
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
