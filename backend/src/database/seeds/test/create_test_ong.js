
exports.seed = function(knex) {
  return knex('ongs').del()
    .then(function () {
      return knex('ongs').insert([
        {
          id: '1b339281', 
          name: 'TEST', email:"t@t.com",
          whatsapp:'5555555555',
          city: 'Campos Belos',
          uf: 'GO'
        },
      ]);
    });
};
