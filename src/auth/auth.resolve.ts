import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CreateCustomer, CreateCustomerResponse } from './auth.schema';

@Resolver()
export class AuthResolver {
  @Query(() => String, { name: 'health' })
  health(): string {
    return 'ok';
  }
  @Mutation(() => CreateCustomerResponse)
  async createCustomer(
    @Args('input') input: CreateCustomer,
  ): Promise<CreateCustomerResponse> {
    console.log('Datos recibidos:', input);

    return {
      firstName: input.firstName,
      SecondName: input.SecondName,
      email: input.email,
      phone_number: input.phone_number,
    };
  }
}
//crea un request