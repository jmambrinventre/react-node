const express = require("express");
const rolesSchema = require("../models/roles");

const router = express.Router();

// create roles
router.post("/roles", (req, res) => {
  const roles = rolesSchema(req.body);
  roles
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all roless
router.get("/roles", (req, res) => {
  rolesSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a roles
router.get("/roles/:id", (req, res) => {
  const { id } = req.params;
  rolesSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a roles
router.delete("/roles/:id", (req, res) => {
  const { id } = req.params;
  rolesSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a roles
router.put("/roles/:id", (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  rolesSchema
    .updateOne({ _id: id }, { $set: { name, description } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;