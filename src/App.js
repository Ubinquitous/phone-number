import React, { useState } from "react";

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState(0);

  const phoneParser = () => {
    const countryNumber = `${phoneNumber}`.substring(0, 2);
    const localNumber = `${phoneNumber}`.substring(2, 5);
    const firstNumber = `${phoneNumber}`.substring(5, 8);
    const lastNumber = `${phoneNumber}`.substring(8, 12);

    return `${countryNumber} ${localNumber}-${firstNumber}-${lastNumber}`;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>Enter your phone number</h1>
      <h1>+{phoneParser(phoneNumber)}</h1>
      <input
        type="range"
        onChange={({ target: { value } }) => setPhoneNumber(value)}
        max={999999999999}
      />
    </div>
  );
};

export default App;
