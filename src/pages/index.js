import React, { useState } from "react";

export default function Home() {
  const [fnum, setFnum] = useState("");
  const [snum, setSnum] = useState("");
  const [ans, setAns] = useState("");
  const [op, setOp] = useState("");
  const [show, setShow] = useState(0);
  const [eq, setEq] = useState("");
  const [ze1, setZe1] = useState(0);
  const [ze2, setZe2] = useState(0);

  const sn0 = () => {
    if (show == 0 && ze1 == 0) {
      setFnum(fnum + "0");
      if (fnum == "") {
        setZe1(1);
      }
    } else if (show == 1 && ze2 == 0) {
      setSnum(snum + "0");
      if (snum == "") {
        setZe2(1);
      }
    }
  };
  const sn1 = () => {
    if (show == 0 && ze1 == 0) {
      setFnum(fnum + "1");
    } else if (show == 1 && ze2 == 0) {
      setSnum(snum + "1");
    }
  };
  const sn2 = () => {
    if (show == 0 && ze1 == 0) {
      setFnum(fnum + "2");
    } else if (show == 1 && ze2 == 0) {
      setSnum(snum + "2");
    }
  };
  const sn3 = () => {
    if (show == 0 && ze1 == 0) {
      setFnum(fnum + "3");
    } else if (show == 1 && ze2 == 0) {
      setSnum(snum + "3");
    }
  };
  const sn4 = () => {
    if (show == 0 && ze1 == 0) {
      setFnum(fnum + "4");
    } else if (show == 1 && ze2 == 0) {
      setSnum(snum + "4");
    }
  };
  const sn5 = () => {
    if (show == 0 && ze1 == 0) {
      setFnum(fnum + "5");
    } else if (show == 1 && ze2 == 0) {
      setSnum(snum + "5");
    }
  };
  const sn6 = () => {
    if (show == 0 && ze1 == 0) {
      setFnum(fnum + "6");
    } else if (show == 1 && ze2 == 0) {
      setSnum(snum + "6");
    }
  };
  const sn7 = () => {
    if (show == 0 && ze1 == 0) {
      setFnum(fnum + "7");
    } else if (show == 1 && ze2 == 0) {
      setSnum(snum + "7");
    }
  };
  const sn8 = () => {
    if (show == 0 && ze1 == 0) {
      setFnum(fnum + "8");
    } else if (show == 1 && ze2 == 0) {
      setSnum(snum + "8");
    }
  };
  const sn9 = () => {
    if (show == 0 && ze1 == 0) {
      setFnum(fnum + "9");
    } else if (show == 1 && ze2 == 0) {
      setSnum(snum + "9");
    }
  };

  const plus = () => {
    setOp("+");
    setShow(1);
  };
  const minus = () => {
    setOp("-");
    setShow(1);
  };

  const mul = () => {
    setOp("x");
    setShow(1);
  };

  const di = () => {
    setOp("/");
    setShow(1);
  };

  const per = () => {
    if (show == 0) {
      setFnum(Number(fnum) / 100);
      setShow(1);
    } else if (show == 1) {
      setSnum(Number(snum) / 100);
    }
  };

  const dot = () => {
    if (show == 0) {
      setFnum(fnum + ".");
      setZe1(0);
    } else if (show == 1) {
      setSnum(snum + ".");
      setZe2(0);
    }
  };

  const equal = () => {
    if (fnum != "" && snum != "") {
      setEq("=");
      setShow(2);
      if (op == "+") {
        console.log(parseInt(fnum));
        console.log(parseInt(snum));
        setAns(Number(fnum) + Number(snum));
      } else if (op == "-") {
        setAns(Number(fnum) - Number(snum));
      } else if (op == "x") {
        setAns(Number(fnum) * Number(snum));
      } else if (op == "/") {
        setAns(Number(fnum) / Number(snum));
      }
    }
  };

  const reset = () => {
    setFnum("");
    setSnum("");
    setOp("");
    setAns("");
    setShow(0);
    setEq("");
    setZe1(0);
    setZe2(0);
  };

  return (
    <div className="layout">
      <h1>Calculator</h1>
      <div>
        <div className="num">
          <button onClick={sn1}>1</button>
          <button onClick={sn2}>2</button>
          <button onClick={sn3}>3</button>
          <button onClick={sn4}>4</button>
          <button onClick={sn5}>5</button>
          <button onClick={sn6}>6</button>
          <button onClick={sn7}>7</button>
          <button onClick={sn8}>8</button>
          <button onClick={sn9}>9</button>
        </div>
        <div className="zero">
          <button onClick={sn0}>0</button>
        </div>
      </div>
      <div className="pm">
        <div className="opt">
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
          <button onClick={mul}>x</button>
          <button onClick={di}>/</button>
          <button onClick={per}>%</button>
          <button onClick={dot}>.</button>
        </div>
        <div className="eq">
          <button onClick={equal}>=</button>
          <button onClick={reset}>AC</button>
        </div>
      </div>
      <div className="answer">
        <h1>{fnum}</h1>
        <h1>{op}</h1>
        <h1>{snum}</h1>
        <h1>{eq}</h1>
        <h1>{ans}</h1>
      </div>
    </div>
  );
}
