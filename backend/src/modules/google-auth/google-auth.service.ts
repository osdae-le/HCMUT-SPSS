import { Injectable } from '@nestjs/common'
import { OAuth2Client, TokenPayload } from 'google-auth-library'

@Injectable()
export class GoogleAuthService {
  constructor(
    private readonly client: OAuth2Client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
    ),
  ) {}

  async verifyToken(token: string): Promise<TokenPayload> {
    const ticket = await this.client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    })

    const payload = ticket.getPayload()

    return payload
  }
}
