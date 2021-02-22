exports.up = function (knex) {
    return knex.schema.createTable('employees', (table) => {
        table.increments('id');
        table.string('name');
        table.date('date_of_joining');
        table.string('department');
        table.decimal('salary', 11, 2);
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('employees');
};