import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('orders')
export class OrdersProduct {
  
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  categoryName: string;

  @Column()
  description: string;

  @Column()
  picture: string;
  
}