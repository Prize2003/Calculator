import React, { useCallback, useEffect, useMemo, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    if (count <= 9) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };
  const minus = () => {
    if (count >= -9) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  const re = () => {
    setCount(0);
  };

  const x = useMemo(() => {
    console.log("x: ", count);
  }, []);

  const handle = useCallback(() => {
    console.log("handle: ", count);
  }, [count]);
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="btn">
      <button onClick={minus}>down</button>
      <div>{count}</div>
      <button onClick={plus}>up</button>
      <button onClick={re}>reset</button>
      {/* <button onClick={handle}>Trick</button> */}
      {/* <button onClick={x}>Memmo</button> */}
    </div>
  );
};

export default Effect;
