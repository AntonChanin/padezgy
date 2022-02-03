import { useContext, useCallback, useState } from 'react';
import { MainContext } from '../main/mainContext';
import './selector.css';

export const Selector = () => {
  const [value, setValue] = useState('');
  const [context, setContext] = useContext(MainContext);
  const handleSelect = useCallback(() => e => {
    setValue(e.target.value);
    setContext({ value: context?.value, returnValue: context?.returnValue, case: e.target.value });
  }, [context, setContext]);

  return (
    <select className="selector" name="select" value={value} onChange={handleSelect()}>
      <option value="р">Родительный (кого? чего?)</option>
      <option value="д">Дательный (кому? чему?)</option>
      <option value="в">Винительный (кого? что?)</option>
      <option value="т">Творительный (кем? чем?)</option>
      <option value="п">Предложный (о ком? о чом?)</option>
    </select>
  )
};