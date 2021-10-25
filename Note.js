import React from 'react'
import Button from '@mui/material/Button';
import Delete from '@mui/icons-material/Delete';



const Note = (props) => {
    const deleteNode=()=>{
        props.deleteItem(props.id);
    }
    return <>
        <div className="notesm">
            <div className="notes">
                <h1>{props.title}</h1>
                <br/>
                <p>{props.content}</p>
                <Button className="btn2" onClick={deleteNode}><Delete className="deleteIcon"/></Button>
            </div>
        </div>
    </>
}

export default Note
