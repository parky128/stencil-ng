import { Component, h, Prop } from "@stencil/core";
import { IconClass, IconSize } from "../../utils/types";

@Component({
    tag: 'ald-icon'
})
export class AldIconComponent {
    @Prop() icon = 'whatshot';
    @Prop() iconClass?: IconClass = 'material-symbols-rounded';
    @Prop() size?: IconSize = 'md';
    @Prop() color?: string;
    @Prop() opacity?: number;

    containerClasses: string;
    iconClasses: string = '';

    componentWillLoad() {

        this.containerClasses = 'u-flex u-items-center u-justify-center u-flex-shrink-0 u-overflow-hidden';

        if (this.iconClass) {
            this.iconClasses += this.iconClass;
        } else {
            this.iconClasses += 'material-symbols-rounded';
        }

        if (this.color) {
            this.iconClasses += ' ' + this.color;
        }

        switch (this.size) {
            case 'sm':
                this.containerClasses += ' u-w-5 u-h-5';
                this.iconClasses += ' c-icon-sm';
                break;
            case 'md':
                this.containerClasses += ' u-w-6 u-h-6';
                this.iconClasses += ' c-icon-md';
                break;
            case 'lg':
                this.containerClasses += ' u-w-9 u-h-9';
                this.iconClasses += ' c-icon-lg';
                break;
            case 'xl':
                this.containerClasses += ' u-w-12 u-h-12';
                this.iconClasses += ' c-icon-xl';
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div class={ this.containerClasses }>
                <i class={ this.iconClasses }
                    style={ {opacity: `${this.opacity}`} }
                >
                    { this.icon }
                </i>
            </div>
            )
        }
    }