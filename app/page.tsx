"use client";
import { useState } from "react";
import Link from "next/link";

function Home() {
  const tasks = [
    { name: "Membuat Calculator", path: "/calculator" },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-green-100 to-green-200 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">PKL Nehan</h1>
        <p className="text-xl text-gray-700 mb-4 text-center">Daftar Tugas:</p>
        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center justify-between p-4 bg-green-100 rounded-lg shadow hover:bg-green-200">
              <span className="text-lg font-semibold text-green-800">{task.name}</span>
              <Link href={task.path}>
                <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
                  Pergi ke Tugas
                </button>
              </Link>
            </li>
          ))}
        </ul>
        <footer className="mt-6 text-center text-sm text-gray-500">
          Dibuat oleh Nehan | PKL 2024
        </footer>
      </div>
    </div>
  );
}

export default Home;
