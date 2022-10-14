export default {
    title: 'Components/Badge',
};

const Template = (args) => `
  <ald-badge
    label="${args.label}"
    variant="${args.variant}"
    icon="${args.icon}">
  </ald-badge>
`;

export const Example = Template.bind({});
Example.args = {
  label: 'Badger',
  variant: 'success',
  icon: 'edit'
};