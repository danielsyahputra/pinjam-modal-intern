import { IProduk } from "@entities/Produk";
import { IUser } from "@entities/User";

declare module 'express' {
    export interface Request  {
        body: {
            user: IUser,
            produk: IProduk
        };
    }
}
