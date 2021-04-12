import express from 'express';
import helmet from 'helmet';
const morgan = require('morgan');

import connectDB from './config/db';
import userRoute from './apis/users';
import authRoute from './apis/auth';
import postRoute from './apis/posts';

const app = express();

connectDB();

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('listening on port 3001'));
