 const express = require('express'); // Import the Express JS library into the project
 const cors = require('cors'); // Import the CORS library to handle cross-origin requests
 //const datas = require('./db.json'); // Import the JSON data file containing the blog posts
 const fs = require('fs'); // Import the file system module to read and write files
const path = require('path'); // Import the path module to handle file paths

 const app = express(); // Create an instance of the Express application
 const PORT = process.env.PORT || 8000; // Set the port to the environment variable PORT or default to 8000

 const dataFilePath = path.join(__dirname, 'data', 'db.json'); // Define the path to the data file

 app.use(cors()); // Use CORS middleware to allow cross-origin requests   
 app.use(express.json()); // Use the JSON middleware to parse JSON requests  
 
 


 // Helper function to read data from the JSON file
function readData() {
  const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(jsonData);
}

// // Helper function to write data to the JSON file
// function writeData(data) {
//   fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
// }

// // GET all items
// app.get('/blogs', (req, res) => {
//   const items = readData();
//   res.json(items);
// });

// // POST a new item
// app.post('/blogs', (req, res) => {
//   const items = readData();
//   const newItem = { id: Date.now(), ...req.body };
//   items.push(newItem);
//   writeData(items);
//   res.status(201).json(newItem);
// });

  
 // GET all items
  app.get('/blogs', (req, res) => {
    
   const items = readData();
    res.json(items);
  });
    
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

