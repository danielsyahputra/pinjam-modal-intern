import jsonfile from 'jsonfile';
import { IUser } from '@entities/User';
import { IProduk } from '@entities/Produk';


interface IDatabase {
    users: IUser[];
    products: IProduk[];
}


class MockDaoMock {

    private readonly dbFilePath = 'src/daos/MockDb/MockDb.json';


    protected openDb(): Promise<IDatabase> {
        return jsonfile.readFile(this.dbFilePath) as Promise<IDatabase>;
    }


    protected saveDb(db: IDatabase): Promise<void> {
        return jsonfile.writeFile(this.dbFilePath, db);
    }
}

export default MockDaoMock;
