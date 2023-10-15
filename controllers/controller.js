const User = require("../models/user");

const controller = {
  start: (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Green Guide Hackathon App</title>
        <style>
            body {
                background-color: #0A8163;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                color: #333;
                font-family: Arial, sans-serif;
                text-align: center;
            }
    
            h1 {
                font-size: 36px;
                margin-bottom: 20px;
            }
    
            p {
                font-size: 18px;
                color: #666;
                margin-top: 20px;
            }
    
            img {
                margin-top: 12px;
                max-width: 100%;
                height: auto;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to Green Guide Hackathon App</h1>
        <p></p>
        <img src="https://scontent.fgyd9-1.fna.fbcdn.net/v/t39.30808-6/321560693_731720188479186_8023204657898928096_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FhPe07_i_T8AX8x1-_i&_nc_ht=scontent.fgyd9-1.fna&oh=00_AfCDDlQY7rEF3_HffDovVQhkebN8W8mIGco_l1m04GQV0g&oe=652FAC21" alt="Green Guide">
    </body>
    </html>
      `);
  },

  createUser: async (req, res) => {
    try {
      const newUser = new User({
        password: req.body.password,
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        isActive: req.body.isActive,
      });
      const savedUser = await newUser.save();

      res.status(201).json(savedUser);
    } catch (error) {
      console.error('DB error:', error);
      res.status(500).json({ error: 'DB error' });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      if (!users.length) {
        return res.status(404).json({ message: "No users found" });
      }
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = controller;
