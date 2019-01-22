import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'o-motion',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
