import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Trashicon } from '../styled/TrashIcon';

export default function DeleteToDo({onDelete, todoId}) {

  const handleDeleteClick = () => {
    console.log("Trashicon clicked");
    onDelete(todoId); // onDelete funtion wird aufgerufen um das ToDo zu löschen. Delete selber passiert als Inline Function in createAppContainer.jsx
  }

  return (
    <Trashicon className="trashicon" onClick={handleDeleteClick}>
        <DeleteForeverIcon/>
    </Trashicon>
  );
}
