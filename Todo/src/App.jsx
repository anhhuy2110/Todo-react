import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div>
      <input type="text" name="add-new-task" placeholder="Add new task"></input>
      <div>
        <TodoItem/>
        <div>
          <p>Di hoc them</p>
        </div>
        <div>
          <p>Di hoc them</p>
        </div>
        <div>
          <p>Di hoc them</p>
        </div>
        <div>
          <p>Di hoc them</p>
        </div>
        <div>
          <p>Di hoc them</p>
        </div>
      </div>
    </div>
  );
}

export default App;
