import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class AssetsService {

  constructor (
    private prismaService: PrismaService,
  ) {}

  async create(createAssetDto: CreateAssetDto) {
    
    const asset = await this.prismaService.asset.findFirst({ where: {"id":createAssetDto.id}});

    if (asset) {
      throw new BadRequestException(`Já exite um Asset com id: '${createAssetDto.id}'.`);
    }
    
    return this.prismaService.asset.create({
      data: {
        id: createAssetDto.id,
        symbol: createAssetDto.symbol
      }
    });
  }

  findAll() {
    return this.prismaService.asset.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} asset`;
  }

  update(id: number, updateAssetDto: UpdateAssetDto) {
    return `This action updates a #${id} asset`;
  }

  remove(id: number) {
    return `This action removes a #${id} asset`;
  }
}
