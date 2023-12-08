import { IsNotEmpty } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty()
    asset_id: string;//id
    @IsNotEmpty()
    price: number;
}
