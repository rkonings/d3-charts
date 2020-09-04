import React from 'react';
import { mount } from 'enzyme';
import { AxisLeft, TickLabel } from './AxisLeft';
import { scaleLinear } from 'd3-scale';

describe('<AxisLeft />', () => {
    it('should render an AxisLeft', () => {
        const scale = scaleLinear().domain([0, 1000]).nice(5).range([100, 0]);
        const axisLeft = mount(<AxisLeft scale={scale} amountTicks={5} />);
        expect(axisLeft.find(TickLabel).exists()).toBe(true);
    });
});
