import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateCustomer {
  @Field({ description: 'first Name of the Customer' })
  firstName: string;

  @Field({ description: 'Second Name of the Customer' })
  SecondName: string;

  @Field({ description: 'Email of the Customer' })
  email: string;

  @Field({ description: 'Password of the Customer' })
  password: string;

  @Field({ description: 'Phone number of the Customer' })
  phone_number: string;
}

@ObjectType()
export class CreateCustomerResponse {
  @Field({ description: 'first Name of the Customer' })
  firstName: string;

  @Field({ description: 'Second Name of the Customer' })
  SecondName: string;

  @Field({ description: 'Email of the Customer' })
  email: string;

  @Field({ description: 'Phone number of the Customer' })
  phone_number: string;
}
