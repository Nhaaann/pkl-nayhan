"use client";
import { useState } from "react";

function Home() {
  const [input, setInput] = useState<string>("");
  const [shadowResult, setShadowResult] = useState<string>("");

  // Fungsi untuk menangani input pengguna
  const handleInput = (value: string) => {
    if (value === "C") {
      setInput("");
      setShadowResult("");
    } else if (value === "=") {
      try {
        const modifiedInput = input
          .replace(/\^/g, "**") // Mengganti ^ dengan **
          .replace(/X/g, "*");
        const result = eval(modifiedInput); // Hitung ekspresi
        setInput(result.toString());
        setShadowResult(result.toString()); // Menyimpan hasil perhitungan
      } catch {
        setInput("Error");
        setShadowResult(""); // Kosongkan hasil bayangan jika terjadi error
      }
    } else if (value === "DEL") {
      // Hapus karakter terakhir dari input
      setInput(input.slice(0, -1));
      setShadowResult(""); // Kosongkan hasil bayangan jika ada perubahan
    } else {
      // Perbarui input dan hasil bayangan jika input adalah ekspresi yang valid
      const newInput = input + value;
      setInput(newInput);

      try {
        // Coba evaluasi input baru untuk update hasil bayangan
        const modifiedInput = newInput
          .replace(/\^/g, "**") // Mengganti ^ dengan **
          .replace(/X/g, "*");
        const result = eval(modifiedInput);
        setShadowResult(result.toString());
      } catch {
        setShadowResult(""); // Kosongkan hasil bayangan jika evaluasi gagal
      }
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "X",
    "C",
    "0",
    "=",
    "/",
    "DEL",
    "%",
    "^",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2 h-fit flex flex-col">
        <p className="text-3xl mb-3">Calculator</p>
        <div className="mb-4 text-right text-2xl font-bold p-2 bg-gray-100 rounded">
          {input || "0"}
        </div>
        {shadowResult ? (
          <p className="my-2 text-right text-gray-500 italic mr-2">{shadowResult}</p>
        ) : (
          <p className="my-2 text-right text-gray-500 italic mr-2">0</p>
        )}
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((button) => (
            <button
              key={button}
              className={`${
                button === "C" || button === "DEL"
                  ? "bg-red-500 hover:bg-red-600"
                  : button === "="
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-green-500 hover:bg-green-600"
              } text-white font-bold py-4 px-4 rounded`}
              onClick={() => handleInput(button)}
            >
              {button}
            </button>
          ))}
        </div>
        <p className="mt-2 text-right">By nehan</p>

      </div>
    </div>
  );
}

export default Home;
