import { Injectable } from '@nestjs/common';
import { Hero } from '../../models/hero.model';

@Injectable()
export class HeroService {
  private readonly ogryn: Hero = this.createOgryn();
  private readonly zealot: Hero = this.createZealot();
  private readonly psyker: Hero = this.createPsyker();
  private readonly veteran: Hero = this.createVeteran();
  private readonly HEROES = new Set<Hero>([
    this.ogryn,
    this.zealot,
    this.psyker,
    this.veteran,
  ]);

  getHeroes(): Hero[] {
    return Array.from(this.HEROES).sort();
  }

  private createOgryn(): Hero {
    return {
      name: 'Ogryn',
      subClasses: [
        {
          name: 'Skullbreaker',
          baseHealth: 300,
          baseToughness: 100,
        },
      ],
    };
  }

  // TODO: Max update this function
  private createZealot(): Hero {
    return undefined;
  }

  // TODO: Max update this function
  private createPsyker(): Hero {
    return undefined;
  }

  // TODO: Max update this function
  private createVeteran(): Hero {
    return undefined;
  }
}
