import ProductInfo from "../entities/ProductInfo"
import { getRepository, Repository } from "typeorm"
import { ProductInfoInput } from "../interface/ProductInfo"
import "reflect-metadata";

const AutoWiredMetaKey = Symbol("AutoWired");

function AutoWired() {
  
}

export class ProductService {

  @AutoWired
  private productInfoRepository: Repository<ProductInfo>;

  // constructor(){
  //   this.productInfoRepository = getRepository(ProductInfo)
  // }
  
   async findUpAll(): Promise<ProductInfo[]> {
     return this.productInfoRepository.find()
  }

   async findList(productIdList: string[]): Promise<ProductInfo[]> {
    return this.productInfoRepository.findByIds(productIdList)
  }

   async findOne(id: string): Promise<ProductInfo> {
    return this.productInfoRepository.findOneOrFail(id)
  }

   async create(productInput: ProductInfoInput): Promise<ProductInfo> {
    const productInfo = new ProductInfo()
    productInfo.name = productInput.name
    productInfo.price = productInput.price
    if (productInput.stock) productInfo.stock = productInput.stock
    if (productInput.description) productInfo.description = productInput.description
    if (productInput.status) productInfo.status = productInput.status
    if (productInput.icon) productInfo.icon = productInput.icon
    return this.productInfoRepository.save(productInfo)
  }

   async update(id: string, productInput: ProductInfoInput): Promise<ProductInfo> {
    let productInfo = await this.productInfoRepository.findOneOrFail(id)
    productInfo.name = productInput.name
    productInfo.price = productInput.price
    if (productInput.stock) productInfo.stock = productInput.stock
    if (productInput.description) productInfo.description = productInput.description
    if (productInput.status) productInfo.status = productInput.status
    if (productInput.icon) productInfo.icon = productInput.icon
    return this.productInfoRepository.save(productInfo)
  }

   async destroy(productId: string) {
    return this.productInfoRepository.update(productId, { deleted: true })
  }

}