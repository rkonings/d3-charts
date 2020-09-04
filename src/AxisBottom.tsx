import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';

interface TickLabel {
    x: number;
    width: number;
}

export const TickLabel = styled.div<TickLabel>`
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

interface Label {
    x?: number;
    width: number;
}

export const Label = styled.div<Label>`
    ${({ x, width }) => `
        left: ${x}px;
        width: ${width}px;
        text-align: center;
        position: absolute;
        padding-top: 5px;
        color: #ccc;
    `}
`;

const isScaleBand = (
    scale: d3.ScaleLinear<number, number> | d3.ScaleBand<string>
): scale is d3.ScaleBand<string> => {
    return (scale as d3.ScaleLinear<number, number>).ticks === undefined;
};

interface AxisBottom {
    className?: string;
    scale: d3.ScaleLinear<number, number> | d3.ScaleBand<string>;
    amountTicks: number;
}

export const AxisBottom = styled(
    ({ className, scale, amountTicks }: AxisBottom) => {
        return (
            <div className={className}>
                {!isScaleBand(scale) &&
                    scale.ticks(amountTicks).map((tick) => (
                        <TickLabel key={tick} width={50} x={scale(tick)}>
                            {tick}
                        </TickLabel>
                    ))}

                {isScaleBand(scale) &&
                    scale.domain().map((label) => {
                        return (
                            <Label
                                key={label}
                                x={scale(label)}
                                width={scale.bandwidth()}
                            >
                                {label}
                            </Label>
                        );
                    })}
            </div>
        );
    }
)`
    position: absolute;
    bottom: -1px;
    width: 100%;
    border-top: 1px solid #ccc;
`;
