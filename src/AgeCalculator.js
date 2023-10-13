import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthday, setBirthday] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(birthday);
    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));

    setAge(ageInYears);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
      <button onClick={calculateAge}>Calculate Age</button>
      <p>Your age is: {age}</p>
    </div>
  );
};

export default AgeCalculator;
