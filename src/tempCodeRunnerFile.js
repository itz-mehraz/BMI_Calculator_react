
import React, { useState } from 'react';
import './app.css';
import InputField from './InputField';
import Button from './Button';
import Result from './Result';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('cm');
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState('');

  function calculateBMI() {
    let h;
    if (unit === 'cm') {
      h = height / 100;
    } else if (unit === 'feet') {
      h = height * 0.3048;
    } else if (unit === 'inches') {
      h = height * 0.0254;
    }

    const calculatedBMI = weight / (h * h);
    setBMI(calculatedBMI);

    if (calculatedBMI < 16) {
      setMessage('Severe Thinness');
    } else if (calculatedBMI >= 16 && calculatedBMI < 17) {
      setMessage('Moderate Thinness');
    } else if (calculatedBMI >= 17 && calculatedBMI < 18.5) {
      setMessage('Mild Thinness');
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
      setMessage('Normal (healthy weight)');
    } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
      setMessage('Overweight');
    } else if (calculatedBMI >= 30 && calculatedBMI < 35) {
      setMessage('Obese Class I');
    } else if (calculatedBMI >= 35 && calculatedBMI < 40) {
      setMessage('Obese Class II');
    } else {
      setMessage('Obese Class III');
    }
  }

  return (
    <div className="app">
      <h1>বিএমআই ক্যালকুলেটর</h1>
      <span> বিএমআই গণনা করে আপনার স্বাস্থ্য পরীক্ষা করুন<br />নিচের তথ্য গুলি সঠিক ভাবে দিন</span>

      <div className="area-input">
        <InputField
          label="Weight (in kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <div className="unit-selector">
          <label>Select Height Unit: </label>
          <select value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value="cm">Centimeters</option>
            <option value="feet">Feet</option>
            <option value="inches">Inches</option>
          </select>
        </div>
        <InputField
          label={`Height (in ${unit})`}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <Button onClick={calculateBMI}>Calculate</Button>
      </div>

      {bmi !== null && <Result bmi={bmi} message={message} />}
    </div>
  );
}
