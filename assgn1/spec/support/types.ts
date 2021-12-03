import { Response } from 'supertest';
import { IUser } from '@entities/User';
import { IProduk } from '@entities/Produk';


export interface IResponse extends Response {
    body: {
        users: IUser[];
        products: IProduk[]
        error: string;
    };
}

export interface IReqBody {
    user?: IUser;
    produk?: IProduk
}
