import "./Task.css";
import { MdModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Task(props) {
  const { data, deleteTask, editTask} = props;

  return (
    <div className="list-task">
      <p className="title">
        {data.name}
      </p>
      <div className="btn-container">
        <MdModeEdit  className="btn" onClick={() => editTask(data.id)}/>
        <FaRegTrashAlt className="btn" onClick={() => deleteTask(data.id)}/>
      </div>
    </div>
  );
}
