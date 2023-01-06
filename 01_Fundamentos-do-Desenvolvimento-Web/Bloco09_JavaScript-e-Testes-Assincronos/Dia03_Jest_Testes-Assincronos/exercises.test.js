const fetch = require('node-fetch');

const url = 'https://api.github.com/orgs/tryber/repos';

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

it('Verifica os repositóriios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator', async () => {
  const repos = await getRepos(url);
  expect(repos).toContain('sd-01-week4-5-project-todo-list');
  expect(repos).toContain('sd-01-week4-5-project-meme-generator');
});