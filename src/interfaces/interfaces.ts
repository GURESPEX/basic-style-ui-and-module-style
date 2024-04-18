import { ReactNode } from 'react';
export interface Value {
    icon: ReactNode,
    title: string,
    content: ReactNode
}
export interface Tour {
    img: string,
    title: string,
    price: number,
    star: number,
}

export interface NavMenu {
    name: string
}