import React from 'react';
import styled from 'styled-components';

type BarLabelPosition = 'BOTTOM_IN' | 'BOTTOM_OUT' | 'TOP_IN' | 'TOP_OUT';

interface BarLabel {
    position?: BarLabelPosition;
}
export const BarLabel = styled.span<BarLabel>`
    position: absolute;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 14px;

    ${({ position }) => {
        if (position === 'TOP_OUT') {
            return `
              top: -2px;
              transform: translateY(-100%);
              color: #8B8B8B;
            `;
        } else if (position === 'TOP_IN') {
            return `
                top: 20px;
            `;
        } else if (position === 'BOTTOM_OUT') {
            return `
                bottom: -2px;
                transform: translatey(-100%);
                color: #8B8B8B;
            `;
        } else if (position === 'BOTTOM_IN') {
            return `
                bottom: 20px;
            `;
        } else {
            return `
                visibility: hidden;
            `;
        }
    }}
`;

interface Bar {
    className?: string;
    width: number;
    height: number;
    x: number;
    y?: number;
    value: number;
}

export const Bar = styled(({ className, value, height }: Bar) => {
    const ref = React.createRef<HTMLDivElement>();

    const [labelPosition, setLabelPosition] = React.useState<
        BarLabelPosition | undefined
    >(undefined);

    React.useEffect(() => {
        const labelPadding = 30;

        const barLabel = ref.current!.firstElementChild as HTMLDivElement;
        const labelSize =
            barLabel.getBoundingClientRect().height + labelPadding;

        if (labelSize > height && value >= 0) {
            setLabelPosition('TOP_OUT');
        } else if (labelSize < height && value >= 0) {
            setLabelPosition('TOP_IN');
        } else if (labelSize > height && value < 0) {
            setLabelPosition('BOTTOM_OUT');
        } else {
            setLabelPosition('BOTTOM_IN');
        }
    });

    return (
        <div ref={ref} className={className}>
            <BarLabel position={labelPosition}>{value}</BarLabel>
        </div>
    );
})`
    ${({ width, height, x, y }) => `
      position: absolute;
      width: ${width}px;
      height: ${height}px;
      top: ${y || 0}px;
      left: ${x}px;
      background: #304FFE;
  `}
`;
