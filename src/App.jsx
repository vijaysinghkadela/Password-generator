import { useState } from "react";

import "./App.css";

export function App() {
  const [password, setPassword] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  function generatePassword(length = 12) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    const allChars = lowerCase + upperCase + numbers + symbols;

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    return password;
  }

  const onClickGenerateHandler = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        setCopyMessage("Password copied to clipboard!");
      })
      .catch(() => {
        setCopyMessage("Failed to copy.");
      });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-red-200 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center text-red-700 mb-4">
            Password Generator
          </h1>
          <div className="flex items-center justify-between bg-white p-4 rounded-md mb-4">
            <section className="password-section text-lg font-mono text-gray-800 truncate">
              {password || "Your generated password will appear here"}
            </section>
            <button
              onClick={copyToClipboard}
              className="text-sm font-semibold text-white bg-gray-500 hover:bg-gray-600 py-1 px-2 rounded transition duration-200"
            >
              Copy to Clipboard
            </button>
          </div>
          {copyMessage && (
            <p className="text-center text-green-600 font-semibold mb-4">
              {copyMessage}
            </p>
          )}
          <div className="flex justify-center">
            <button
              onClick={onClickGenerateHandler}
              className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200"
            >
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
