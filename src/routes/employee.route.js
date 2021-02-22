const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });


// Get all employees with pagintion
router.get('/', async (req, res) => {
    const page = req.query.page;
    const employees = await employeeController.getAllPaginate(page);
    res.send(employees).json();
})


// Get one employee by id
router.get('/:id', async (req, res) => {
    try {
        const employee = await employeeController.getOneById('employees', req.params.id);
        if (employee.length === 0) {
            res.sendStatus(404);
        }
        res.json(employee[0]);
    } catch (error) {
        console.log(error);
    }

});


// Add new employee
router.post('/', urlencodedParser, async (req, res) => {
    try {
        const employee = await employeeController.addEmployee(req.body.name, req.body.date_of_joining, req.body.department, req.body.salary);
        res.json(employee[0]);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});


// Update by id
router.patch('/:id', urlencodedParser, async (req, res) => {
    const { id } = req.params;
    const { name, date_of_joining, department, salary } = req.body;
    try {
        const employee = await employeeController.updateByID(id, name, date_of_joining, department, salary);
        if (employee === 0) {
            res.sendStatus(404);
        }
        const emp = await employeeController.getOneById('employee', id);
        res.send(emp[0]).json();
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

// Delete by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await employeeController.deletByID(id);
        res.sendStatus(204);
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }

})


module.exports = router;