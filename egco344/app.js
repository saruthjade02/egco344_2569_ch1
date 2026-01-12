//node.js file for API to show gpa


const express = require('express');
const app = express();
const port = 4000;

const students = [
  { id: "6613272", name: "John Doe", department: "Computer Engineering", gpa: 3.5 },
  { id: "6613273", name: "Jane Smith", department: "Electrical Engineering", gpa: 3.8 },
  { id: "6613274", name: "Alice Johnson", department: "Mechanical Engineering", gpa: 3.2 },
  { id: "6613275", name: "Bob Brown", department: "Civil Engineering", gpa: 3.9 },
  { id: "6613276", name: "Charlie Wilson", department: "Chemical Engineering", gpa: 3.6 }
];

app.get('/', (req, res) => {
  res.send('Welcome to Student GPA API. Use /students or /students/:id');
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id === req.params.id);
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }
  res.json({ id: student.id, gpa: student.gpa });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
