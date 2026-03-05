import express from 'express'
import authRoutes from "./routes/auth.js"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.json({message : "ARX is alive"});
});

app.listen(PORT, () => {
    console.log(`ARX running on ${PORT}`);
});