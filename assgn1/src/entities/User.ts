export interface IUser {
    id: number;
    nama: string;
    noKTP: string;
}

class User implements IUser {

    public id: number;
    public nama: string;
    public noKTP: string;

    constructor(namaOrUser: string | IUser, noKTP?: string, id?: number) {
        if (typeof namaOrUser === 'string') {
            this.nama = namaOrUser;
            this.noKTP = noKTP || '';
            this.id = id || -1;
        } else {
            this.nama = namaOrUser.nama;
            this.noKTP = namaOrUser.noKTP;
            this.id = namaOrUser.id;
        }
    }
}

export default User;
