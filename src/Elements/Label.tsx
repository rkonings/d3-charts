import styled from 'styled-components';

type LabelPosition = 'LEFT' | 'RIGHT';

interface Label {
    width: number;
    height: number;
    x: number;
    y?: number;
    position: LabelPosition;
}

export const Label = styled.div<Label>`
    ${({ width, height, x, y }) => `
      position: absolute;
      height: ${height}px;
      width: ${width}px;
      top: ${y}px;
    `}

    ${({ x, position }) => {
        if (position === 'LEFT') {
            return `
                left: ${x}px;
            `;
        } else {
            return `
                right:0;
                text-align: right;
            `;
        }
    }}
`;
