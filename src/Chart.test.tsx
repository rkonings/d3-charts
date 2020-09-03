import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import Horizontal from './BarChart/Horizontal';
import Chart from './Chart';

describe('<Chart />', () => {
    it('should have given width and height', () => {
        const wrapper = mount(<Chart data={[]} width={200} height={600} />);
        expect(wrapper).toHaveStyleRule('width', '200px');
        expect(wrapper).toHaveStyleRule('height', '600px');
    });

    it('should not render a Horizontal component', () => {
        const wrapper = mount(<Chart data={[]} width={200} height={600} />);
        expect(wrapper).toHaveStyleRule('width', '200px');
        expect(wrapper).toHaveStyleRule('height', '600px');
        expect(wrapper.find(Horizontal).exists()).toBe(false);
    });

    it('should render a Horizontal component', () => {
        const data = [{ name: 'FOO', salary: 10000 }];
        const wrapper = mount(<Chart data={data} />);
        expect(wrapper.find(Horizontal).exists()).toBe(true);
    });

    it('should have default size', () => {
        const wrapper = mount(<Chart data={[]} />);
        expect(wrapper).toHaveStyleRule('width', '400px');
        expect(wrapper).toHaveStyleRule('height', '400px');
    });
});
