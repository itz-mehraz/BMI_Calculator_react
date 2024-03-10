
import React from 'react';

export default function Result({ bmi, message }) {
  return (
    <h2>Your BMI is {bmi.toFixed(2)}. {message}</h2>
  );
}
