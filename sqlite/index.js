const express = require("express");
const sequelize = require('./database');
const User = require('./User');
const Roles = require('./Roles');
const Tasks = require('./Tasks');

sequelize.sync({ force: true }).then(() => console.log('db is ready'));

const app = express();

app.use(express.json());

// USERS--------------------------------------------
app.post('/users', async (req, res) => {
  await User.create(req.body);
  res.send("success");
})

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.send(users);
})

app.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({where: {id: id}});
  res.send(user);
})

app.put('/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({where: {id: id}});
  user.username = req.body.username;
  await user.save();
  res.send('updated');
})

app.delete('/users/:id', async (req, res) => {
  const id = req.params.id;
  await User.destroy({where: {id: id}});
  res.send('removed');
})

// ROLES-------------------------------------------
app.post('/roles', async (req, res) => {
  await Roles.create(req.body);
  res.send("success");
})

app.get('/roles', async (req, res) => {
  const rol = await Roles.findAll();
  res.send(rol);
})

app.get('/roles/:id', async (req, res) => {
  const id = req.params.id;
  const rol = await Roles.findOne({where: {id: id}});
  res.send(rol);
})

app.put('/roles/:id', async (req, res) => {
  const id = req.params.id;
  const rol = await Roles.findOne({where: {id: id}});
  rol.name = req.body.name;
  await rol.save();
  res.send('updated');
})

app.delete('/roles/:id', async (req, res) => {
  const id = req.params.id;
  await Roles.destroy({where: {id: id}});
  res.send('removed');
})

// TASKS-------------------------------------------
app.post('/tasks', async (req, res) => {
  await Tasks.create(req.body);
  res.send("success");
})

app.get('/tasks', async (req, res) => {
  const tasks = await Tasks.findAll();
  res.send(tasks);
})

app.get('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  const task = await Tasks.findOne({where: {id: id}});
  res.send(task);
})

app.put('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  const task = await Tasks.findOne({where: {id: id}});
  task.name = req.body.name;
  await task.save();
  res.send('updated');
})

app.delete('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  await Tasks.destroy({where: {id: id}});
  res.send('removed');
})

// ------------------------------------------------
app.listen(3000, () => {
  console.log("app is running");
});
