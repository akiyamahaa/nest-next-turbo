import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function setupSwagger(app: INestApplication, port: number = 3001): void {
  const config = new DocumentBuilder()
    .setTitle('📚 BrainyChess API') // ✅ Project name
    .setDescription('API documentation for BrainyChess, an education chess app') // ✅ API description
    .setVersion('1.0') // ✅ API version
    .addBearerAuth() // ✅ Enables JWT Authentication in Swagger UI
    .setLicense('MIT', 'https://opensource.org/licenses/MIT') // ✅ License info
    .addServer(`http://localhost:${port}`, 'Local Development') // ✅ Server definition
    .addServer(
      `${process.env.DOMAIN ? process.env.DOMAIN : `http://localhost:${port}`}`,
      'Development API',
    ) // ✅ Development API URL
    // .addServer('https://api.brainychess.com', 'Production API') // ✅ Production API URL
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // ✅ Keeps JWT token between page reloads
    },
    customSiteTitle: 'BrainyChess API Documentation',
  });

  console.log(`📄 Swagger Docs available at http://localhost:${port}/docs`);
}
