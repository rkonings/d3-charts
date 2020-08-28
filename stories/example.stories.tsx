import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import ChartSVG from '../src/ChartSVG';
import ChartDiv from '../src/ChartDiv';
import faker from 'faker';

const data = Array(10)
    .fill(null)
    .map(() => {
        return {
            name: faker.name.firstName(),
            salary: faker.random.number(30) * 1000,
        };
    });

storiesOf('Chart', module)
    .add('Basic SVG', () => {
        const width = number('width', 400);
        const height = number('height', 400);
        return <ChartSVG width={width} height={height} data={data} />;
    })
    .add('Basic Div', () => {
        const width = number('width', 400);
        const height = number('height', 400);
        return <ChartDiv width={width} height={height} data={data} />;
    });
