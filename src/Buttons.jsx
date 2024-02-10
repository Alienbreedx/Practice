import { useState, useEffect } from 'react';

function Buttons() {
  const [total, setCount] = useState(() => {
    const storedCount = sessionStorage.getItem('total');
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  useEffect(() => {
    sessionStorage.setItem('total', total.toString());
  }, [total]);

  function Increasecount() {
    var copy = total;
    copy++;
    setCount(copy);
  }

  function Decreasecount() {
    var copy = total;
    copy--;
    setCount(copy);
  }
  return (
    <div>
      <button onClick={Increasecount}>Increase {total}</button>

      <button onClick={Decreasecount}>Decrease {total}</button>
    </div>
  );
}
export default Buttons;
