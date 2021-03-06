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
                  buildHookId: '5d3eafc813d19355b943b0a7',
                  title: 'Netlife',
                  name: 'netlife2019',
                  apiId: '371ab6b8-38f2-43e5-b92b-c68e571b567d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/netliferesearch/netlife2019',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://netlife2019.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
};
