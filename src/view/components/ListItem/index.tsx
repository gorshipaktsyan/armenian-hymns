import { ComponentType, CSSProperties } from 'react';

import { SvgIconProps } from '@mui/material/SvgIcon';

import { HymnType, NavItemsTypes, Subtitles, Titles } from '../../../types';

import Divider from './Divider';
import ListItemStyledComponents from './styles';

interface ListItem {
  title: string | null;
  number?: number;
  id: number;
  list: NavItemsTypes[] | HymnType[] | Titles[] | Subtitles[];
  index: number;
  Icon?: ComponentType<SvgIconProps>;
  onIconClick?: (id: number) => void;
  onTitleClick: (id: number) => void;
  style?: CSSProperties;
}

const { StyledListItem, StyledListItemText, StyledDeletedIcon, StyledText } =
  ListItemStyledComponents;

function ListItem({
  title,
  number,
  id,
  list,
  index,
  Icon,
  onIconClick,
  onTitleClick,
  style
}: ListItem) {
  return (
    <>
      <StyledListItem id={id.toString()}>
        <StyledListItemText onClick={() => onTitleClick(id)}>
          <StyledText style={style}>{title}</StyledText>
          <StyledText>{number}</StyledText>
        </StyledListItemText>
        {Icon && (
          <StyledDeletedIcon>
            <Icon onClick={() => onIconClick && onIconClick(id)} />
          </StyledDeletedIcon>
        )}
      </StyledListItem>
      <Divider lastIndex={list.length - 1} index={index} />
    </>
  );
}
export default ListItem;
