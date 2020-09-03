import * as d3 from 'd3';
import { Data } from 'Chart';

export const getDomain = (data: Data[]) => {
    const minValue = d3.min(data, (d) => d.salary) || 0;
    const maxValue = d3.max(data, (d) => d.salary) || 0;

    if (minValue < 0 && maxValue < 0) {
        return [minValue, 0];
    } else if (minValue < 0) {
        return [minValue, maxValue];
    } else {
        return [0, maxValue];
    }
};
