import { Args, Mutation, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserInput } from "./input/user.input";
import { UsersService } from "./users.service";


@Resolver()
export class UsersResolver {
  constructor(
    private usersService: UsersService,
  ) {}

  @Query(()=>String)
  async hello() {
    return 'hello';
  }

  @Query(()=>[CreateUserDto])
  async users() {
    return this.usersService.getAll();
  }

  @Mutation(()=>CreateUserDto)
  async add(@Args('input') input: UserInput) {
    return this.usersService.add(input);
  }

//   @ResolveField()
//   async posts(@Parent() author: Author) {
//     const { id } = author;
//     return this.postsService.findAll({ authorId: id });
//   }
}