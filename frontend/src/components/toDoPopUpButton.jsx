import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputAndReturn from "./takeInputvalueAndReturn";
import { Title } from "../styled/Title";
import { PinkButton } from "../styled/PinkButton";
import useMediaQuery from "@mui/material/useMediaQuery";

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

export default function ToDoPopUp({todos,setTodos,todosCount,setTodosCount,}) {
// Variablen für die MUI Modal Komponente (PopUp)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      <PinkButton className="cornerButton" onClick={handleOpen}>
        <AddIcon />
      </PinkButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={isMobile ? mobileStyle : style}>
          <Title>Add To-Do</Title>
          {/* Hier wird das Inputfeld wiederverwendet */}
          <InputAndReturn
            todos={todos}
            setTodos={setTodos}
            todosCount={todosCount}
            setTodosCount={setTodosCount}
          />
        </Box>
      </Modal>
    </div>
  );
}
