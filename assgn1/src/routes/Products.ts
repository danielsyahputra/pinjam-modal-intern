/* eslint-disable @typescript-eslint/no-unsafe-return */
import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import ProdukDao from "@daos/Produk/ProdukDao.mock";
import { paramMissingError } from "@shared/constants";

const produkDao = new ProdukDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;


/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function readAllProducts(req: Request, res: Response) {
    const products = await produkDao.readAll();
    return res.status(OK).json({products});
}

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function createProduct(req: Request, res: Response) {
    const { product } = req.body;
    if (!product) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        })
    }
    await produkDao.create(product);
    return res.status(CREATED).end();
}

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function updateProduct(req: Request, res: Response) {
    const { product } = req.body;
    if (!product) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError
        })
    }
    product.id = Number(product.id);
    await produkDao.update(product);
    return res.status(OK).end();
}

export async function deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    await produkDao.delete(Number(id));
    return res.status(OK).end();
}