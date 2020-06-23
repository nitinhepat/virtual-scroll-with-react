import React, { useState } from 'react';
import './App.css';
import VirtualScroll from './components/virtualScroll/VirtualScroll';

const totalEle = 100000;
const grids = new Array(totalEle).fill(null).map((data, index) => {
  return (<div style={{height:'70px'}} key={index} className="grid">
    <h3>Lorem Ipsum is simply dummy text of the printing {index}</h3>
  </div>)
})


function App() {
 
  return (
    <VirtualScroll
    height="300px"
    totalElements = {totalEle}
    rowHeight={70}
    items={grids}
    visibleItemsLength={50}

    >
    </VirtualScroll>
  
  );
}

export default App;
