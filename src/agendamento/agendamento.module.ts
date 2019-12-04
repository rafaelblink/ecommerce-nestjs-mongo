import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agendamento } from './Agendamento.entity';
import { AgendamentoService } from './Agendamento.service';
import { AgendamentoController } from './Agendamento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Agendamento])],
  providers: [AgendamentoService],
  controllers: [AgendamentoController],
})
export class AgendamentoModule {}
