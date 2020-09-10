import React from 'react';
import styled from 'styled-components';

type BarLabelPosition = 'LEFT_IN' | 'LEFT_OUT' | 'RIGHT_IN' | 'RIGHT_OUT';

interface BarLabel {
    position?: BarLabelPosition;
}
export const BarLabel = styled.span<BarLabel>`
    position: absolute;
    color: #fff;
    font-size: 14px;

    ${({ position }) => {
        if (position === 'RIGHT_OUT') {
            return `
                right: -10px;
                transform: translateX(100%);
                color: #8B8B8B;
            `;
        } else if (position === 'RIGHT_IN') {
            return `
                right: 10px;
            `;
        } else if (position === 'LEFT_OUT') {
            return `
                left: -10px;
                transform: translateX(-100%);
                color: #8B8B8B;
            `;
        } else if (position === 'LEFT_IN') {
            return `
                left: 10px;
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

export const Bar = styled(({ className, value, width }: Bar) => {
    const ref = React.createRef<HTMLDivElement>();

    const [labelPosition, setLabelPosition] = React.useState<
        BarLabelPosition | undefined
    >(undefined);

    React.useEffect(() => {
        const labelPadding = 30;

        const barLabel = ref.current!.firstElementChild as HTMLDivElement;
        const labelSize = barLabel.getBoundingClientRect().width + labelPadding;

        if (labelSize > width && value >= 0) {
            setLabelPosition('RIGHT_OUT');
        } else if (labelSize < width && value >= 0) {
            setLabelPosition('RIGHT_IN');
        } else if (labelSize > width && value < 0) {
            setLabelPosition('LEFT_OUT');
        } else {
            setLabelPosition('LEFT_IN');
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
      top: ${(y || 0) + 20}px;
      left: ${x}px;
      background: #304FFE;
      display:flex;
      justify-content: flex-end;
      align-items: center;
  `}
`;
