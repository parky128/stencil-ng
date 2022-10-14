import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIRECTIVES } from '../generated/directives';

defineCustomElements(window);

import { defineCustomElements } from '@al/core-components/loader';

@NgModule({
  imports: [CommonModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES]
})
export class CoreComponentsAngularModule {}
