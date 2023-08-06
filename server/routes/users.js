import express from "express";
import { 
    getUser,
    getUserFriends,
    addRemovefriend,
} from "../controllers/users.js";
import { verifiedToken } from "../middleware/auth.js";

const router = express.Router();

// READ
router.get("/:id", verifiedToken, getUser);
router.get("/:id/friends", verifiedToken, getUserFriends);

//UPDATE
router.patch("/:id/:friendId", verifiedToken, addRemovefriend);

export default router;