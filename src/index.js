import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { authRouter } from './modules/authentication/router/authentication.router.js';
import { casesRouter } from './modules/cases/router/cases.router.js';

const app = express();

// Config
app.set('port', 3100);

// Intermediarios
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/authentication', authRouter);
app.use('/cases', casesRouter);

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});