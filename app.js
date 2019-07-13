const express = require('express');
const cookieParser = require('cookie-parser');
const messagesRouter = require('./routes/messages');
const cors = require('cors');
const path = require("path");


const app = express();
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/messages', messagesRouter);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server running on port ${port}`));
