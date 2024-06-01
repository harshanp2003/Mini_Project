const express = require('express');
const multer = require('multer');
const { Pool } = require('pg');
const app = express();
const path = require('path');
// const connectionString = 'postgresql://username:password@localhost:5432/database_name';
const connectionString = 'postgresql://username:Npharsha@2003@localhost:5432/miniproject';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
    connectionString: connectionString
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: function (req, file, cb) {
        // Use the original name of the file without any unique identifier
        cb(null, file.originalname);
    }
});

const upload = multer({dest: 'uploads/', storage});

app.get('/', (req, res) => {
    res.render("home");
});

app.post('/', upload.fields([
    { name: 'name' },
    { name: 'usn' },
    { name: 'imgurl' },
    { name: 'cgpa' },
    { name: 'email' },
    { name: 'sem' },
]), async (req, res) => {
    try {
        console.log('Form fields:', req.body);
        console.log('Uploaded files:', req.files);

        let imgurlPath;
        if (req.files && req.files.imgurl && req.files.imgurl[0] && req.files.imgurl[0].originalname) {
            imgurlPath = path.join(__dirname, 'uploads', req.files.imgurl[0].originalname);
        } else {
            console.error('Invalid file structure:', req.files);
            res.status(400).json({ message: 'Invalid file structure' });
            return;
        }

        const client = await pool.connect();
        try {
            await client.query('BEGIN');
            const queryText = 'INSERT INTO userdetails (email, usn, name, cgpa, sem, imgurl) VALUES ($1, $2, $3, $4, $5, $6)';
            const values = [req.body.email, req.body.usn, req.body.name, req.body.cgpa, req.body.sem, imgurlPath];
            await client.query(queryText, values);
            await client.query('COMMIT');
        } catch (err) {
            await client.query('ROLLBACK');
            throw err;
        } finally {
            client.release();
        }

        res.send('Form submitted successfully! Check your email for further updates!');
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

app.listen(3300, () => {
    console.log("server started at port 3300");
});