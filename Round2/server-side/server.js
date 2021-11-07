// const express = require('express');

const app = require('express')();
const {PythonShell} = require('python-shell');
const PORT = 3001;
const cors = require('cors');

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.get("/runpy", (req, res) => {
  PythonShell.run('C:/Users/aabha/Downloads/Final_myntra/Final_myntra/pyscripts/hand_ges.py', null, function (err, results) {
    if (err) throw err;
    console.log('finished');
    console.log("RES " + results);
    res.send("FINISHED :)")
  });
});

app.get("/rungame", (req, res) => {
  PythonShell.run('platformer_tut1.py', null, function (err, results) {
    if (err) throw err;
    console.log('finished');
    console.log("RES " + results);
    res.send("FINISHED :)")
  });
});

app.get('/', (req, res) => {
  console.log("working");
})
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})