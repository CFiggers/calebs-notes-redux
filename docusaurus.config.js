// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const wikilinks = require('remark-wiki-link');
const findMD = require("./src/utils/find-markdown")

const mdMap_docs = findMD.makeMDMap(["./docs"])

function makeResolver (mdmap) {
  
  function wikiLinkResolver (inName) {

    if (typeof mdmap.get(findMD.generateSlug(inName)) === 'undefined'){
      console.log("Encountered undefined: " + inName)
      return ["sorry"]
    } else {
      let lookupVal = mdmap.get(findMD.generateSlug(inName))
      let retVal = lookupVal.fullPath || "sorry"
      return [retVal]
    }
  }

  return wikiLinkResolver
}

const linkResolver = makeResolver(mdMap_docs);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Caleb\'s Notes',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '@CalebFiggers', // Usually your GitHub org/user name.
  projectName: 'calebs-notes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [[wikilinks, {pageResolver: linkResolver,
                                       hrefTemplate: (permalink) => "/" + permalink,
                                       aliasDivider: "|"}]],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //,
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [[wikilinks, {pageResolver: linkResolver,
            hrefTemplate: (permalink) => "/" + permalink,
            aliasDivider: "|"}]],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Caleb\'s Notes',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'home',
          //   position: 'left',
          //   label: 'Caleb\'s Notes',
          // },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'guides',
            label: 'Guides',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://ko-fi.com/calebfiggers',
            label: 'Support Me ❤️',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Caleb Figgers. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
