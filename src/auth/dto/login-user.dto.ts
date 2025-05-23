import { IsString, MinLength } from 'class-validator';

/// 로그인 요청 바디 검증용 DTO
export class LoginUserDto {
  @IsString({ message: '아이디는 문자열이어야 합니다.' })
  readonly id: string;

  @IsString({ message: '비밀번호는 문자열이어야 합니다.' })
  @MinLength(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
  readonly password: string;
}
