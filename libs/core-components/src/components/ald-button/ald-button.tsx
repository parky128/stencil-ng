import { Component, h, Prop } from "@stencil/core";
import { ButtonSize, ButtonVariant, IconClass, IconPosition, IconSize } from "../../utils/types";

@Component({
    tag: 'ald-button',
    scoped: true,
    styleUrl: 'ald-button.scss'
})
export class AldButtonComponent {
    /** The button label.*/
    @Prop() label: string | number;

    /** The button element type. */
    @Prop() type?: 'button' | 'submit' | 'reset' = 'button';

    /** The button variant and style. */
    @Prop() variant?: ButtonVariant = 'default';

    /** Optionally give it an icon - use the icon name/class. */
    @Prop() icon?: string;

    /** Specify the icon class to use. Default is "material-symbols-rounded". */
    @Prop() iconClass?: IconClass = 'material-symbols-rounded';

    /** Specify the icon position. Default is "left". */
    @Prop() iconPosition?: IconPosition = 'left';

    /** Specify a button size. Default is medium: "md". */
    @Prop() size?: ButtonSize = 'md';

    /** Sets the button state to disabled. */
    @Prop() disabled?: boolean = false;

    /** Fits to the full width of their container */
    @Prop() fullwidth?: boolean = false;

    /** Sets the button state to selected. This is used in button groups with toggle. */
    @Prop() selected?: boolean = false;

    /** Sets the button to a loading state - with spinning hedgehogs. */
    @Prop() loading?: boolean = false;

    /** Icon size is calculated based on the button size and presence of the label. */
    iconSize?: IconSize = 'sm';

    buttonClasses: string;

    connectedCallback() {
        console.log('Connected Callback size:', this.size);
    }

    componentWillRender() {
        console.log(' Component Will Render size:', this.size);
    }

    componentWillLoad() {

        console.log('componentWillLoad size:', this.size);
        console.log('componentWillLoad size:', this.variant);

        if (!this.variant) {
            this.variant = 'default';
        }

        if (this.size === 'lg') {
            this.iconSize = 'md';
        }

        if (!this.label && (this.size === 'md' || this.size === 'lg')) {
            this.iconSize = 'md';
        }

        // this.buttonClasses = 'u-border u-border-solid u-rounded-sm u-font-medium focus:u-outline focus:u-outline-2 focus:u-outline-offset-2 focus:u-outline-focus';
        this.buttonClasses = 'ald-btn';

        if (this.icon && this.label) this.buttonClasses += ' u-flex u-justify-center u-items-center u-gap-1';
        if (this.icon && this.label && this.iconPosition === 'right') this.buttonClasses += ' u-flex-row-reverse';
        if (this.fullwidth) this.buttonClasses += ' u-w-100%';

        if (this.label) {
            if (this.size === 'xs') {
                this.buttonClasses += ' ald-btn--xs';
            } else if (this.size === 'sm') {
                this.buttonClasses += ' ald-btn--sm';
            } else if (this.size === 'md') {
                this.buttonClasses += ' ald-btn--md';
            } else if (this.size === 'lg') {
                this.buttonClasses += ' ald-btn--lg';
            }
        }

        if (!this.label && this.icon) {
            if (this.size === 'xs') {
                this.buttonClasses += ' ald-btn-icon--xs';
            } else if (this.size === 'sm') {
                this.buttonClasses += ' ald-btn-icon--sm';
            } else if (this.size === 'md') {
                this.buttonClasses += ' ald-btn-icon--md';
            } else if (this.size === 'lg') {
                this.buttonClasses += ' ald-btn-icon--lg';
            }
        }

        if (this.variant === 'ghost') {
            if (!this.selected) this.buttonClasses += ' ald-btn--ghost';
            if (this.selected) this.buttonClasses += ' ald-btn--selected';
        } else if (this.variant === 'primary') {
            this.buttonClasses += ' ald-btn--primary';
        } else if (this.variant === 'secondary') {
            this.buttonClasses += ' ald-btn--secondary';
        } else if (this.variant === 'light') {
            this.buttonClasses += ' ald-btn--light';
        } else if (this.variant === 'light-ghost') {
            this.buttonClasses += ' ald-btn--light-ghost';
        } else if (this.variant === 'success') {
            this.buttonClasses += ' ald-btn--success';
        } else if (this.variant === 'danger') {
            this.buttonClasses += ' ald-btn--danger';
        } else if (this.variant === 'link') {
            this.buttonClasses += ' ald-btn--link';
        } else if (this.variant === 'unstyled') {
            this.buttonClasses += ' c-reset-button';
        }

        if (this.disabled) {
            this.buttonClasses += ' u-opacity-50 u-cursor-not-allowed';
        } else {
            this.buttonClasses += ' u-cursor-pointer';
        }
    }

    render() {
        return (
            <button
                type={this.type}
                class={this.buttonClasses}
                disabled={this.disabled}
            >
                { this.icon && !this.loading ?
                    <div class="u-flex u-justify-center u-items-center u-pointer-events-none">
                        <ald-icon
                            icon={ this.icon }
                            iconClass={ this.iconClass }
                            size={ this.iconSize }>
                        </ald-icon>
                    </div>
                : null }
                { this.loading ?
                    <ald-icon
                        icon="rotate_right"
                        size={ this.iconSize }>
                    </ald-icon>
                : null }
                <div class={ 'u-pointer-events-none' +
                    (this.label && this.icon && this.iconPosition === 'left') ? 'u-pr-1' :
                    (this.label && this.icon && this.iconPosition === 'right') ? 'u-pl-1' :
                    null }
                >
                    { this.label }
                </div>
            </button>
        )
    }

}