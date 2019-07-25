import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity('users')
export class User {

  @ApiModelProperty()
  @ObjectIdColumn()
  id: ObjectID;

  @ApiModelProperty()
  @Column()
  username: string;

  @ApiModelProperty()
  @Column()
  password: string;
  
  @ApiModelProperty()
  @Column()
  isActive: boolean;
}
