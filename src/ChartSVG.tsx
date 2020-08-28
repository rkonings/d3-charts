import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { Chart } from './Chart';

const ChartSVG = styled(
    ({ className, data, width = 400, height = 400 }: Chart) => {
        const scaleBand = d3
            .scaleBand()
            .domain(data.map(({ name }) => name))
            .range([0, height]);

        const scaleLinear = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.salary) ?? 1])
            .nice()
            .range([0, width]);

        return (
            <div className={className}>
                <svg
                    viewBox={`0 0 ${width} ${height}`}
                    width={width}
                    height={height}
                >
                    {data.map(({ name, salary }) => {
                        return (
                            <React.Fragment key={name}>
                                <text
                                    alignmentBaseline="hanging"
                                    x={0}
                                    y={scaleBand(name)}
                                    height={20}
                                >
                                    {name}
                                </text>
                                <rect
                                    x={0}
                                    y={(scaleBand(name) ?? 0) + 20}
                                    height={scaleBand.bandwidth() - 30}
                                    width={scaleLinear(salary)}
                                    fill="#CCC"
                                />
                            </React.Fragment>
                        );
                    })}
                </svg>
            </div>
        );
    }
)``;

export default ChartSVG;
