import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

registerEnumType(UserRole, {
  name: 'UserRole',
  description: '사용자 역할',
  valuesMap: {
    Admin: {
      description: '관리자',
    },
    User: {
      description: '일반 유저',
    },
  },
});
