import { useContext, useCallback, useState } from 'react';
import { MainContext } from '../main/mainContext';
import './selector.css';

export const Selector = () => {
  const [value, setValue] = useState('');
  const [context, setContext] = useContext(MainContext);
  const handleSelect = useCallback(() => e => {
    setValue(e.target.value);
    console.log({ value: context?.value, returnValue: context?.returnValue, case: e.target.value })
    setContext({ value: context?.value, returnValue: context?.returnValue, case: e.target.value });
  }, [context, setContext]);

  return (
    <select className="selector" name="select" value={value} onChange={handleSelect()}>
      <option value="р" selected>Родительный</option>
      <option value="д">Дательный</option>
      <option value="в">Винительный</option>
      <option value="т">Творительный</option>
      <option value="п">Предложный</option>
    </select>
  )
};