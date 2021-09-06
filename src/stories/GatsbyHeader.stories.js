import React from 'react';

import Header from '../components/header';

export default {
  component: Header,
  title: "Components/Header",
}
const Template = args => <Header {...args} />
export const Default = Template.bind({})
Default.args = {
  siteTitle: "Something",
}