import { IProduk } from "@entities/Produk";

export interface IProdukDao {
    read: (id: number) => Promise<IProduk | null>;
    readAll: () => Promise<IProduk[]>;
    create: (produk: IProduk) => Promise<void>;
    update: (produk: IProduk) => Promise<void>;
    delete: (id: number) => Promise<void>;
}

class ProdukDao implements IProdukDao {

    /**
     * @param id
     */
    public read(id: number): Promise<IProduk | null> {
        return Promise.resolve(null);
    }

    /**
     * 
     */
    public readAll(): Promise<IProduk[]> {
        return Promise.resolve([]);
    }

    /**
     * @param produk
     */
    public async create(produk: IProduk): Promise<void> {
        return Promise.resolve(undefined);
    }

    /**
     * @param produk
     */
    public async update(produk: IProduk): Promise<void> {
        return Promise.resolve(undefined);
    }

    /**
     * 
     */
    public async delete(id: number): Promise<void> {
        return Promise.resolve(undefined);
    }
}

export default ProdukDao;