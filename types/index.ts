export interface MenuProps {
    id: string;
    url: string;
    name: string;
    icon?: string;
    sub_menu?: Array<MenuProps>;
}