const express = require("express");
const profileRoutes = express.Router();
const Robot = require("../models/Robot");
const bcrypt = require("bcryptjs");

//this is what goes to the individual profiles - it's working
profileRoutes.get("/:id", (req, res) => {

    Robot.findById(req.params.id).then(foundRobot => {
        if (!foundRobot) {
            res.status(500).send(err);
        }
        res.render("profile", { users: foundRobot });
    });
});



module.exports = profileRoutes; 