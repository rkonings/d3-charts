import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { Bar } from './HorizontalBar';
import { Label } from '../Elements/Label';
import { Data } from '../Chart';

interface Horizontal {
    scaleBand: d3.ScaleBand<string>;
    scaleLinear: d3.ScaleLinear<number, number>;
    className?: string;
    data: Data[];
}

const Horizonal = styled(
    ({ className, data, scaleBand, scaleLinear }: Horizontal) => {
        const scaleLinearDomain = scaleLinear.domain();

        const barHeight = scaleBand.bandwidth() - 30;
        const labelHeight = 20;
        const width = scaleLinear.range()[1];

        const labelPosition =
            scaleLinearDomain[0] < 0 && scaleLinearDomain[1] <= 0
                ? 'RIGHT'
                : 'LEFT';

        return (
            <div className={className}>
                {data.map(({ name, salary }) => {
                    const barWidth = Math.abs(
                        scaleLinear(salary) - scaleLinear(0)
                    );
                    const x = scaleLinear(Math.min(salary, 0));

                    return (
                        <React.Fragment key={name}>
                            <Label
                                x={scaleLinear(0)}
                                y={scaleBand(name)}
                                height={labelHeight}
                                width={width}
                                position={labelPosition}
                            >
                                {name}
                            </Label>
                            <Bar
                                x={x}
                                y={scaleBand(name)}
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

export default Horizonal;
