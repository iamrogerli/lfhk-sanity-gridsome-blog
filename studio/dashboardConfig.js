export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2fd89c17794b335a66abe9',
                  title: 'Sanity Studio',
                  name: 'lfhk-sanity-gridsome-blog-studio',
                  apiId: 'b34aec24-dc70-4b79-b3c9-f1cad6e2b9f8'
                },
                {
                  buildHookId: '5f2fd89c7f23736651a08484',
                  title: 'Blog Website',
                  name: 'lfhk-sanity-gridsome-blog',
                  apiId: '91ae133c-0551-4909-8cdd-d5b552265c2b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamrogerli/lfhk-sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://lfhk-sanity-gridsome-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
