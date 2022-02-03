import React from 'react';
import Button from '../button';
import Input from '../input';
import Title from '../title';
import './main.css';

export const Main = () => {
  return (
    <main className="main-canvas" >
      <div className="main-canvas_search">    
        <Input />
        <Button />
      </div>
      <Title value={'Падеж'} />
    </main>
  )
};