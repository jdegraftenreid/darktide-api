import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroController } from './controllers/hero/hero.controller';
import { HeroService } from './services/hero/hero.service';

@Module({
  imports: [],
  controllers: [AppController, HeroController],
  providers: [AppService, HeroService],
})
export class AppModule {}
