import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

// Do not change code above this line
// {/:date} for express to accept an optional parameter, so that the endpoint can be called with or without a date parameter.
app.get('/api{/:date}', (req, res) => {
  const { date } = req.params;

  let parsed;
  if (!date) {
    parsed = new Date();                 // no param -> current time
  } else {
    parsed = new Date(date);             // date string like 2015-12-25
  }

  if (isNaN(parsed.getTime())) {
    return res.json({ error: 'Invalid Date' });
  }
  
  res.json({
    unix: parsed.getTime(),
    utc: parsed.toUTCString()
  });
});

// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
