import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { getDomain } from './getDomain';
import { AxisBottom } from './AxisBottom';
import { Grid } from './Elements/Grid';
import Horizonal from './BarChart/Horizontal';

interface InnerChart {
    x: number;
    width: number;
    height: number;
}
const InnerChart = styled.div<InnerChart>`
    ${({ x, width, height }) => `
        position:absolute;
        left: ${x}px;
        width: ${width}px;
        height: ${height}px;
    `}
`;

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

        const axisBottomHeight = 50;
        // const axisLeftWidth = 100;

        const amountTicks = Math.ceil(width / 100);

        const chartWidth = width;
        const chartHeight = height - axisBottomHeight;

        const scaleBand = d3
            .scaleBand()
            .domain(data.map(({ name }) => name))
            .range([0, chartHeight]);

        const scaleLinear = d3
            .scaleLinear()
            .domain(scaleLinearDomain)
            .nice(amountTicks)
            .range([0, chartWidth]);

        return (
            <div className={className}>
                <InnerChart width={chartWidth} height={chartHeight} x={0}>
                    <Grid
                        scale={scaleLinear}
                        amountTicks={amountTicks}
                        layout="HORIZONTAL"
                        width={chartWidth}
                        height={chartHeight}
                    />

                    <AxisBottom
                        scale={scaleLinear}
                        width={chartWidth}
                        height={chartHeight}
                        amountTicks={amountTicks}
                    />
                    {data.length > 0 && (
                        <Horizonal
                            scaleBand={scaleBand}
                            scaleLinear={scaleLinear}
                            data={data}
                        />
                    )}
                </InnerChart>
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
