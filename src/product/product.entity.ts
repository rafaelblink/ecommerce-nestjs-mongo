import { Column, Entity, ObjectID, ObjectIdColumn, Double, Long } from 'typeorm';

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
  unity: string;
  
}