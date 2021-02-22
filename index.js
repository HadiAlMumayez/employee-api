const express = require('express');
const employeeRoutes = require('./src/routes/employee.route');
const bodyparser = require('body-parser')

// Create express app
const app = express();

// Setup the server port
const port = process.env.port || 3000;

app.use(bodyparser.json());


// Define root route
app.get('/', (req, res) => {
  res.send('Hello world! go to /employees');
})

app.use('/employees', employeeRoutes);

// Listen to the port
app.listen(port, () => {
  console.log(`Express server is running at port ${port}`);
})

// Handle error
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: res.locals.error = req.app.get('env') === 'development' ? err : {}
  });
});