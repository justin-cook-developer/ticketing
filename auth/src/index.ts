import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.AUTH_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Auth listening on port: `, PORT);
});