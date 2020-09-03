import React from 'react';
import { Bar, BarLabel } from './HorizontalBar';
import { mount } from 'enzyme';
import 'jest-styled-components';

describe('<Bar />', () => {
    const getBoundingClientRect = {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 100,
        x: 0,
        y: 0,
        toJSON: () => true,
    };

    afterEach(() => {
        jest.restoreAllMocks();
        jest.resetAllMocks();
    });

    it('should render a bar', () => {
        const width = 300;
        const height = 20;
        const value = 10000;
        const x = 0;
        const wrapper = mount(
            <Bar width={width} height={height} value={value} x={x} />
        );

        expect(wrapper).toHaveStyleRule('width', `${width}px`);
        expect(wrapper).toHaveStyleRule('height', `${height}px`);
        expect(wrapper).toHaveStyleRule('left', `${x}px`);
        expect(wrapper.find(BarLabel).text()).toEqual(value.toString());
    });

    it('returns correct label position for negative values and label is bigger than bar', () => {
        jest.spyOn(
            Element.prototype,
            'getBoundingClientRect'
        ).mockReturnValueOnce({ ...getBoundingClientRect, width: 1000 });

        const wrapper = mount(
            <Bar width={10} height={10} value={-1000} x={0} />
        );

        const label = wrapper.find(BarLabel);
        expect(label.prop('position')).toEqual('LEFT_OUT');
    });

    it('returns correct label position for negative values and label is smaller than bar', () => {
        jest.spyOn(
            Element.prototype,
            'getBoundingClientRect'
        ).mockReturnValueOnce({ ...getBoundingClientRect, width: 100 });
        const wrapper = mount(
            <Bar width={100000} height={10} value={-1000} x={0} />
        );
        const label = wrapper.find(BarLabel);
        expect(label.prop('position')).toEqual('LEFT_IN');
    });

    it('returns correct label position for positive values and label is bigger than bar', () => {
        jest.spyOn(
            Element.prototype,
            'getBoundingClientRect'
        ).mockReturnValueOnce({ ...getBoundingClientRect, width: 1000 });
        const wrapper = mount(
            <Bar width={10} height={10} value={1000} x={0} />
        );
        const label = wrapper.find(BarLabel);
        expect(label.prop('position')).toEqual('RIGHT_OUT');
    });

    it('returns correct label position for positive values and label is smaller than bar', () => {
        jest.spyOn(
            Element.prototype,
            'getBoundingClientRect'
        ).mockReturnValueOnce({ ...getBoundingClientRect, width: 10 });
        const wrapper = mount(
            <Bar width={1000} height={10} value={10} x={0} />
        );
        const label = wrapper.find(BarLabel);
        expect(label.prop('position')).toEqual('RIGHT_IN');
    });
});
