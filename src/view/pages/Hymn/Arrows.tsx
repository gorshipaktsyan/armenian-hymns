import { MouseEventHandler } from 'react';

import HymnStyledComponents from './styles';

interface Arrows {
  isAllowToUseArrows: boolean;
  isMobile: boolean;
  handleLeftSwipe: MouseEventHandler<HTMLElement>;
  handleRightSwipe: MouseEventHandler<HTMLElement>;
}

const {
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowLeftWrapper,
  ArrowRightWrapper,
  MobArrowRightIcon,
  MobArrowLeftIcon
} = HymnStyledComponents;

export default function Arrows({
  isAllowToUseArrows,
  isMobile,
  handleLeftSwipe,
  handleRightSwipe
}: Arrows) {
  return (
    <>
      {!isMobile ? (
        <>
          <ArrowLeftWrapper onClick={handleRightSwipe}>
            <ArrowLeftIcon />
          </ArrowLeftWrapper>
          <ArrowRightWrapper onClick={handleLeftSwipe}>
            <ArrowRightIcon />
          </ArrowRightWrapper>
        </>
      ) : (
        isAllowToUseArrows && (
          <>
            <MobArrowLeftIcon
              onClick={handleRightSwipe as unknown as MouseEventHandler<SVGSVGElement>}
            />
            <MobArrowRightIcon
              onClick={handleLeftSwipe as unknown as MouseEventHandler<SVGSVGElement>}
            />
          </>
        )
      )}
    </>
  );
}
