import { Module } from '@nestjs/common'
import { ProductModule } from '@entities/product/product.module'
import { TypeOrmModule } from '@db/typeorm.module'
import { ConfigModule } from './config.module'


@Module({
  imports: [
    ConfigModule,
    TypeOrmModule,
    ProductModule,
  ],
})
export class AppModule {}
