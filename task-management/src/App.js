import './App.css';
import { useState , useEffect} from "react"
import Header from "./components/Header"
import AddForm from './components/AddForm';
import Task from './components/Task';

function App() {
  const [tasks,setTask] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [title,setTitle] = useState("");
  const [editId,setEditId] = useState(null);
  const [theme,setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  function saveTask(e){
    e.preventDefault();
    if(!title){
      alert("Please add a task.")
    }else if(editId){
        const updateTask = tasks.map(item => {
          if(item.id === editId){
            return {...item,name:title}
          }
          return item;
        })
        setTask(updateTask);
        setTitle("");
        setEditId(null);
    }
    else{
      const newTask = {
        id: Math.floor(Math.random()*1000),
        name:title,
      }
      setTask([...tasks,newTask]);
      setTitle("");
    }
  }

  function editTask(taskid){
    setEditId(taskid);
    const TaskToEdit = tasks.find((item) => item.id === taskid)
    setTitle(TaskToEdit.name);
  }

  function deleteTask(taskid){
    const result = tasks.filter(item => item.id !== taskid)
    setTask(result);
    // console.log(tasks.length)
    if(tasks.length === 1) setEditId(null);
  }

  return (
    <div className={'App ' + theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className='container'>
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId}/>
        <section>
          {
          tasks.map(data => (
            <Task key={data.id} data={data} deleteTask={deleteTask} editTask={editTask}/>
          ))
          }
        </section>
      </div>
    </div>
  );
}

export default App;
