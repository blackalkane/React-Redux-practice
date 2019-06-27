const express = require('express');
const cookieParser = require('cookie-parser');
const messagesRouter = require('./routes/messages');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/messages', messagesRouter);

const port = 9000;
app.listen(port, () => console.log(`Server running on port ${port}`));
