import { ApiProperty } from '@nestjs/swagger';

export class CatCurrentDto {
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
    example: '3280199',
    description: 'id',
  })
  id: string;

  @ApiProperty({
    example: 'amamov.com',
    description: 'image',
    required: true,
  })
  image: string;
}
