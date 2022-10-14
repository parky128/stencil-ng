import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'core-components',
  taskQueue: 'async',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/core-components/dist',
    },
    {
      type: 'www',
      dir: '../../dist/libs/core-components/www',
      serviceWorker: null, // disable service workers
    },

    angularOutputTarget({
      componentCorePackage: '@al/core-components',
      directivesProxyFile: '../../../libs/core-components-angular/src/generated/directives/proxies.ts',
      directivesArrayFile: '../../../libs/core-components-angular/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};
