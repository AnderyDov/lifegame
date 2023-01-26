import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PoligonProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}
