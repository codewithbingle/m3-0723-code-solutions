import { useState } from 'react';

function HotButton({ onClick }) {
  const [isCount, setIsCount] = useState(0);

  function handleClick() {
    setIsCount(isCount + 1);
  }

  const btnClassName =
    isCount >= 18
      ? 'white'
      : isCount >= 15
      ? 'yellow'
      : isCount >= 12
      ? 'lightcoral'
      : isCount >= 9
      ? 'orange'
      : isCount >= 6
      ? 'violet'
      : isCount >= 3
      ? 'darkblue'
      : 'black';

  return (
    <button onClick={handleClick} className={btnClassName}>
      Hot Button
    </button>
  );
}

export default HotButton;
