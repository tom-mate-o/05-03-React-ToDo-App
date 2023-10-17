import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { EditButton } from '../styled/EditButton';
import React from "react";
import { useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Title } from "../styled/Title";
import { PinkButton } from "../styled/PinkButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import TextField from "@mui/material/TextField";
import { EditFieldWrap } from '../styled/EditFieldWrap';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { updateTodoInDatabase } from '../utils/updateTodoInDatabase';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff79c6",
    },
    text: {
      primary: "#ffff",
      secondary: "#ffff",
    },
  },
});


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  backgroundColor: "#44475a",
  border: "0.5px solid #6272a4",
  borderRadius: "25px",
  padding: "16px",
  color: "#ffffff",
  textAlign: "center",

};

const mobileStyle = {
  ...style,
  width: "85%",
};

export default function ToDoPopUp({todo, todoId,}) {
// Variablen für die MUI Modal Komponente (PopUp)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [editTodo, setEditTodo] = React.useState(todo);
  const editTextRef = useRef();

  const handleEditTodoChange = (event) => {
    setEditTodo(event.target.value);
  };

 async function updateTodoInBackend() {
  const newTodo = editTextRef.current.value;
  console.log(newTodo);

  try{
    await updateTodoInDatabase(todoId, newTodo);
    window.location.reload();
    console.log("Todo updated");
  } catch (error) {
    console.error("Todo update failed", error);
  }

 }

  return (
    <div>
<EditButton className="editButton" onClick={handleOpen}>
<EditIcon/>
</EditButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={isMobile ? mobileStyle : style}>
          <Title>Edit To-Do</Title>
          <EditFieldWrap>
          <ThemeProvider theme={theme}>
          {/* ref hook todoTextRef im Textfield */}
          <TextField className="input" inputRef={editTextRef} id="filled-basic" value={editTodo} onChange={handleEditTodoChange} variant="filled" color="primary" inputProps={{ style: { color: "#ff79c6" }, maxLength: 100 }}/>
        </ThemeProvider>
          <PinkButton><CheckIcon onClick={updateTodoInBackend}/></PinkButton>
          <PinkButton><CloseIcon onClick={handleClose}/></PinkButton>
          </EditFieldWrap>
        </Box>
      </Modal>
    </div>


  );
}
