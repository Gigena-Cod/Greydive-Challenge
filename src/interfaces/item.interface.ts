import Option from "./option.interface";

export default interface Item {
    type: string;
    label: string;
    name?: string;
    required?: boolean;
    options?: Option[];
}


