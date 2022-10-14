import { newSpecPage } from '@stencil/core/testing';
import { OtherComponent } from './other-component';

describe('other-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [OtherComponent],
      html: '<other-component></other-component>',
    });
    expect(root).toEqualHtml(`
      <other-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </other-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [OtherComponent],
      html: `<other-component first="Stencil" last="'Don't call me a framework' JS"></other-component>`,
    });
    expect(root).toEqualHtml(`
      <other-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </other-component>
    `);
  });
});
