import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agendamento } from './Agendamento.entity';
const crypto = require('crypto');

@Injectable()
export class AgendamentoService {
  constructor(
    @InjectRepository(Agendamento)
    private readonly AgendamentoRepository: Repository<Agendamento>,
  ) {}

  async findAll(): Promise<Agendamento[]> {
    return await this.AgendamentoRepository.find();
  }

  async findOne(id: string): Promise<Agendamento> {
    return await this.AgendamentoRepository.findOne(id);
  }

  async save(agendamento: Agendamento) {
    return await this.AgendamentoRepository.save(agendamento);
  }

  async remove(id) {
    const user = this.AgendamentoRepository.findOne(id).then(result => {
      this.AgendamentoRepository.delete(result);
    });
  }
}
