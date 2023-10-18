import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: passwordHash,
      email,
    });

    const userSaved = await newUser.save();
    const token = await createAccesToken({
      id: userSaved._id,
    });

    res.cookie("token", token);

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      updatedAt: userSaved.updatedAt,
      createdAt: userSaved.createdAt,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => res.send("login");
