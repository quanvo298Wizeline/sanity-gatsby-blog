export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f5b4aab3376bd2c66b9b2d5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-36oybued',
                  apiId: 'f0ef6e63-22cd-453e-929f-e20c89b7d399'
                },
                {
                  buildHookId: '5f5b4aab3376bd3574b9aa4a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ph4hckt8',
                  apiId: '9b07c9dd-a229-45dd-a6e9-552d87e01491'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/quanvo298Wizeline/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ph4hckt8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
