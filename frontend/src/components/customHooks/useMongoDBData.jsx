import { useState, useEffect } from 'react';
import { getTodosFromBackend } from '../../utils/getTodosFromBackend';

export default function useMongoDBData() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    loadTodosFromBackend();
  }, []);

  const loadTodosFromBackend = () => {
    try {
      getTodosFromBackend(setTodos);
      console.log("Daten kommen aus MongoDB");
    } catch (error) {
      console.log("Ooops, something went wrong while loading the todos from the backend: ", error);
    }
  };

  return [todos, setTodos];
}
