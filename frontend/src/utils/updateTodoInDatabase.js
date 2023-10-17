import axios from "axios";

export async function updateTodoInDatabase(todoId, updatedText) {
    try {
        
        const config = {
            method: "put", // Hier wird eine PUT-Anfrage gesendet
            url: `http://localhost:8081/updatetodo/${todoId}`,
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify({ todos: updatedText }),
        }
        console.log("UPdated text:" + updatedText)
        const res = await axios(config);
        console.log(res.data.message);
        return true; //Erfolgreich aktualisiert
    } catch (error) {
        console.log("Fetch in Frontend failed");
        return false; //Fehler beim Aktualisieren
    }
}