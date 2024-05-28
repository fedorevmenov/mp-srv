import { Module } from '@nestjs/common'
import { ProductModule } from '@entities/product/product.module'
import { TypeOrmModule } from '@db/typeorm.module'
import { ConfigModule } from './config.module'
import { UserModule } from '@entities/user/user.module'


@Module({
  imports: [
    ConfigModule,
    TypeOrmModule,

    ProductModule,
    UserModule,
  ],
})
export class AppModule {}
 