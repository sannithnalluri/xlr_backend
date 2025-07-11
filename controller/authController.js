const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "sannithisverygood"; // Ideally use process.env.SECRET_KEY

const signup = async (req, res) => {
    const { username, password, emailid } = req.body;
    console.log(req.body);
    try {
        const existingUser = await User.findOne({ where: { username } });

        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            password: hashedPassword,
            emailid,
        });

        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
            expiresIn: "1h",
        });

        res.status(201).json({ message: "User created", token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Signup failed" });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
            expiresIn: "1h",
        });

        res.status(200).json({ message: "Authenticated successfully", token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Login failed" });
    }
};

module.exports = { signup, login };
