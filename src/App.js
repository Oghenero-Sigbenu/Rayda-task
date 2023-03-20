import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import { getLists } from "./redux/features/list.slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLists());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-[#FCFCFD]">
      <Home />
    </div>
  );
}

export default App;
