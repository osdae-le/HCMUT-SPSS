import { INestApplication } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Supply Chain Inventory Management System')
    .setDescription('Supply Chain Inventory Management System ⚡️')
    .setVersion('1.0')
    .setBasePath('api')
    .addTag('Endpoints')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
}
