import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import ChartDiv from '../src/Chart';
import BarChartVertical from '../src/BarChartVertical';
import LineChart from '../src/LineChart';
import faker from 'faker';

const data = Array(10)
    .fill(null)
    .map(() => {
        return {
            name: faker.name.firstName(),
            salary: faker.random.number(30) * 1000,
        };
    });

storiesOf('Bar chart/Horizontal', module)
    .add('Default', () => {
        const width = number('width', 400);
        const height = number('height', 400);

        const data = Array(3)
            .fill(null)
            .map(() => {
                return {
                    name: faker.name.firstName(),
                    salary: faker.random.number(1000) + 100,
                };
            });

        return <ChartDiv width={width} height={height} data={data} />;
    })
    .add('Large labels', () => {
        const width = number('width', 800);
        const height = number('height', 600);

        const data = Array(6)
            .fill(null)
            .map(() => {
                return {
                    name: faker.internet.url(),
                    salary: faker.random.number(1000000) + 100,
                };
            });

        return <ChartDiv width={width} height={height} data={data} />;
    })
    .add('Negative values', () => {
        const width = number('width', 400);
        const height = number('height', 400);

        const data = [
            { name: 'FOOBAZ', salary: -5 },
            { name: 'FOO', salary: -20 },
            { name: 'BAZ', salary: -10 },
        ];

        return <ChartDiv width={width} height={height} data={data} />;
    })
    .add('Mixed values', () => {
        const width = number('width', 400);
        const height = number('height', 400);

        const data = [
            {
                name: 'FOO',
                salary: -3000,
            },
            {
                name: 'BAZ',
                salary: -5000,
            },
            {
                name: 'FOOBAZ',
                salary: 1000,
            },
            {
                name: 'BAZFOO',
                salary: 5000,
            },
        ];

        return <ChartDiv width={width} height={height} data={data} />;
    });

storiesOf('Bar chart/Vertical', module)
    .add('Default', () => {
        const width = number('width', 400);
        const height = number('height', 400);

        const data = Array(3)
            .fill(null)
            .map(() => {
                return {
                    name: faker.name.firstName(),
                    salary: faker.random.number(1000) + 100,
                };
            });

        return <BarChartVertical width={width} height={height} data={data} />;
    })
    .add('Large labels', () => {
        const width = number('width', 800);
        const height = number('height', 600);

        const data = Array(6)
            .fill(null)
            .map(() => {
                return {
                    name: faker.internet.url(),
                    salary: faker.random.number(1000000) + 100,
                };
            });

        return <BarChartVertical width={width} height={height} data={data} />;
    })
    .add('Negative values', () => {
        const width = number('width', 400);
        const height = number('height', 400);

        const data = [
            { name: 'FOOBAZ', salary: -5 },
            { name: 'FOO', salary: -20 },
            { name: 'BAZ', salary: -10 },
        ];

        return <BarChartVertical width={width} height={height} data={data} />;
    })
    .add('Mixed values', () => {
        const width = number('width', 400);
        const height = number('height', 400);

        const data = [
            {
                name: 'FOO',
                salary: -3000,
            },
            {
                name: 'BAZ',
                salary: -5000,
            },
            {
                name: 'FOOBAZ',
                salary: 1000,
            },
            {
                name: 'BAZFOO',
                salary: 5000,
            },
        ];

        return <BarChartVertical width={width} height={height} data={data} />;
    })
    .add('Date values', () => {
        const width = number('width', 400);
        const height = number('height', 400);

        const data = [
            {
                name: '1-1-2020',
                salary: 10000,
            },
            {
                name: '1-2-2020',
                salary: 11000,
            },
            {
                name: '1-3-2020',
                salary: 1000,
            },
            {
                name: '1-4-2020',
                salary: 5000,
            },
            {
                name: '1-5-2020',
                salary: 1000,
            },
            {
                name: '1-6-2020',
                salary: 5000,
            },
            {
                name: '1-7-2020',
                salary: 1000,
            },
            {
                name: '1-8-2020',
                salary: 5000,
            },
        ];

        return <BarChartVertical width={width} height={height} data={data} />;
    });
storiesOf('Line chart', module)
    .add('Default', () => {
        const width = number('width', 400);
        const height = number('height', 400);

        const data = Array(3)
            .fill(null)
            .map(() => {
                return {
                    name: faker.name.firstName(),
                    salary: faker.random.number(1000) + 100,
                };
            });

        return <LineChart width={width} height={height} data={data} />;
    })
    .add('Large labels', () => {
        const width = number('width', 800);
        const height = number('height', 600);

        const data = Array(6)
            .fill(null)
            .map(() => {
                return {
                    name: faker.internet.url(),
                    salary: faker.random.number(1000000) + 100,
                };
            });

        return <LineChart width={width} height={height} data={data} />;
    })
    .add('Negative values', () => {
        const width = number('width', 400);
        const height = number('height', 400);

        const data = [
            { name: 'FOOBAZ', salary: -5 },
            { name: 'FOO', salary: -20 },
            { name: 'BAZ', salary: -10 },
        ];

        return <LineChart width={width} height={height} data={data} />;
    })
    .add('Mixed values', () => {
        const width = number('width', 400);
        const height = number('height', 400);

        const data = [
            {
                name: 'FOO',
                salary: -3000,
            },
            {
                name: 'BAZ',
                salary: -5000,
            },
            {
                name: 'FOOBAZ',
                salary: 1000,
            },
            {
                name: 'BAZFOO',
                salary: 5000,
            },
        ];

        return <LineChart width={width} height={height} data={data} />;
    })
    .add('Date values', () => {
        const width = number('width', 400);
        const height = number('height', 400);

        const data = [
            {
                name: '1-1-2020',
                salary: 10000,
            },
            {
                name: '1-2-2020',
                salary: 11000,
            },
            {
                name: '1-3-2020',
                salary: 1000,
            },
            {
                name: '1-4-2020',
                salary: 5000,
            },
            {
                name: '1-5-2020',
                salary: 1000,
            },
            {
                name: '1-6-2020',
                salary: 5000,
            },
            {
                name: '1-7-2020',
                salary: 1000,
            },
            {
                name: '1-8-2020',
                salary: 5000,
            },
        ];

        return <LineChart width={width} height={height} data={data} />;
    });
