
import React from 'react';

export default function InputField({ label, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={label}
      value={value}
      onChange={onChange}
    />
  );
}
