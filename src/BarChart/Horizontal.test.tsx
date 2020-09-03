import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import * as d3 from 'd3';

import Horizontal from './Horizontal';
import { Label } from '../Elements/Label';
import { Bar } from './HorizontalBar';

const data = [{ name: 'FOO', salary: 10000 }];

describe('<Horizontal />', () => {
    const scaleBand = d3
        .scaleBand()
        .domain(data.map(({ name }) => name))
        .range([0, 600]);

    const scaleLinear = d3
        .scaleLinear()
        .domain([0, 10])
        .nice(5)
        .range([0, 600]);

    it('should render a bar', () => {
        const wrapper = mount(
            <Horizontal
                data={data}
                scaleBand={scaleBand}
                scaleLinear={scaleLinear}
            />
        );
        expect(wrapper.find(Bar).length).toBe(1);
    });

    it('should render a label', () => {
        const wrapper = mount(
            <Horizontal
                data={data}
                scaleBand={scaleBand}
                scaleLinear={scaleLinear}
            />
        );
        expect(wrapper.find(Label).length).toBe(1);
    });

    it('should not render a bar', () => {
        const wrapper = mount(
            <Horizontal
                data={[]}
                scaleBand={scaleBand}
                scaleLinear={scaleLinear}
            />
        );
        expect(wrapper.find(Bar).length).toBe(0);
    });

    it('should calculate the correct width of a bar', () => {
        const data = [
            { name: 'FOO', salary: 10000 },
            { name: 'BAZ', salary: 5000 },
            { name: 'FOOBAZ', salary: 0 },
        ];

        const scaleBand = d3
            .scaleBand()
            .domain(data.map(({ name }) => name))
            .range([0, 600]);

        const scaleLinear = d3
            .scaleLinear()
            .domain([0, 10000])
            .nice(5)
            .range([0, 600]);

        const wrapper = mount(
            <Horizontal
                data={data}
                scaleBand={scaleBand}
                scaleLinear={scaleLinear}
            />
        );
        const bars = wrapper.find(Bar);

        expect(bars.at(0)).toHaveStyleRule('width', '600px');
        expect(bars.at(1)).toHaveStyleRule('width', '300px');
        expect(bars.at(2)).toHaveStyleRule('width', '0px');
    });

    it('should calculate the correct width of a bar with negative value', () => {
        const data = [
            { name: 'FOOBAZ', salary: 0 },
            { name: 'FOO', salary: -20 },
            { name: 'BAZ', salary: -10 },
        ];

        const scaleBand = d3
            .scaleBand()
            .domain(data.map(({ name }) => name))
            .range([0, 600]);

        const scaleLinear = d3
            .scaleLinear()
            .domain([-20, 0])
            .nice(5)
            .range([0, 600]);

        const wrapper = mount(
            <Horizontal
                data={data}
                scaleBand={scaleBand}
                scaleLinear={scaleLinear}
            />
        );
        const bars = wrapper.find(Bar);

        expect(bars.at(0)).toHaveStyleRule('width', '0px');
        expect(bars.at(1)).toHaveStyleRule('width', '600px');
        expect(bars.at(2)).toHaveStyleRule('width', '300px');
    });

    it('should calculate the correct bar width with given dataset with mixed values', () => {
        const data = [
            { name: 'FOOBAZ', salary: 100 },
            { name: 'FOO', salary: -20 },
            { name: 'BAZ', salary: -100 },
        ];

        const scaleBand = d3
            .scaleBand()
            .domain(data.map(({ name }) => name))
            .range([0, 600]);

        const scaleLinear = d3
            .scaleLinear()
            .domain([-100, 100])
            .nice(5)
            .range([0, 600]);

        const wrapper = mount(
            <Horizontal
                data={data}
                scaleBand={scaleBand}
                scaleLinear={scaleLinear}
            />
        );
        const bars = wrapper.find(Bar);

        expect(bars.at(0)).toHaveStyleRule('width', '300px');
        expect(bars.at(1)).toHaveStyleRule('width', '60px');
        expect(bars.at(2)).toHaveStyleRule('width', '300px');
    });
});
