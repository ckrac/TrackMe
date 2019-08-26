import { ESVGIcon } from '../enums';

export interface INavLink {
  name: string;
  route: string;
}

export interface INavLinkIcon extends INavLink {
  icon: ESVGIcon;
}
