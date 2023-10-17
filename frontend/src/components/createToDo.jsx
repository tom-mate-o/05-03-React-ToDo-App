import React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import DeleteToDo from "./deleteToDo";
import { StickyNote } from "../styled/StickyNote";
import { ToDoBoard } from "../styled/ToDoBoard";
import { Relax } from "../styled/RelaxNote";
import EditToDo from "./editTodo";
const theme = createTheme({
  typography: {
    fontFamily: ["Caveat", "cursive"].join(","),
  },
});


// die Komponente ToDo bekommt die ToDos übergeben und zeigt diese an
export default function ToDo({todos, onDelete,}) {
  return (
    <ToDoBoard className="toDoBoard">
      {/* wenn das Array todos nicht leer ist, dann erstelle aus jedem ToDo im Array ein div */}
      {todos.length > 0 ? ( 
        console.log(todos),
         todos.map((todo, index) => ( 
          <React.Fragment key={index}> {/*Gibt jedem ToDo einen Key*/}
          <StickyNote className="toDo">
              <ThemeProvider theme={theme}>
                <Typography variant="h4" component="div" gutterBottom >
                  {todo.todos}
                  <DeleteToDo onDelete={onDelete} todoId={todo.id}/> {/*Komponente DeleteToDo wird gerendert. 
                  Delete selber passiert als Inline Function in createAppContainer.jsx*/}
                  <EditToDo todo={todo.todos} todoId={todo.id}/>
                </Typography>
              </ThemeProvider>
          </StickyNote>
          </React.Fragment>
         ))
      ) : (
        
        <Relax> {/*wenn das Array todos leer ist, wird eine Nachrichti angezeigt*/}
          <SelfImprovementIcon style={{fontSize: "5rem"}}/>
          <p>There is nothing to do. Sit back and unwind.<br/>Get yourself a cup of tea, champ! 🍵</p>
          </Relax>

      )}
     
    </ToDoBoard>
  );
}



