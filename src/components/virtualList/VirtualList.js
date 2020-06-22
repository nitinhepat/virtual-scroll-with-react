import React, { useRef, useState,useEffect } from 'react';

const VirtualList = (props) => {
  const totalHeight = +props.rowHeight * +props.totalElements + 'px';
  const [scrollTop,setScrollTop] = useState(0);
  // const [transformValue, setTransformState] = useState(`translateY(0)`);
  // const [visibleItems, setVisibleItem] = useState(props.items.slice(0, props.visibleItemsLength))

  useEffect(() => {
    scrollEle.current.addEventListener("scroll", scroll);

    return () => {
    }
  })
  const scrollEle = useRef();
  let startNodeele = Math.max(0,Math.floor(scrollTop / +props.rowHeight));

  let visibleItems = props.items.slice(startNodeele, startNodeele + props.visibleItemsLength);
  let transformValue = `translateY(${startNodeele*+props.rowHeight}px)`;
  console.log('rendering',Math.random());

  const scroll = () => {
    setScrollTop(scrollEle.current.scrollTop)
   
  }
  return (
    <div className="scrollContainer" ref={scrollEle} style={{ height: props.height, overflowY: "scroll" }}>
      <div  style={{ height: totalHeight}}>
      <div className="main-container" style={{transform: transformValue }}>
        {visibleItems}
      </div>
    </div>
    </div>
  )
}


export default React.memo(VirtualList);