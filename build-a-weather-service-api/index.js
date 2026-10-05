import express from 'express';
import weatherRouter from './weather.js';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;

const app = express();

app.use('/api/weather', weatherRouter);
app.use(express.static(path.join(__dirname, "public")));

app.route('/api/data')
.get((req, res) => {
    res.status(200).json({ message: "This is the data endpoint" });
})
.post((req, res) => {
    res.status(201).json({ message: "Data has been created" });
});

app.listen(PORT, () => {
    console.log(`Weather Service API is running on http://localhost:${PORT}`);
});

app.get('/api/info', (req, res) => {
    res.json({
    name: "Weather Service API",
    version: "1.0.0",
    endpoints: ["/api/weather/:city", "/api/greet/:name", "/api/data"],
  });
});

app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/api/status', (req, res) => {
    res.status(200).json({ status: "OK" });
});

app.get('/docs', (req, res) => {
    res.redirect('/api/info');
});

app.get('/api/greet/:name', (req, res) => {
    const name = req.params?.name;
    res.status(200).json({ message: `Hello, ${name}!` });
});
