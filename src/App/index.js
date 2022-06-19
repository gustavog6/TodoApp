// import './App.css';
import React, {useEffect} from "react";
import { AppIU } from "./AppIU";
import { TodoProvider } from "../TodoContext"
// import { useLocalStorage } from "../TodoContext/useLocalStorage.js"

function App() {

  return (
    <TodoProvider>
      <AppIU />
    </TodoProvider>
  );
}

export default App;