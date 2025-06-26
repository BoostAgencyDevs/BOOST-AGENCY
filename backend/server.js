const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'uploads/'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.get('/api/contenido', (req, res) => {
    try {
        const contenido = require('./content/contenido.json');
        res.json(contenido);
    } catch (error) {
        res.status(500).json({ error: 'Error al cargar el contenido' });
    }
});

app.post('/api/contenido', (req, res) => {
    // Here we would typically save to database
    // For now, we'll just return success
    res.json({ success: true });
});

app.post('/api/form/quote', (req, res) => {
    // Handle quote form submission
    res.json({ success: true });
});

app.post('/api/form/support', (req, res) => {
    // Handle support form submission
    res.json({ success: true });
});

app.post('/api/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    res.json({ 
        success: true,
        file: `/uploads/${req.file.filename}`
    });
});

// Serve Angular frontend in production
app.use(express.static(path.join(__dirname, '../frontend/dist/frontend')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
