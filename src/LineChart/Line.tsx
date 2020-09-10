import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { Data } from '../Chart';

interface LinePoint {
    x: number;
    y: number;
}

const LinePoint = styled.circle``;

interface Line {
    scaleBand: d3.ScaleBand<string>;
    scaleLinear: d3.ScaleLinear<number, number>;
    className?: string;
    data: Data[];
}

export const Line = styled(
    ({ className, scaleBand, scaleLinear, data }: Line) => {
        const line = d3
            .line<Data>()
            .x((d) => {
                return (scaleBand(d.name) ?? 0) + scaleBand.bandwidth() * 0.5;
            })
            .y(function (d) {
                return scaleLinear(d.salary);
            })
            .curve(d3.curveCatmullRom.alpha(0.5));

        const width = scaleBand.range()[1];
        const height = scaleLinear.range()[0];

        return (
            <div className={className}>
                <svg
                    width={width}
                    height={height}
                    viewBox={`0 0 ${width} ${height}`}
                >
                    <path d={line(data) ?? undefined} />
                    {data.map(({ name, salary }) => {
                        return (
                            <LinePoint
                                key={name}
                                cx={
                                    (scaleBand(name) || 0) +
                                    scaleBand.bandwidth() * 0.5
                                }
                                cy={scaleLinear(salary)}
                                r="4"
                                fill="#7685da"
                            />
                        );
                    })}
                </svg>
            </div>
        );
    }
)`
    position: relative;
    width: 100%;
    top: 0;
    left: 0;

    path {
        stroke: #304ffe;
        stroke-width: 2px;
        fill: none;
    }
`;
