import { ApiProperty } from '@nestjs/swagger';

export class ReadOnlyCatDto {
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
}
