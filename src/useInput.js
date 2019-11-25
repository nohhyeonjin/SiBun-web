import { useState } from 'react';

export const useInput = (initialValue) => {
  const [ value, setValue ] = useState(initialValue);
  const onChange = (text) => {
    setValue(text);
  }
  return { value, onChange };
};

export const useNumInput = (initialValue) => {
  const [ value, setValue ] = useState(initialValue*1);
  const onChange = (text) => {
    text *= 1;
    setValue(text);
  }
  return { value, onChange };
}