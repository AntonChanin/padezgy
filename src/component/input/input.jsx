import { useContext, useCallback } from 'react';
import { MainContext } from '../main/mainContext';
import './input.css';

export const Input = () => {
  const [context, setContext] = useContext(MainContext);
  const handleChange = useCallback(() => e => {
    setContext({ value: e?.target.value, returnValue: context?.returnValue, case: context?.case });
  }, [context, setContext]);

  return (
    <input className='input' value={context?.value} onChange={handleChange()} />
  )
};