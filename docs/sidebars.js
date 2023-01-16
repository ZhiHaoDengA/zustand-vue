/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: '介绍',
      items: ['introduce/what-is-zustand',{
        type: 'category',
        label: '快速入门',
        items: [
          'introduce/start/zustand',
          'introduce/start/zustand-vue',
          // 'introduce/start/zustand-pub'
        ],
      },'introduce/compare'],
    },
    {
      type: 'category',
      label: '核心概念',
      items: [
        'core/fetch',
        'core/overwriting',
        'core/async',
        'core/subscribe',
      ],
    },{
      type: 'category',
      label: '进阶',
      items: [
        'advanced/transiend-updates',
        'advanced/using-zustand-without-react',
        'advanced/sickof-changing-nested-state',
        'advanced/no-reducer-action',
        'advanced/react-context',
        'advanced/typescript',
      ],
    },{
      type: 'category',
      label: '其它手册',
      items: ['other/notice','other/devtools'],
    }
  ],


  // But you can create a sidebar manually
  // tutorialSidebar: [
  //   {
  //     type: 'category',
  //     label: '介绍',
  //     items: ['tutorial-basics/create-a-document'],
  //   },
  //   {
  //     type: 'category',
  //     label: '123utorial',
  //     items: ['tutorial-basics/create-a-document'],
  //   },
  // ],
};

module.exports = sidebars;
