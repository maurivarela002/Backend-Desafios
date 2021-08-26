import express from 'express';
import path from 'path';
const __dirname = path.resolve();
import fs from 'fs';
const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api', router);

const port = 8080;
app.listen(port, () => {
    console.log(`Puerto ${port} levantado!`)
});