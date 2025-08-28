import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolve';

@Module({
  providers: [AuthResolver],
})
export class AuthModule {}
