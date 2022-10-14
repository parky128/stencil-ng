import { Component, Event, EventEmitter, Prop, h, State } from '@stencil/core';
import { AldOptionItem, IconClass, BadgeVariant } from '../../utils/types';

/**
 * Badges add metadata or indicate status of items.
 * Providing an actionIcon renders a button making the badge actionable, aka a "chip".
 */
@Component({
    tag: 'ald-badge'
})
export class AldBadgeComponent {

    /** Text to show inside the badge (optional, but should have a label or an icon).*/
    @Prop() label?: string;

    /**
     * The icon to show inside the badge (optional, but should have a label or an icon).
     * If used with a label, the icon is positioned left of the label.
     */
    @Prop() icon?: string;

    /** Icon class for the icon. Defaults to the ald-icon default (material-symbols-rounded). */
    @Prop() iconClass?: IconClass;

    /** The Badge style variant, defaults to "default". */
    @Prop() variant?: BadgeVariant = 'default';

    /** The Badge size, defaults to "md" (optional). */
    @Prop() size?: 'xs' | 'sm' | 'md' = 'md';

    /** Low Contrast reduces the tone of the badge, where less emphasis is required, defaults to false. */
    @Prop() lowContrast?: boolean = false;

    /** Adds the full rounded style to the badge, defaults to false, but with minor rounded corners. */
    @Prop() rounded?: boolean = false;

    /** Adding an action icon to the badge renders a button, making it an actionable badge, AKA; a "chip". */
    @Prop() actionIcon?: string;

    /** Icon class for the action icon. Defaults to the default ald-icon class. */
    @Prop() actionIconClass?: IconClass;

    /** In addition to the action icon, passing an array of options to the badge will render a dropdown menu instead of a button. */
    @Prop() actionOptions?: AldOptionItem[] = [];

    /** This will fire the event on action button or dropdown menu item click, returning void, or the selected item and index.  */
    @Event() didAction: EventEmitter<void | {option: AldOptionItem, index: number}>;

    @State() badgeStyles: string = '';
    @State() sizeStyles: string = '';
    @State() roundedStyles: string = 'u-rounded-sm';

    // ngOnChanges(changes: SimpleChanges): void {
    //     if (changes['variant'] || changes['lowContrast']) {
    //         this.badgeStyles = this.setBadgeStyles();
    //     }

    //     if (changes['size'] || changes['icon'] || changes['label']) {
    //         this.sizeStyles = this.setSizeStyles();
    //     }

    //     if (changes['rounded']) {
    //         this.roundedStyles = this.setRoundedStyles();
    //     }
    // }

    componentWillLoad() {
        this.badgeStyles = this.setBadgeStyles();
        this.sizeStyles = this.setSizeStyles();
        this.roundedStyles = this.setRoundedStyles();
    }

    componentDidLoad() {
        console.log('ald-button loaded');
    }

    private setBadgeStyles(): string {
        switch (this.variant) {
            case 'info':
                return this.lowContrast ? 'u-bg-info-light u-text-info u-border-info ' : 'u-bg-info u-text-white ';
            case 'success':
                return this.lowContrast ? 'u-bg-success-light u-text-success u-border-success ' : 'u-bg-success u-text-white ';
            case 'warning':
                return this.lowContrast ? 'u-bg-warning-light u-text-warning u-border-warning ' : 'u-bg-warning u-text-white ';
            case 'danger':
                return this.lowContrast ? 'u-bg-danger-light u-text-danger u-border-danger ' : 'u-bg-danger u-text-white ';
            case 'essentials':
                return 'u-bg-essentials u-text-white ';
            case 'professional':
                return 'u-bg-professional u-text-white ';
            case 'enterprise':
                return 'u-bg-enterprise u-text-white ';
            case 'aws':
                return 'u-bg-aws u-text-white ';
            case 'azure':
                return 'u-bg-azure u-text-white ';
            case 'datacenter':
                return 'u-bg-datacenter u-text-white ';
            case 'default':
            default:
                return this.lowContrast ? 'u-bg-gray-100 u-text-secondary u-border-primary ' : 'u-bg-gray-mid-500 u-text-white ';
        }
    }

    private setSizeStyles(): string {
        switch (this.size) {
            case 'xs':
                return (this.icon && !this.label) ? 'u-w-6 u-h-6 ' : 'u-text-xxxs u-py-05 u-px-1 ';
            case 'sm':
                return (this.icon && !this.label) ? 'u-w-7 u-h-7 ' : 'u-text-xxs u-py-05 u-px-1 ';
            case 'md':
            default:
                return (this.icon && !this.label) ? 'u-w-8 u-h-8 ' : 'u-text-xs u-py-05 u-px-2 ';
        }
    }

    private setRoundedStyles(): string {
        if (this.actionIcon) {
            return 'u-rounded-full ';
        }
        return this.rounded ? 'u-rounded-full ' : 'u-rounded-sm ';
    }

    render() {
        return (
            <span class={'u-inline-flex u-items-center u-justify-center u-border u-border-solid u-border-transparent u-whitespace-nowrap ' + this.badgeStyles + this.sizeStyles + this.roundedStyles}>
                {this.icon ?
                    <ald-icon
                        icon={this.icon}
                        iconClass={this.iconClass}
                        size="sm"
                    ></ald-icon>
                : null}
                { this.label }
                {this.actionIcon ?
                    !this.actionOptions.length ?
                        <ald-button
                            size="xs"
                            variant="unstyled"
                            icon={this.actionIcon}
                            iconClass={this.actionIconClass}
                            onClick={() => this.didAction.emit()}>
                        </ald-button>
                    : 'DropDown Button HERE'
                : null
                }
            </span>
        )
    }
}
