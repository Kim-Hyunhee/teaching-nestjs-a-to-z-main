import { ApiProperty } from '@nestjs/swagger';

export class CatRequestDto {
  @ApiProperty({
    example: 'amamov@kakao.com',
    description: 'email',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: 'amamov',
    description: 'name',
    required: true,
  })
  name: string;

  @ApiProperty({
    example: 'amamov.com',
    description: 'password',
    required: true,
  })
  password: string;
}
