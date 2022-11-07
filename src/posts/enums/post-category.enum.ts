import { registerEnumType } from '@nestjs/graphql';

export enum PostCategory {
   Relationship= 'Relationship',
   Food= 'Food',
   Daily='Daily',
   Sports='Sports',
   Game='Game',
   Travel='Travel',
   Entertainment='Entertainment',
   Etc='Etc'
}

registerEnumType(PostCategory, {
  name: 'PostCategory',
  description: '글 카테고리',
  valuesMap: {
    Relationship: {
      description: '연애',
    },
    Food: {
      description: '음식',
    },
    Daily: {
      description: '일상',
    },
    Sports: {
      description: '스포츠',
    },
    Game: {
      description: '게임',
    },
    Travel: {
      description: '여행',
    },
    Entertainment: {
      description: '방속/연예',
    },
    Etc: {
      description: '기타',
    },
  },
});
