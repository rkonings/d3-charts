import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { getDomain } from './getDomain';
import { AxisBottom } from './AxisBottom';
import { Grid } from './Elements/Grid';
import Horizonal from './BarChart/Horizontal';

export interface Data {
    name: string;
    salary: number;
}

export interface Chart {
    data: Data[];
    className?: string;
    width?: number;
    height?: number;
}

const Chart = styled(
    ({ className, data, width = 400, height = 400 }: Chart) => {
        const scaleLinearDomain = getDomain(data);

        const amountTicks = Math.ceil(width / 100);

        const scaleBand = d3
            .scaleBand()
            .domain(data.map(({ name }) => name))
            .range([0, height]);

        const scaleLinear = d3
            .scaleLinear()
            .domain(scaleLinearDomain)
            .nice(amountTicks)
            .range([0, width]);

        return (
            <div className={className}>
                <Grid scale={scaleLinear} amountTicks={amountTicks} />
                <AxisBottom scale={scaleLinear} amountTicks={amountTicks} />
                {data.length > 0 && (
                    <Horizonal
                        scaleBand={scaleBand}
                        scaleLinear={scaleLinear}
                        data={data}
                    />
                )}
            </div>
        );
    }
)`
    ${({ width = 400, height = 400 }: Chart) => `
      width: ${width}px;
      height: ${height}px;
      position: relative;
    `}
`;

export default Chart;
