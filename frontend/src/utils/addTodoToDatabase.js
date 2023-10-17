import axios from "axios";

export async function addTodoToDatabase(newTodo) {
    try {
        
        const config = {
            method: "post", // Hier wird eine POST-Anfrage gesendet
            url: "http://localhost:8081/addtodo",
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(newTodo),
        }
        const res = await axios(config);
        console.log(res.data.message);
        return true; //Erfolgreich hinzugefügt
    } catch (error) {
        console.log("Fetch in Frontend failed");
        return false; //Fehler beim Hinzufügen
    }
}