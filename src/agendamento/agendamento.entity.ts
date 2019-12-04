import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity('agendamentos')
export class Agendamento {
  @ApiModelProperty()
  @ObjectIdColumn()
  id: ObjectID;

  @ApiModelProperty()
  @Column()
  nome: string;

  @ApiModelProperty()
  @Column()
  data: Date;

  @ApiModelProperty()
  @Column()
  valor: Number;

  @ApiModelProperty()
  @Column()
  teveAdiantamento: Boolean;
}
