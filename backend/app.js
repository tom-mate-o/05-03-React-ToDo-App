// app.js (backend)

require('dotenv').config(); // Laden von Umgebungsvariablen aus .env

const express = require('express');
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');
const cors = require('cors');

const connectString = process.env.MONGO_DB_CLIENT;
app.use(async(req,res,next) => {
   try {
       await mongoose.connect(connectString,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("Connected to MongoDB");
    next();

    } catch {
        console.log(error);
    }
});

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const todoSchema = new mongoose.Schema({
    todos: String,
    id: String,
});

const Todo = mongoose.model("Todos", todoSchema); //"Todos" ist der Name der Collection in der Datenbank

app.get("/health-check", (req, res) => {
    res.status(200).send({message: "I'm alive. Greetings from the backend."});
    console.log("Health-Check");
});

//Methode um die Todos aus der Datenbank zu bekommen
app.get("/gettodos", async(req, res) => {
    try {
        const todos = await Todo.find({}); // Find all todos within the filter ({})
        console.log(todos);
        res.status(200).send({"todos": todos,
                                "message": "Successfully fetched todos!"
    });
    } catch  {
        res.status(500).send({"message": "Could not fetch todos!"});
    }
}
);


//Methode um die Todos in die Datenbank zu schreiben
app.post("/addtodo", async (req, res) => {
    try {
        const todoToAdd = req.body;
        console.log(todoToAdd);
        const addedTodo = await Todo.create(todoToAdd);
        res.status(201).send({"message": "Added new todo!"});
    } catch (error) {
        console.error(error);
        res.status(500).send({"message": "Could not add todo!"});
    }
});

app.post('/addtodolist', (req, res) => {
    const todoList = req.body;
    // Hier können Sie die Logik zum Speichern der gesamten Todo-Liste in der MongoDB-Datenbank einfügen
    // Zum Beispiel: todoList.forEach(todo => { speichere todo in der Datenbank });
    res.status(201).json({ message: 'Todo-Liste wurde erfolgreich in die Datenbank eingefügt' });
  });
  

  app.delete("/deletetodo/:id", async (req, res) => {
    try {
        const todoId = req.params.id;
        await Todo.findOneAndDelete({id: todoId});
        res.status(200).send({"message": "Todo successfully deleted!"});
    } catch (error) {
        console.error("Could not delete todo",error);
        res.status(500).send({"message": "Could not delete todo!"});
    }
  });
  
  app.put("/updatetodo/:id", async (req, res) => {
    try {
        const todoId = req.params.id;
        const updatedText = req.body.todos; // Ändern Sie dies entsprechend Ihrer Datenstruktur

        await Todo.findOneAndUpdate({ id: todoId }, { todos: updatedText });


        res.status(200).send({ "message": "Todo successfully updated!" });
    } catch (error) {
        console.error("Could not update todo:", error); // Zeigen Sie den Fehler in der Konsole an
        res.status(500).send({ "message": "Could not update todo!" });
    }
});


app.listen(port, () => {
    console.log(`backend Example app listening at http://localhost:${port}`);
});

