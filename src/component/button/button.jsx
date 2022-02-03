import { useContext, useCallback } from 'react';
import { MainContext } from '../main/mainContext';
import toCase from '../../static/utils';
import './button.css';

export const Button = () => {
  const [context, setContext] = useContext(MainContext);
  const handleCase = useCallback(() => () => {
    setContext(
      {
        value: context?.value,
        returnValue: toCase(context?.value, context?.case),
        case: context?.case
      }
    );
  }, [context, setContext]);

  return (
    <button className="button" onClick={handleCase()}>ПОИСК</button>
  )
};