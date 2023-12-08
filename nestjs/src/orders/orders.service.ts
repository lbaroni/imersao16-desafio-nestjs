import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { AssetsService } from 'src/assets/assets.service';

@Injectable()
export class OrdersService {

  constructor (
    private prismaService: PrismaService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {

    const asset = await this.prismaService.asset.findFirst({ where: {"id":createOrderDto.asset_id}});

    if (!asset) {
      throw new NotFoundException(`Asset com id '${createOrderDto.asset_id}' não encontrado`);
    }

    return this.prismaService.order.create({
      data: {
        // Asset: {
        //    id: asset.id,
        //    symbol: asset.symbol,
        //  },
        asset_id: createOrderDto.asset_id,
        price: createOrderDto.price,
        status: "open"
      }

    });
  }

  findAll() {
    return this.prismaService.order.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
