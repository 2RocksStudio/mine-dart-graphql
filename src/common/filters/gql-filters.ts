import {
  Catch,
  ArgumentsHost,
  HttpException,
  ContextType,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch(HttpException)
export class HttpExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    switch (host.getType() as ContextType | 'graphql') {
      case 'graphql':
        // const gqlHost = GqlArgumentsHost.create(host);
        return exception;
      default:
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        response.status(status).json({
          statusCode: status,
          timestamp: new Date().toISOString(),
          path: request.url,
        });
        break;
    }
    return exception;
  }
}
