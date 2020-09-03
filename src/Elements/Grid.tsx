import React from 'react';
import styled from 'styled-components';

interface LineVertical {
    x: number;
}

export const LineVertical = styled.div<LineVertical>`
    ${({ x }) => `
      left: ${x}px;
      top:0;
      height: 100%;
      width: 1px;
      background: #f3f3e7;
      position: absolute;
    `}
`;

interface LineHorizontal {
    y: number;
}

export const LineHorizontal = styled.div<LineHorizontal>`
    ${({ y }) => `
      top: ${y}px;
      left:0;
      height: 1px;
      width: 100%;
      background: #f3f3e7;
      position: absolute;
    `}
`;

type GridLayout = 'HORIZONTAL' | 'VERTICAL';

interface Grid {
    className?: string;
    scale: d3.ScaleLinear<number, number>;
    amountTicks: number;
    layout: GridLayout;
}

export const Grid = styled(
    ({ className, scale, amountTicks, layout }: Grid) => {
        return (
            <div className={className}>
                {scale.ticks(amountTicks).map((tick) => {
                    if (layout === 'HORIZONTAL') {
                        return <LineVertical key={tick} x={scale(tick)} />;
                    } else {
                        return <LineHorizontal key={tick} y={scale(tick)} />;
                    }
                })}
            </div>
        );
    }
)`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
`;
