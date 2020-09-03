import React from 'react';
import { mount } from 'enzyme';
import { Grid, LineHorizontal, LineVertical } from './Grid';
import { scaleLinear } from 'd3-scale';

describe('<Grid />', () => {
    it('should render horitzonal lines', () => {
        const scale = scaleLinear().domain([0, 1]).range([0, 600]);
        console.log(scale);
        const grid = mount(
            <Grid scale={scale} amountTicks={5} layout="VERTICAL" />
        );

        expect(grid.find(LineHorizontal).exists()).toBe(true);
    });

    it('should render vertical lines', () => {
        const scale = scaleLinear().domain([0, 1]).range([0, 600]);
        const grid = mount(
            <Grid scale={scale} amountTicks={5} layout="HORIZONTAL" />
        );

        expect(grid.find(LineVertical).exists()).toBe(true);
    });
});
