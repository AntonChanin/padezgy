import { useContext } from 'react';
import { MainContext } from '../main/mainContext';
import './title.css';

export const Title = () => { 
  const [context, setContext] = useContext(MainContext);
  return (
    <h3 className="title">{context?.returnValue}</h3>
  )
};