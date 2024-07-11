export type TProduct = {
    _id: string;
    name: string;
    img: string;
    price: string;
    ingredients: string[];
    rating: string;
};

export type TProductId = {
    id: any;
    params: {
        id: string
    }
}