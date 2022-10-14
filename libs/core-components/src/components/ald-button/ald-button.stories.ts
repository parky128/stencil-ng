import { AldButtonComponent } from './ald-button';

export default {
  title: 'Components/Button',
  // component: AldButtonComponent
};

const Template = (args: AldButtonComponent) => `
  <ald-button
    variant="${args.variant}"
    label="${args.label}"
    icon="${args.icon}"
    size="${args.size}">
  </ald-button>
`;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  variant: '',
  icon: '',
  size: ''
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
  icon: '',
  size: ''
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  icon: '',
  size: ''
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  label: 'Button',
  variant: 'primary',
  icon: 'edit',
  size: ''
};