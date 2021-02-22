
const knex = require('../../knex/knex');

module.exports = {

    // Get all employees
    getAllPaginate(page) {
        try {
            return knex('employees').paginate({
                perPage: 10,
                currentPage: page
            })
        } catch (error) {
            console.error(error);
        }


    },

    // Get employee by id
    getOneById(table, id) {
        try {
            return knex.select('*').from('employees').where('id', '=', id);
        } catch (error) {
            console.error(error);
        }

    },

    // Add new employee
    async addEmployee(name, date_of_joining, department, salary) {
        try {

            const [id] = await knex('employees').insert({ name: name, date_of_joining: date_of_joining, department: department, salary: salary })
            return this.getOneById('employee', id);
        } catch (error) {
            console.log('That did not go well.');
            console.error(error);
        }
    },


    // Update by id
    async updateByID(id, name, date_of_joining, department, salary) {

        try {
            return knex.select('*').from('employees').where('id', '=', id)
                .update({ name: name, date_of_joining: date_of_joining, department: department, salary: salary })
        } catch (error) {
            console.log('Error', error)
        }

    },

    // Delete by id
    deletByID(id) {
        try {
            return knex('employees')
                .where('id', '=', id)
                .del()
        } catch (error) {
            console.log('Error', error)
        }

    }
}