import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput, LoginOutput } from './dto/auth.dto';
import { GqlAuthGuard } from './jwt-auth.guards';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginOutput)
  @UseGuards(GqlAuthGuard)
  login(@Args('LoginInput') loginInput: LoginInput, @Context() context) {
    return this.authService.login(context.user);
  }
}
