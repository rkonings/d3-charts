import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { getDomain } from './getDomain';
import { AxisBottom } from './AxisBottom';
import { Grid } from './Elements/Grid';
import Vertical from './BarChart/Vertical';

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
            .padding(0.1)
            .range([0, width]);

        const scaleLinear = d3
            .scaleLinear()
            .domain(scaleLinearDomain)
            .nice(amountTicks)
            .range([height, 0]);

        return (
            <div className={className}>
                <Grid
                    scale={scaleLinear}
                    amountTicks={amountTicks}
                    layout="VERTICAL"
                />
                <AxisBottom scale={scaleBand} amountTicks={amountTicks} />
                {data.length > 0 && (
                    <Vertical
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
