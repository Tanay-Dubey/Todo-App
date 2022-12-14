import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import Note from './components/Note';
import { noteAction } from './store/store';
import { useSelector,useDispatch } from 'react-redux';

function App() {
  const list=useSelector((state)=>state.note.list);
  const dispatch=useDispatch();

  const [message,setMessage]=useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
    // console.log(message);
  }

  const handleSubmit = () => {
    dispatch(noteAction.setMessage(message));
  }

  const deleteNote = (index) => {
    console.log(index);
    dispatch(noteAction.deleteMessage(index))
  }

  return (
    <div className="App">
      <div className='messageBox'>
        <textarea rows={16} cols={70} onChange={handleChange}></textarea>
        <button onClick={handleSubmit}>Create</button>
      </div>
      <div style={{ display: "flex" }}>
        {list.map((text, index) => <Note key={index} text={text} onClick={() => deleteNote(index)} />)}
      </div>
    </div>
  );
}

export default App;
