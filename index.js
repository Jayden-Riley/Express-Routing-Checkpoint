import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

let app = express();
let port = 3000;

// Get the __dirname equivalent in ES module
let __fileName = fileURLToPath(import.meta.url);
let __dirName = path.dirname(__fileName);

// Use static assets from the 'public' folder
app.use(express.static(path.join(__dirName, 'public')));

// Set views path and view engine

app.set('views', './views');
app.set('view engine', 'pug');
// Custom middleware to check working hours (Monday to Friday, 9 AM - 5 PM)
function checkWorkingHours(req, res, next) {
  let currentDate = new Date();
  let currentDay = currentDate.getDay();
  let currentHour = currentDate.getHours();

  if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 9 &&
    currentHour < 17
  ) {
    return next(); // If within working hours, proceed to the next middleware
  } else {
    res.send(
      'Our services are only available during working hours (Monday to Friday, 9 AM to 5 PM).'
    );
  }
}

// Use the middleware globally
app.use(checkWorkingHours);

// Define routes for the pages
app.get('/', (req, res) => {
  // Use res.render() instead of res.sendFile()
  res.render('home', {
    title: 'Home Page',
  });
});

app.get('/services', (req, res) => {
  // Use res.render() instead of res.sendFile()
  res.render('services', {
    title: 'Services Page',
  });
});

app.get('/contact', (req, res) => {
  // Use res.render() instead of res.sendFile()
  res.render('contact', { title: 'Contact Us' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
