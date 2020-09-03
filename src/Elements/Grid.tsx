import React from 'react';
import styled from 'styled-components';

interface Line {
    x: number;
}

const Line = styled.div<Line>`
    ${({ x }) => `
      left: ${x}px;
      top:0;
      height: 100%;
      width: 1px;
      background: #f3f3e7;
      position: absolute;
    `}
`;

interface Grid {
    className?: string;
    scale: d3.ScaleLinear<number, number>;
    amountTicks: number;
}

export const Grid = styled(({ className, scale, amountTicks }: Grid) => {
    return (
        <div className={className}>
            {scale.ticks(amountTicks).map((tick) => (
                <Line key={tick} x={scale(tick)} />
            ))}
        </div>
    );
})`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
`;
