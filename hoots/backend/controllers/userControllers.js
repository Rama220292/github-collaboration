const express = require("express");
const router = express.Router();
const User = require("../models/User");

const { getLogger } = require("@logtape/logtape");
const logger = getLogger(["hoots", "userControllers"]);

//tests
// router.get("/", (req, res) => {
//     res.json({message: "ok"});
// });

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

/*-----------------create-----------------*/
const createUser = async (req, res) => {
  try {
    const { username, hashedPassword } = req.body;

    if (!username || !hashedPassword) {
      return res.status(400).json({ error: "username and password required" });
    }

    const user = await User.create({ username, hashedPassword });
    logger.info`Created user ${user.username}`;

    // Move the success response HERE (inside the try)
    return res.status(201).json({ user });
  } catch (error) {
    // The catch block should handle the ERROR
    logger.error`Error creating user: ${error.message}`;
    res.status(500).json({ error: error.message });
  }
};

/*-----------------index-----------------*/
const userIndex = async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
};

/*-----------------show-----------------*/
const showUser = async (req, res) => {
  const { userId } = req.params;
  try {
    // ... logic ...
  } catch (error) {
    res.status(500).json({ error }); // Changed req to res
  }
};

/*-----------------delete-----------------*/
const removeUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndDelete(userId).lean().exec();
    if (user === null) {
      return res.status(404).json({ error: "user not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error });
  }
};

/*-----------------update-----------------*/
const updateUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndUpdate(userId, req.body, {
      returnDocument: "after",
    })
      .lean()
      .exec();
    if (user === null) {
      return res.status(404).json({ error: "user not found" });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

/*-----------------Routers-----------------*/
router.post("/", createUser);
router.get("/", userIndex);
router.get("/:userId", showUser);
router.delete("/:userId", removeUser);
router.put("/:userId", updateUser);

module.exports = router;
