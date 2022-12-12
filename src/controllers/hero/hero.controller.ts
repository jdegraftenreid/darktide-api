import { Controller, Get } from '@nestjs/common';
import { HeroService } from '../../services/hero/hero.service';
import { Hero } from '../../models/hero.model';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  getHeroes(): Hero[] {
    return this.heroService.getHeroes();
  }
}
