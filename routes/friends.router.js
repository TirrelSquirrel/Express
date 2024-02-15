const express = require('express')

const friendsRouter = express.Router();
const friendsController = require("../controllers/friends.controller");

friendsRouter.use((req, res, next) => {
    console.log('IP:', req.ip)
    next();
})
friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getOneFriend);


module.exports = friendsRouter;