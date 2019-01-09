import ProductInfo from "../entities/ProductInfo"
import { getRepository, Repository } from "typeorm"
import { ProductInfoInput } from "../interface/ProductInfo"

export namespace ProductService {

  let _ProductInfoRepository: Repository<ProductInfo>
  const ProductInfoRepository = () => {
    _ProductInfoRepository = _ProductInfoRepository || getRepository(ProductInfo)
    return _ProductInfoRepository
  }

  export async function findUpAll(): Promise<ProductInfo[]> {
    return ProductInfoRepository().find()
  }

  export async function findList(productIdList: string[]): Promise<ProductInfo[]> {
    return ProductInfoRepository().findByIds(productIdList)
  }

  export async function findOne(productId: string): Promise<ProductInfo> {
    return ProductInfoRepository().findOneOrFail(productId)
  }

  export async function create(productInput: ProductInfoInput): Promise<ProductInfo> {
    const productInfo = new ProductInfo()
    productInfo.name = productInput.name
    productInfo.price = productInput.price
    if (productInput.stock) productInfo.stock = productInput.stock
    if (productInput.description) productInfo.description = productInput.description
    if (productInput.status) productInfo.status = productInput.status
    if (productInput.icon) productInfo.icon = productInput.icon
    return ProductInfoRepository().save(productInfo)
  }

  export async function update(productId: string, productInput: ProductInfoInput): Promise<ProductInfo> {
    let productInfo = await ProductInfoRepository().findOneOrFail(productId)
    productInfo.name = productInput.name
    productInfo.price = productInput.price
    if (productInput.stock) productInfo.stock = productInput.stock
    if (productInput.description) productInfo.description = productInput.description
    if (productInput.status) productInfo.status = productInput.status
    if (productInput.icon) productInfo.icon = productInput.icon
    return ProductInfoRepository().save(productInfo)
  }

  export async function destroy(productId: string) {
    return ProductInfoRepository().update(productId, { deleted: true })
  }

}