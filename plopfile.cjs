module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('component', {
    description: 'stubs out a component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name'
    }], // array of inquirer prompts
    actions: [{
      type: 'add',
      path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: 'plop-templates/component/component.tsx.hbs'
    }, {
      type: 'add',
      path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
      templateFile: 'plop-templates/component/component.test.tsx.hbs'
      }, {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/component/component.stories.tsx.hbs'
      }, {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/component/index.ts.hbs'
      }]  // array of actions
  });
};