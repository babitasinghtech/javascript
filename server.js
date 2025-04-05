const express = require("express");

const users = require("./MOCK_DATA.json");

const app = express();
const port = 8000;

// Middleware to parse JSON requests
app.use(express.json());

// Route to display users as an HTML list
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

// REST API Endpoints

// Get all users
app.get('/api/users', (req, res) => {
    return res.json(users);
});

// Get, Update, and Delete a user by ID
app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        
        return res.json(user);
    })
    .patch((req, res) => { 
        // Edit user with given ID (Implementation pending)
        return res.json({ status: "pending" });  
    })
    .delete((req, res) => {
        // Delete user with given ID (Implementation pending)
        return res.json({ status: "pending" }); 
    });

// Create a new user
app.post("/api/users", (req, res) => {
    return res.json({ status: "pending" });
});

// Start server
app.listen(port, () => console.log(`Server Started at Port: ${port}`));
