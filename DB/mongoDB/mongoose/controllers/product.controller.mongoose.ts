import { Product, IProduct } from '../models/product.model.mongoose'

const createProduct = async (product: IProduct): Promise<IProduct> => {
    const newProduct = new Product(product)
    return await newProduct.save()
}

const readProduct = async (id: string): Promise<IProduct | null> => {
    return await Product.findById(id).exec()
}
/**Partial<IProduct> creates a new type by making all properties of the IProduct interface optional.
 *  This means that when we call the updateProduct function,
 *  we can pass in an object with only some of the properties of the IProduct interface,
 *  and the function will only update those properties. */
const updateProduct = async (id: string, product: Partial<IProduct>): Promise<IProduct | null> => {
    return await Product.findByIdAndUpdate(id, product, { new: true }).exec()
}

const deleteProduct = async (id: string): Promise<void> => {
    await Product.findByIdAndDelete(id).exec()
}

export {
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct,
}
