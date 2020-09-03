import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';

interface TickLabel {
    x: number;
    width: number;
}

const TickLabel = styled.div<TickLabel>`
    ${({ x, width }) => `
        left: ${x}px;
        width: ${width}px;
        position:absolute;
        margin-left: ${-1 * width * 0.5}px;
        text-align: center;
        padding-top: 5px;
        color: #ccc;

        &::before {
            content: '';
            position: absolute;
            width: 1px;
            height: 5px;
            background: #ccc;
            left: 50%;
            top: 0;
        }

        &:first-child {
            margin-left: 0;
            text-align: left;

            &::before {
                left:0;
            }
        }

        &:last-child {
            text-align: right;
            transform: translateX(-100%);
            margin-left: 0;

            &::before {
                right:0;
                left: auto;
            }
        }
    `}
`;

interface AxisBottom {
    className?: string;
    scale: d3.ScaleLinear<number, number>;
    amountTicks: number;
}

export const AxisBottom = styled(
    ({ className, scale, amountTicks }: AxisBottom) => {
        return (
            <div className={className}>
                {scale.ticks(amountTicks).map((tick) => (
                    <TickLabel key={tick} width={50} x={scale(tick)}>
                        {tick}
                    </TickLabel>
                ))}
            </div>
        );
    }
)`
    position: absolute;
    bottom: 0px;
    width: 100%;
    border-top: 1px solid #ccc;
`;
