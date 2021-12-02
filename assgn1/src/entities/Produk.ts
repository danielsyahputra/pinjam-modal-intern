export interface IProduk {
    id: number,
    nama: string,
    deskripsi: string,
    harga: number
}

class Produk implements IProduk {
    public id: number;
    public nama: string;
    public deskripsi: string;
    public harga: number;

    constructor(namaOrProduk: string | IProduk, deskripsi?: string, harga?: number, id?: number) {
        if (typeof namaOrProduk === 'string') {
            this.nama = namaOrProduk;
            this.deskripsi = deskripsi || '';
            this.harga = harga || -1;
            this.id = id || -1;
        } else {
            this.nama = namaOrProduk.nama;
            this.deskripsi = namaOrProduk.deskripsi;
            this.harga = namaOrProduk.harga;
            this.id = namaOrProduk.id;
        }
    }
}

export default Produk;