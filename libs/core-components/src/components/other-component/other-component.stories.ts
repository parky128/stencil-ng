import { OtherComponent } from './other-component';

export default {
  title: 'Ald Components/other-component',
};

const Template = (args: OtherComponent) => `
  <other-component first="${args.first}" middle="${args.middle}" last="${args.last}"></other-component>
`;

export const Example = Template.bind({});
Example.args = {
  first: 'John',
  middle: 'S',
  last: 'Doe'
};