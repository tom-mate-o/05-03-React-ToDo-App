// createAppContainer.jsx
import React from 'react'
import ToDo from './createToDo'
import InputAndReturn from './takeInputvalueAndReturn'
import ToDoPopUp from './toDoPopUpButton'
import { AppContainerWrap } from '../styled/AppContainerWrap'
import { Title } from '../styled/Title'
import useMongoDBData from './customHooks/useMongoDBData'
import { deleteTodoFromBackend } from '../utils/deleteTodoFromBackend'



export default function AppContainer() {
  //Costum Hooks
  const [todos, setTodos] = useMongoDBData();
  // const [todosCount, setTodosCount] = useLocalStorage('todosCount', todos.length); // die Anzahl der todos wir aus dem LS geholt. Ist keine vorhanden wird die Länge des Arrays übergeben
  
  const onDelete = async (todoId) => {
    try {
      await deleteTodoFromBackend(todoId);
      setTodos([...todos.filter((todo) => todo.id !== todoId)]); // das ToDo mit der ID todoId wird aus dem Array todos gefiltert und das neue Array wird mit setTodos gesetzt
      //das das Array als State gesetzt wird, wird die Komponente neu gerendert und das gelöschte ToDo wird nicht mehr angezeigt
      // erst bei neu laden werden die richtigen ToDos aus der Datenbank geladen. Die sollten aber das gleiche anzeigen.
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <AppContainerWrap>
    <Title>ToDo</Title>
    {/* // an die Komponente InputAndReturn werden die ToDos und die Funktion zum setzen der ToDos übergeben inkl Anzahl der Todos*/}
    <InputAndReturn todos={todos} setTodos={setTodos}/>
    {/* // an die Komponente ToDo werden die ToDos übergeben, die diese dann anzeigt */}
    {/* + Inline Function onDelete */}
    <ToDo todos={todos} onDelete={onDelete}/>
    <ToDoPopUp todos={todos} setTodos={setTodos} />
    </AppContainerWrap>
  );
}