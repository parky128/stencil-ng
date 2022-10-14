export default {
    title: 'Components/Icon',
};

const Template = (args) => `
  <ald-icon
    icon="${args.icon}">
  </ald-icon>
`;

export const Example = Template.bind({});
Example.args = {
  icon: 'whatshot'
};