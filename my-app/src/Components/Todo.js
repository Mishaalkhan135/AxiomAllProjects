import { useState } from "react";

const Todo = () => {
  const [arr, setArr] = useState([]);
  const [task, setTask] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [updateindex, setIndex] = useState("");
  const AddTodo = () => {
    if (!task?.length) {
      return console.log("please type task");
    }
    arr.push(task);
    setArr([...arr]);
    setTask("");
  };
  const deleteTodo = (index) => {
    arr.splice(index, 1);
    setArr([...arr]);
    CancelUpdate();
  };
  const editTodo = (index) => {
    setTask(arr[index]);
    setEdit(true);
    setIndex(index);
  };
  const CancelUpdate = () => {
    setTask("");
    setEdit(false);
  };
  const UpdateTodo = () => {
    arr[updateindex] = task;
    setTask("");
    setEdit(false);
    setIndex(null);
    setArr([...arr]);
  };
  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          name='task'
          placeholder='Add Todo'
          onChange={(e) => setTask(e.target?.value)}
          value={task}
        />
        {!isEdit ? (
          <button onClick={AddTodo}>Add Task</button>
        ) : (
          <span>
            <button onClick={UpdateTodo}>Update</button>
            <button onClick={CancelUpdate}>Cancel</button>
          </span>
        )}
      </div>
      <ol>
        {arr.map((v, i) => {
          return (
            <li key={i}>
              <span>{v}</span>
              &nbsp;
              <button onClick={() => editTodo(i)}>Edit Task</button>
              &nbsp;
              <button onClick={() => deleteTodo(i)}>Delete</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Todo;
