
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        { name: 'Hadi', date_of_joining: '2020-01-01', department: 'Backend', salary: 5000 },
        { name: 'Haya', date_of_joining: '2017-01-01', department: 'Backend', salary: 6000 },
        { name: 'Nada', date_of_joining: '2018-01-01', department: 'Mobile', salary: 6500 },
      ]);
    });
};
