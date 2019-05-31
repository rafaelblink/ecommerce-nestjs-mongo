import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('categories')
export class CategoryProduct {
  
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  categoryName: string;

  @Column()
  description: string;

  @Column()
  picture: string;
  
}