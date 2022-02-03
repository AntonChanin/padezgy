import React from 'react';
import { MainProvider } from './mainContext';
import Button from '../button';
import Input from '../input';
import Title from '../title';
import './main.css';
import { Selector } from '../selector/selector';

export const Main = () => {
  return (
    <main className="main-canvas" >
      <MainProvider>
        <div className="main-canvas_body">
          <div className="main-canvas_search">    
            <Input />
            <Selector />
            <Button />
          </div>
          <Title />
        </div>       
      </MainProvider>
    </main>
  )
};