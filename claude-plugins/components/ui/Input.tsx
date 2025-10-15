import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-2 text-gray-700" htmlFor={props.id}>{label}</label>}
      <input
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        {...props}
      />
    </div>
  );
};

export default Input;