import React, { useState } from "react";

const Test = () => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        backgroundImage:
          "url('https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position:'relative'
      }}
    >
      {!itemCount ? (
        <button onClick={()=>setItemCount(prev=>prev+1)} style={{ position: "absolute",right:'30px',bottom:'30px' }}>+</button>
      ) : (
        <div style={{color:'white',position:'absolute',right:'30px',bottom:'30px',display:'flex',gap:'2px'}}>
          <button onClick={()=>setItemCount(prev=>prev+1)}>+</button>
          <p>{itemCount}</p>
          <button onClick={()=>setItemCount(prev=>prev-1)}>-</button>
        </div>
      )}
    </div>
  );
};

export default Test;
