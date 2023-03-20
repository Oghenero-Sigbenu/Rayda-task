import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLists } from "./redux/features/list.slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLists());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <h2>Rayda</h2>
    </div>
  );
}

export default App;
