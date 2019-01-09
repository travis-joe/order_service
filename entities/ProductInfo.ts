import { Entity, Column } from 'typeorm';
import { Content } from '../utils/content';

@Entity()
class ProductInfo extends Content {

  // 商品名称
  @Column({ type: 'varchar', length: 64 })
  name!: string

  // 单价
  @Column({ type: 'int' })
  price!: number

  // 库存
  @Column({ type: 'int', nullable: true })
  stock?: number

  // 商品状态: 0正常, 1下架
  @Column({ type: 'int', nullable: true })
  status?: number

  // 描述
  @Column({ type: 'varchar', length: 2048, nullable: true })
  description?: string

  // 小图
  @Column({ type: 'varchar', length: 512, nullable: true })
  icon?: string

}

export default ProductInfo
