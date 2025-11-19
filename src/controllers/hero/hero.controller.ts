import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { HeroService } from '../../services/hero/hero.service';
import { Hero } from '../../models/hero.model';

@Controller('heroes')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  getHeroes(): Hero[] {
    return this.heroService.getHeroes();
  }

  @Get('/:id')
  getHeroesByName(@Param('id') id: string): Hero {
    if (!id) {
      throw new NotFoundException();
    }

    return this.heroService.getHeroById(id);
  }
}
