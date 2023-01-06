module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "books",
      [
        {
          title: "Código Limpo",
          price: 125.9,
          author: "Robert C Martin",
          isbn: "8576082675",
        },
        {
          title: "Refatoração",
          price: 129.9,
          author: "Martin Fowler",
          isbn: "8575227246",
        },
        {
          title: "Padrões de Projetos",
          price: 141.98,
          author: "Erich Gamma",
          isbn: "8573076100",
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("books", null, {});
  },
};
