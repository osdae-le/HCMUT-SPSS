import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { setupSwagger } from './swagger'
import { setupSecurity } from './security'
import { join } from 'path'
import { NestExpressApplication } from '@nestjs/platform-express'
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.useStaticAssets(join(__dirname, 'public'))
  app.setBaseViewsDir(join(__dirname, 'views'))
  app.setViewEngine('ejs')

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )

  // app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

  // OPEN API
  setupSwagger(app)

  // SECURITY
  setupSecurity(app)

  await app.listen(5000)

  console.log(`Application is running on port: 5000`)
}

bootstrap()
