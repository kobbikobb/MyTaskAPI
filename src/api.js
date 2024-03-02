import app from './app';

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.log(`Server is running on http://localhost:${PORT}`);
});
