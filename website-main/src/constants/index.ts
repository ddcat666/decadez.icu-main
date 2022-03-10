import sidebarInterview from './sidebarInterview';
import sidebarHome from './sidebarHome';
import sidebarBlog from './sidebarBlog';

const siteConfig = {
  editUrl: 'https://github.com/decadez/decadez.icu-main/website-main/src/pages',
  copyright: `Copyright © ${new Date().getFullYear()} decadez Inc. All Rights Reserved.`,
  repoUrl: 'https://github.com/decadez/decadez.icu-main',
  algolia: {
    appId: 'QWGL1T9XAJ',
    apiKey: 'f91ab6952ef32a3bc0d96c27ee2ead09',
    indexName: 'new-index-1646441527',
  },
  headerIdConfig: {
    className: `anchor`,
  },
};

export { siteConfig, sidebarInterview, sidebarHome, sidebarBlog };
