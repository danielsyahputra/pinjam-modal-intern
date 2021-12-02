import { getRandomInt } from "@shared/functions";
import { IProdukDao } from "./ProdukDao";
import MockDaoMock from "@daos/MockDb/MockDao.mock";
import { IProduk } from "@entities/Produk";

class ProdukDao extends MockDaoMock implements IProdukDao {

    public async read(id: number): Promise<IProduk | null> {
        const db = await super.openDb();
        const produk = db.products.find(product => product.id === id);
        if (produk) return produk;
        else return null;
    }

    public async readAll(): Promise<IProduk[]> {
        const db = await super.openDb();
        return db.products;
    }

    public async create(produk: IProduk): Promise<void> {
        const db = await super.openDb();
        produk.id = getRandomInt();
        db.products.push(produk);
        await super.saveDb(db);
    }

    public async update(produk: IProduk): Promise<void> {
        const db = await super.openDb();
        const targetInd = db.products.findIndex(it => it.id === produk.id);
        if (targetInd >= 0) {
            db.products[targetInd] = produk;
            await super.saveDb(db);
        }
        throw new Error('Produk tidak ditemukan!');
    }

    public async delete(id: number): Promise<void> {
        const db = await super.openDb();
        const targetInd = db.products.findIndex(it => it.id === id);
        if (targetInd >= 0) {
            db.products.splice(targetInd, 1);
            await super.saveDb(db);
            return;
        }
        throw new Error('Produk tidak ditemukan!');
    }
}

export default ProdukDao;