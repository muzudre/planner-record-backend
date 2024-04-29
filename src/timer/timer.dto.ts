import { IsBoolean, IsNumber, IsOptional } from "class-validator";

export class TimerSessionDto {
    @IsBoolean()
    @IsOptional()
    isCompleted?: boolean
}

export class TimerRoundDto {
    @IsNumber()
    totalSeconds: number

    @IsBoolean()
    @IsOptional()
    isCompleted?: boolean
}