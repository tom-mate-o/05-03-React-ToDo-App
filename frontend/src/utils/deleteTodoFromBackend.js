import axios from "axios";

export async function deleteTodoFromBackend(todoId) {
    try{
        await axios.delete(`http://localhost:8081/deletetodo/${todoId}`);

        return true; //Erfolgreich gelöscht
    } catch (error) {
        console.error("Delete failed", error);
        return false; //Fehler beim Löschen
    }
}