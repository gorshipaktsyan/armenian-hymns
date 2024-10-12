import { Divider } from '@mui/material';

interface DividerComponent {
  lastIndex: number;
  index: number;
}

export default function DividerComponent({ lastIndex, index }: DividerComponent) {
  return index !== lastIndex ? <Divider key={index} /> : null;
}
