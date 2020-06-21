import React, { useState } from 'react';
import './App.css';
import VirtualList from './components/virtualScroll/VirtualScroll';

const totalEle = 1000;
const grids = new Array(totalEle).fill(null).map((data, index) => {
  return (<div style={{height:'70px'}} key={index} className="grid">
    <h3>Lorem Ipsum is simply dummy text of the printing {index}</h3>
  </div>)
})


function App() {
 
  return (
    <VirtualList
    height="300px"
    totalElements = {totalEle}
    rowHeight="70"
    items={grids}
    visibleItemsLength="20"

    >
    </VirtualList>
    // <div className="scrollContainer" onScroll={scroll} style={{ height: "300px", overflowY: "scroll" }}>
    //   <div className="main-container" style={{ height: containerTotalHeight, transform: transformState }}>
    //   {visibleItemState}
    //   </div>
    // </div>
  );
}

export default App;
