"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState<string>("");
  const [shadowResult, setShadowResult] = useState<string>("");

  const handleInput = (value: string) => {
    if (value === "C") {
      setInput("");
      setShadowResult("");
    } else if (value === "=") {
      try {
        const inputMOdifikasi = input.replace(/\^/g, "**").replace(/X/g, "*");
        const result = eval(inputMOdifikasi);
        setInput(result.toString());
        setShadowResult(result.toString());
      } catch {
        setInput("Error");
        setShadowResult("");
      }
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
      setShadowResult("");
    } else if (value === ",") {
      const lastAngka = input.split(/[\+\-\*\/\(\)X]/).pop();
      if (lastAngka && !lastAngka.includes(".")) {
        setInput(input + ".");
      }
    } else {
      const newInput = input + value;
      setInput(newInput);

      try {
        const inputMOdifikasi = newInput
          .replace(/\^/g, "**")
          .replace(/X/g, "*");
        const result = eval(inputMOdifikasi);
        setShadowResult(result.toString());
      } catch {
        setShadowResult("");
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
    "(",
    "0",
    ")",
    "/",
    "C",
    "DEL",
    "=",
    "%",
    "^",
    ",",
  ];
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2 h-fit flex flex-col">
        <button className="text-xl mb-3" onClick={() => router.back()}>{"<-- Back"}</button>
        <p className="text-3xl mb-3">Calculator</p>
        <div className="mb-4 text-right text-2xl font-bold p-2 bg-gray-100 rounded">
          {input || "0"}
        </div>
        <p className="my-2 text-right text-gray-500 italic mr-2">
          hasil: {shadowResult? shadowResult : '...'}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {buttons.slice(0, 12).map((button) => (
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
        <div className="grid grid-cols-4 gap-2 mt-2">
          {buttons.slice(12).map((button) => (
            <button
              key={button}
              className={`${
                button === "C" || button === "DEL"
                  ? "bg-red-500 hover:bg-red-600"
                  : button === "="
                  ? "bg-blue-500 hover:bg-blue-600"
                  : button === "%" ||
                    button === "^" ||
                    button == "X" ||
                    button === "/" ||
                    button == "+" ||
                    button == "-" ||
                    button == "(" ||
                    button == ")" ||
                    button == ","
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-green-500 hover:bg-green-600"
              } text-white font-bold py-4 px-4 rounded`}
              onClick={() => handleInput(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
