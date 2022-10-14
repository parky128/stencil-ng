import { MyComponent } from './my-component';

export default {
  title: 'Ald Components/my-component',
};

const Template = (args: MyComponent) => `
  <my-component first="${args.first}" middle="${args.middle}" last="${args.last}"></my-component>
`;

export const Example = Template.bind({});
Example.args = {
  first: 'The',
  middle: 'New',
  last: 'Design Library'
};