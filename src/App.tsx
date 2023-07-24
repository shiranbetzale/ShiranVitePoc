import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";
import './App.css';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log({ state });

  if (state.todo.isLoading) {
    return <h1>טוען....</h1>
  }

  return (
    <>
      <button onClick={(e) => { dispatch(fetchTodos()) }}>get dog</button>
      {
        state.todo.data &&
        <img
          src={state.todo.data.message}
          style={{ width: '400px', height: "400px" }}
        />
      }
    </>
  )
}

export default App
