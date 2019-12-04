import { Get, Param, Controller, Post, Body, Delete } from '@nestjs/common';
import { Agendamento } from './Agendamento.entity';
import { AgendamentoService } from './Agendamento.service';

@Controller('Agendamentos')
export class AgendamentoController {
  constructor(private readonly agendamentoService: AgendamentoService) {}

  @Get()
  findAll(): Promise<Agendamento[]> {
    return this.agendamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agendamentoService.findOne(id);
  }

  @Post()
  save(@Body() agendamento: Agendamento) {
    return this.agendamentoService.save(agendamento);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.agendamentoService.remove(id);
  }
}
