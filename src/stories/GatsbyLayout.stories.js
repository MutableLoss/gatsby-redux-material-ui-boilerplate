import React from 'react';

import Layout from '../components/layout';

export default {
  component: Layout,
  title: "Components/Layout",
}

const Template = args => <Layout {...args} />
export const Default = Template.bind({})
Default.args = {
  children: <div>Test</div>
}