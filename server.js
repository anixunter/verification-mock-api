import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/verify", (req, res) => {
  const { code } = req.body;

  if (code.length !== 6 || code.endsWith("7")) {
    return res.status(400).send({ error: "Verification Error!" });
  }

  res.status(200).send({ message: "Verification Successfull!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
