import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';


const app = express();
const port = process.env.PORT || 8080;


app.use(bodyParser.json({
    limit: "1mb"
}
));
app.use(express.json({
    limit: "1mb"
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    .on('error', (err) => {
        console.error('Error starting server:', err);
        process.exit(1);
    }
    );
