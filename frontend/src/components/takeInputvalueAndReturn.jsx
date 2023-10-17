import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import AddTaskIcon from '@mui/icons-material/AddTask';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PinkButton } from "../styled/PinkButton";
import { Inputfield } from "../styled/InputFieldWrap";
import { addTodoToDatabase } from "../utils/addTodoToDatabase";
import {v4 as uuidv4} from "uuid";


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

export default function InputAndReturn({todos, setTodos}) {
  // variable todoTextRef mit useRef()-hook erstellen
  const todoTextRef = useRef();


  async function InputValueToToDoList() {
    const newTodo = todoTextRef.current.value;
    if (newTodo.trim() !== "") {
      const todoData = {
        todos: newTodo,
        id: uuidv4(),
      };

      try {
        await addTodoToDatabase(todoData);
        // Clear the input field
        todoTextRef.current.value = "";
        // Reload the page after the data has been successfully saved
        window.location.reload();
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  }


  // clickButtonThenInput() function bei Button onClick
  function clickButtonThenInput(e) {  // wird mit event ausgeführt.
    e.preventDefault(); // e.preventDefault() verhindert, dass die Seite neu geladen wird
    console.log("click");
    // console.log(todoTextRef) greift auf den Wet des Textfields zu (durch den refHook inputRef={todoTextRef})
    console.log(todoTextRef.current.value);
    
    InputValueToToDoList();
    
  
  }

  return (
    <>
      <Inputfield className="inputField">
        <ThemeProvider theme={theme}>
          {/* ref hook todoTextRef im Textfield */}
          <TextField inputRef={todoTextRef} className="input" id="filled-basic" label="Add ToDo..." variant="filled" color="primary" inputProps={{ style: { color: "#ff79c6" }, maxLength: 100 }}/>
        </ThemeProvider>
        {/* bei onClick wird clickButtonThenInput() ausgeführt */}
        <PinkButton onClick={clickButtonThenInput}><AddTaskIcon/></PinkButton>
      </Inputfield>
    </>
  );
}
