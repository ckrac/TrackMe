import React from 'react';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import TimerIcon from '@material-ui/icons/Timer';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MenubookIcon from '@material-ui/icons/Pages';
import { ESVGIcon } from '../../enums';

export const svgIcon = (icon: ESVGIcon) => {
  switch (icon) {
    case ESVGIcon.Timer:
      return <TimerIcon />;
    case ESVGIcon.Assessment:
      return <AssessmentIcon />;
    case ESVGIcon.Menubook:
      return <MenubookIcon />;
    case ESVGIcon.Inbox:
      return <InboxIcon />;
    case ESVGIcon.Mail:
      return <MailIcon />;
    default:
      return <InboxIcon />;
  }
};
