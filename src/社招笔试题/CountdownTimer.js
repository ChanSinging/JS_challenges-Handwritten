import React, { useEffect, useState } from "react";

const CountdownTimer = (initialTime = 100) => {
  const [timer, setTimer] = useState(initialTime);
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		let time;
		if(!isActive && timer>0) {
      time = setInterval(() => {
			  setTimer(prev => prev - 1);
		  }, 1000)
		} else if(time===0) {
			// 执行倒计时后的事件
		}
    return () => {
			if(time) clearTimeout(time);
		}
	}, [isActive, timer])

  const setStart = () => {
		setIsActive(false)
	}

	const setPaused = () => {
		setIsActive(true);
	}

	const setReset = () => {
   setIsActive(true);
	 setTimer(initialTime);
	}

	return (
		<div>
			<h2>倒计时</h2>
		  {isActive && <buuton onClick={setStart}>开始</buuton>}
			{!isActive && <button onClick={setPaused}>暂停</button>}
			<button onClick={setReset}>重置</button>
		</div>
	)
}

export default CountdownTimer;