import { IsNotEmpty } from "class-validator";

export class CreateAssetDto {
    @IsNotEmpty()
    id: string;
    @IsNotEmpty()
    symbol: string;
}
