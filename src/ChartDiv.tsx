import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { Chart } from './Chart';

interface Bar {
    width: number;
    height: number;
    x: number;
    y: number;
}

const Bar = styled.div<Bar>`
    ${({ width, height, x, y }) => `
      position: absolute;
      width: ${width}px;
      height: ${height}px;
      top: ${y}px;
      left: ${x}px;
      background: #CCC;
  `}
`;

interface Label {
    width: number;
    height: number;
    x: number;
    y: number;
}

const Label = styled.div<Label>`
    ${({ width, height, x, y }) => `
      position: absolute;
      height: ${height}px;
      width: ${width}px;
      top: ${y}px;
      left: ${x}px;
    `}
`;

const ChartDiv = styled(
    ({ className, data, width = 400, height = 400 }: Chart) => {
        const scaleBand = d3
            .scaleBand()
            .domain(data.map(({ name }) => name))
            .range([0, height]);

        const scaleLinear = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.salary) ?? 1])
            .nice()
            .range([1, width]);

        return (
            <div className={className}>
                {data.map(({ name, salary }) => {
                    return (
                        <React.Fragment key={name}>
                            <Label
                                x={0}
                                y={scaleBand(name) ?? 0}
                                height={20}
                                width={width}
                            >
                                {name}
                            </Label>
                            <Bar
                                x={0}
                                y={(scaleBand(name) ?? 0) + 20}
                                height={scaleBand.bandwidth() - 30}
                                width={scaleLinear(salary)}
                            />
                        </React.Fragment>
                    );
                })}
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

export default ChartDiv;
