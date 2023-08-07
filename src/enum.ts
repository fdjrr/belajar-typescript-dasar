export enum CustomerType {
    REGULAR = 1,
    VIP = 2,
    SUPER_VIP = 3,
}

export type Customer = {
    id: number,
    name: string,
    type: CustomerType
}