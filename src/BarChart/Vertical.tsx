import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { Bar } from './VerticalBar';
import { Data } from '../Chart';

interface Vertical {
    scaleBand: d3.ScaleBand<string>;
    scaleLinear: d3.ScaleLinear<number, number>;
    className?: string;
    data: Data[];
}

const Vertical = styled(
    ({ className, data, scaleBand, scaleLinear }: Vertical) => {
        const barWidth = scaleBand.bandwidth();

        return (
            <div className={className}>
                {data.map(({ name, salary }) => {
                    const barHeight = Math.abs(
                        scaleLinear(salary) - scaleLinear(0)
                    );

                    const y = scaleLinear(Math.min(salary, 0)) - barHeight;

                    return (
                        <React.Fragment key={name}>
                            <Bar
                                x={scaleBand(name) ?? 0}
                                y={y}
                                height={barHeight}
                                width={barWidth}
                                value={salary}
                            />
                        </React.Fragment>
                    );
                })}
            </div>
        );
    }
)`
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
`;

export default Vertical;
