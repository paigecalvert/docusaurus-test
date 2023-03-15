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
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  
  // But you can create a sidebar manually
  
  vendor: [
    {
      type: 'category',
      label: 'Vendor',
      // dirName: 'tutorial-basics',
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/create-a-blog-post',
      ],
    },
  ],
  enterprise: [
    {
      type: 'category',
      label: 'Enterprise',
      // dirName: 'tutorial-extra',
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
  ], 
};

module.exports = sidebars;
