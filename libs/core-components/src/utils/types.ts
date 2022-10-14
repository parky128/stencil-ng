export interface AldOptionItem {
    value?: any;
    label?: string;
    id?: string | number;
    description?: string;
    icon?: string;
    iconClass?: IconClass;
    selected?: boolean;
    expanded?: boolean;
    indeterminate?: boolean;
    highlighted?: boolean;
    disabled?: boolean;
    items?: AldOptionItem[];
    data?: any;
}

export type ButtonVariant = 'default' | 'ghost' | 'primary' | 'secondary' | 'light' | 'light-ghost' | 'danger' | 'success' | 'link' | 'unstyled';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export type IconClass = 'al' | 'material-symbols-rounded' | 'material-symbols-outlined';
export type IconSize = 'sm' | 'md' | 'lg' | 'xl' ;
export type IconPosition = 'left' | 'right';

export type BadgeVariant = 'default' | 'info' | 'success' | 'warning' | 'danger' | 'essentials' | 'professional' | 'enterprise' | 'aws' | 'azure' | 'datacenter';
