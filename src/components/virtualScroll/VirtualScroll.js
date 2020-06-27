import React, { useRef, useState, useEffect } from 'react';

const VirtualScroll = (props) => {
  const totalHeight = +props.rowHeight * +props.totalElements + 'px';
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    scrollEle.current.addEventListener("scroll", scroll);

    return () => {
    }
  })
  const scrollEle = useRef();
  let startNodeele = Math.max(0, Math.floor(scrollTop / +props.rowHeight));

  let visibleItems = props.items.slice(startNodeele, startNodeele + props.visibleItemsLength);
  let transformValue = `translateY(${startNodeele * +props.rowHeight}px)`;
  console.log('rendering', Math.random());

  const scroll = () => {
    setScrollTop(scrollEle.current.scrollTop)

  }
  const scrollContainerStyle = {
    height: props.height,
    overflowY: "scroll"
  }
  const totalHeightStyle = { height: totalHeight };
  const mainContainerStyle = { transform: transformValue }
  return (
    <div className="scrollContainer" ref={scrollEle} style={scrollContainerStyle}>
      <div style={totalHeightStyle}>
        <div className="main-container" style={mainContainerStyle}>
          {visibleItems}
        </div>
      </div>
    </div>
  )
}


export default React.memo(VirtualScroll);