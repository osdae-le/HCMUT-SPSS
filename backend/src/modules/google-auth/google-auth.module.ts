import { Module } from '@nestjs/common'
import { GoogleAuthService } from './google-auth.service'
import { OAuth2Client } from 'google-auth-library'

@Module({
  providers: [GoogleAuthService, OAuth2Client],
  exports: [GoogleAuthService],
})
export class GoogleAuthModule {}
