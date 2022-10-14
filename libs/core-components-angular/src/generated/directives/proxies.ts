/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@al/core-components';

import { AldOptionItem as IAldBadgeComponentAldOptionItem } from '@al/core-components';
export declare interface AldBadge extends Components.AldBadge {
  /**
   * This will fire the event on action button or dropdown menu item click, returning void, or the selected item and index. 
   */
  didAction: EventEmitter<CustomEvent<void | {option: IAldBadgeComponentAldOptionItem, index: number}>>;

}

@ProxyCmp({
  inputs: ['actionIcon', 'actionIconClass', 'actionOptions', 'icon', 'iconClass', 'label', 'lowContrast', 'rounded', 'size', 'variant']
})
@Component({
  selector: 'ald-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionIcon', 'actionIconClass', 'actionOptions', 'icon', 'iconClass', 'label', 'lowContrast', 'rounded', 'size', 'variant']
})
export class AldBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didAction']);
  }
}


export declare interface AldButton extends Components.AldButton {}

@ProxyCmp({
  inputs: ['disabled', 'fullwidth', 'icon', 'iconClass', 'iconPosition', 'label', 'loading', 'selected', 'size', 'type', 'variant']
})
@Component({
  selector: 'ald-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'fullwidth', 'icon', 'iconClass', 'iconPosition', 'label', 'loading', 'selected', 'size', 'type', 'variant']
})
export class AldButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AldIcon extends Components.AldIcon {}

@ProxyCmp({
  inputs: ['color', 'icon', 'iconClass', 'opacity', 'size']
})
@Component({
  selector: 'ald-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'icon', 'iconClass', 'opacity', 'size']
})
export class AldIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyComponent extends Components.MyComponent {}

@ProxyCmp({
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['first', 'last', 'middle']
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface OtherComponent extends Components.OtherComponent {}

@ProxyCmp({
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'other-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['first', 'last', 'middle']
})
export class OtherComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
