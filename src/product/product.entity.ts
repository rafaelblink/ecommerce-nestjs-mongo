import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity('products')
export class Product {

  @ApiModelProperty()
  @ObjectIdColumn()
  id: ObjectID;

  @ApiModelProperty()
  @Column()
  productName: string;

  @ApiModelProperty()
  @Column()
  englishName: string;

  @ApiModelProperty()
  @Column()
  description: string;

  @ApiModelProperty()
  @Column()
  price: number;

  @ApiModelProperty()
  @Column()
  quantity: number;

  @ApiModelProperty()
  @Column()
  unity: string;

}
