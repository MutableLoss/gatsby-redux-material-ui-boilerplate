import React from 'react';

import Seo from '../components/seo';

export default {
  component: Seo,
  title: "Components/Seo",
}

const Template = args => Seo(args)
export const Default = Template.bind({})
Default.args = {
  description: 'Description',
  lang: 'Language',
  meta: [],
  title: 'SEO Title',
}