import { Injectable } from '@nestjs/common';
import { PrismaService } from '@libs/shared';
import { ResponseService } from '@libs/shared';
@Injectable()
export class AppService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly responseService: ResponseService,
  ) { }
  getHello() {
    return this.responseService.success(`测试`);
  }
}
