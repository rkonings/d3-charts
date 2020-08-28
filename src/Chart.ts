export interface Chart {
    data: Array<{
        name: string;
        salary: number;
    }>;
    className?: string;
    width?: number;
    height?: number;
}
