import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    event.preventDefault();

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = (event) => {
    event.preventDefault();
    props.passNote(note);
    setNote(()=>{
      return({
        title:'',
        content:'',
      })
    })
  };
  const expandIt = () => {
    setExpand(true);
  };
  const btoNormal = () => {
    setExpand(true);
  };

  return (
    <>
      <form onDoubleClick={btoNormal} className="createnote">
        {expand ? (
          <input
            value={note.title}
            name="title"
            type="text"
            onChange={InputEvent}
            placeholder="Title"
            autoComplete="off"
          />
        ) : null}
        <textarea
          value={note.content}
          onChange={InputEvent}
          name="content"
          rows=""
          cols=""
          placeholder="Write A note"
          autoComplete="off"
          onClick={expandIt}
        />
        {expand ? (
          <Button onClick={addEvent} className="btn">
            <AddIcon/>
            <h3>   Add Notes</h3>
          </Button>
        ) : null}
      </form>
    </>
  );
};

export default CreateNote;
