import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('products')
export class Product {
  
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  productName: string;

  @Column()
  englishName: string;
  
  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  unity: string;
  
}