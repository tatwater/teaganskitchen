module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type Address {
  id: ID!
  text: String!
}

type AddressConnection {
  pageInfo: PageInfo!
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  id: ID
  text: String!
}

input AddressCreateOneInput {
  create: AddressCreateInput
  connect: AddressWhereUniqueInput
}

type AddressEdge {
  node: Address!
  cursor: String!
}

enum AddressOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
}

type AddressPreviousValues {
  id: ID!
  text: String!
}

type AddressSubscriptionPayload {
  mutation: MutationType!
  node: Address
  updatedFields: [String!]
  previousValues: AddressPreviousValues
}

input AddressSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AddressWhereInput
  AND: [AddressSubscriptionWhereInput!]
  OR: [AddressSubscriptionWhereInput!]
  NOT: [AddressSubscriptionWhereInput!]
}

input AddressUpdateDataInput {
  text: String
}

input AddressUpdateInput {
  text: String
}

input AddressUpdateManyMutationInput {
  text: String
}

input AddressUpdateOneInput {
  create: AddressCreateInput
  update: AddressUpdateDataInput
  upsert: AddressUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: AddressWhereUniqueInput
}

input AddressUpsertNestedInput {
  update: AddressUpdateDataInput!
  create: AddressCreateInput!
}

input AddressWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [AddressWhereInput!]
  OR: [AddressWhereInput!]
  NOT: [AddressWhereInput!]
}

input AddressWhereUniqueInput {
  id: ID
}

type AggregateAddress {
  count: Int!
}

type AggregateEvent {
  count: Int!
}

type AggregateGuest {
  count: Int!
}

type AggregateIngredient {
  count: Int!
}

type AggregateMeal {
  count: Int!
}

type AggregateRecipe {
  count: Int!
}

type AggregateTime {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Event {
  id: ID!
  name: String!
  url: String!
  starred: Boolean
  description: String!
  startTime: String
  endTime: String
  date: DateTime
  address: Address
  dishes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe!]
  allowSuggestedDishes: Boolean
  guests(where: GuestWhereInput, orderBy: GuestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guest!]
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  id: ID
  name: String!
  url: String!
  starred: Boolean
  description: String!
  startTime: String
  endTime: String
  date: DateTime
  address: AddressCreateOneInput
  dishes: RecipeCreateManyInput
  allowSuggestedDishes: Boolean
  guests: GuestCreateManyInput
}

type EventEdge {
  node: Event!
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  starred_ASC
  starred_DESC
  description_ASC
  description_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  date_ASC
  date_DESC
  allowSuggestedDishes_ASC
  allowSuggestedDishes_DESC
}

type EventPreviousValues {
  id: ID!
  name: String!
  url: String!
  starred: Boolean
  description: String!
  startTime: String
  endTime: String
  date: DateTime
  allowSuggestedDishes: Boolean
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
}

input EventUpdateInput {
  name: String
  url: String
  starred: Boolean
  description: String
  startTime: String
  endTime: String
  date: DateTime
  address: AddressUpdateOneInput
  dishes: RecipeUpdateManyInput
  allowSuggestedDishes: Boolean
  guests: GuestUpdateManyInput
}

input EventUpdateManyMutationInput {
  name: String
  url: String
  starred: Boolean
  description: String
  startTime: String
  endTime: String
  date: DateTime
  allowSuggestedDishes: Boolean
}

input EventWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  starred: Boolean
  starred_not: Boolean
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  startTime: String
  startTime_not: String
  startTime_in: [String!]
  startTime_not_in: [String!]
  startTime_lt: String
  startTime_lte: String
  startTime_gt: String
  startTime_gte: String
  startTime_contains: String
  startTime_not_contains: String
  startTime_starts_with: String
  startTime_not_starts_with: String
  startTime_ends_with: String
  startTime_not_ends_with: String
  endTime: String
  endTime_not: String
  endTime_in: [String!]
  endTime_not_in: [String!]
  endTime_lt: String
  endTime_lte: String
  endTime_gt: String
  endTime_gte: String
  endTime_contains: String
  endTime_not_contains: String
  endTime_starts_with: String
  endTime_not_starts_with: String
  endTime_ends_with: String
  endTime_not_ends_with: String
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  address: AddressWhereInput
  dishes_every: RecipeWhereInput
  dishes_some: RecipeWhereInput
  dishes_none: RecipeWhereInput
  allowSuggestedDishes: Boolean
  allowSuggestedDishes_not: Boolean
  guests_every: GuestWhereInput
  guests_some: GuestWhereInput
  guests_none: GuestWhereInput
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: ID
  url: String
}

type Guest {
  id: ID!
  user: User!
  response: String
}

type GuestConnection {
  pageInfo: PageInfo!
  edges: [GuestEdge]!
  aggregate: AggregateGuest!
}

input GuestCreateInput {
  id: ID
  user: UserCreateOneInput!
  response: String
}

input GuestCreateManyInput {
  create: [GuestCreateInput!]
  connect: [GuestWhereUniqueInput!]
}

type GuestEdge {
  node: Guest!
  cursor: String!
}

enum GuestOrderByInput {
  id_ASC
  id_DESC
  response_ASC
  response_DESC
}

type GuestPreviousValues {
  id: ID!
  response: String
}

input GuestScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  response: String
  response_not: String
  response_in: [String!]
  response_not_in: [String!]
  response_lt: String
  response_lte: String
  response_gt: String
  response_gte: String
  response_contains: String
  response_not_contains: String
  response_starts_with: String
  response_not_starts_with: String
  response_ends_with: String
  response_not_ends_with: String
  AND: [GuestScalarWhereInput!]
  OR: [GuestScalarWhereInput!]
  NOT: [GuestScalarWhereInput!]
}

type GuestSubscriptionPayload {
  mutation: MutationType!
  node: Guest
  updatedFields: [String!]
  previousValues: GuestPreviousValues
}

input GuestSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GuestWhereInput
  AND: [GuestSubscriptionWhereInput!]
  OR: [GuestSubscriptionWhereInput!]
  NOT: [GuestSubscriptionWhereInput!]
}

input GuestUpdateDataInput {
  user: UserUpdateOneRequiredInput
  response: String
}

input GuestUpdateInput {
  user: UserUpdateOneRequiredInput
  response: String
}

input GuestUpdateManyDataInput {
  response: String
}

input GuestUpdateManyInput {
  create: [GuestCreateInput!]
  update: [GuestUpdateWithWhereUniqueNestedInput!]
  upsert: [GuestUpsertWithWhereUniqueNestedInput!]
  delete: [GuestWhereUniqueInput!]
  connect: [GuestWhereUniqueInput!]
  set: [GuestWhereUniqueInput!]
  disconnect: [GuestWhereUniqueInput!]
  deleteMany: [GuestScalarWhereInput!]
  updateMany: [GuestUpdateManyWithWhereNestedInput!]
}

input GuestUpdateManyMutationInput {
  response: String
}

input GuestUpdateManyWithWhereNestedInput {
  where: GuestScalarWhereInput!
  data: GuestUpdateManyDataInput!
}

input GuestUpdateWithWhereUniqueNestedInput {
  where: GuestWhereUniqueInput!
  data: GuestUpdateDataInput!
}

input GuestUpsertWithWhereUniqueNestedInput {
  where: GuestWhereUniqueInput!
  update: GuestUpdateDataInput!
  create: GuestCreateInput!
}

input GuestWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  response: String
  response_not: String
  response_in: [String!]
  response_not_in: [String!]
  response_lt: String
  response_lte: String
  response_gt: String
  response_gte: String
  response_contains: String
  response_not_contains: String
  response_starts_with: String
  response_not_starts_with: String
  response_ends_with: String
  response_not_ends_with: String
  AND: [GuestWhereInput!]
  OR: [GuestWhereInput!]
  NOT: [GuestWhereInput!]
}

input GuestWhereUniqueInput {
  id: ID
}

type Ingredient {
  id: ID!
  name: String!
}

type IngredientConnection {
  pageInfo: PageInfo!
  edges: [IngredientEdge]!
  aggregate: AggregateIngredient!
}

input IngredientCreateInput {
  id: ID
  name: String!
}

input IngredientCreateManyInput {
  create: [IngredientCreateInput!]
  connect: [IngredientWhereUniqueInput!]
}

type IngredientEdge {
  node: Ingredient!
  cursor: String!
}

enum IngredientOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type IngredientPreviousValues {
  id: ID!
  name: String!
}

input IngredientScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [IngredientScalarWhereInput!]
  OR: [IngredientScalarWhereInput!]
  NOT: [IngredientScalarWhereInput!]
}

type IngredientSubscriptionPayload {
  mutation: MutationType!
  node: Ingredient
  updatedFields: [String!]
  previousValues: IngredientPreviousValues
}

input IngredientSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: IngredientWhereInput
  AND: [IngredientSubscriptionWhereInput!]
  OR: [IngredientSubscriptionWhereInput!]
  NOT: [IngredientSubscriptionWhereInput!]
}

input IngredientUpdateDataInput {
  name: String
}

input IngredientUpdateInput {
  name: String
}

input IngredientUpdateManyDataInput {
  name: String
}

input IngredientUpdateManyInput {
  create: [IngredientCreateInput!]
  update: [IngredientUpdateWithWhereUniqueNestedInput!]
  upsert: [IngredientUpsertWithWhereUniqueNestedInput!]
  delete: [IngredientWhereUniqueInput!]
  connect: [IngredientWhereUniqueInput!]
  set: [IngredientWhereUniqueInput!]
  disconnect: [IngredientWhereUniqueInput!]
  deleteMany: [IngredientScalarWhereInput!]
  updateMany: [IngredientUpdateManyWithWhereNestedInput!]
}

input IngredientUpdateManyMutationInput {
  name: String
}

input IngredientUpdateManyWithWhereNestedInput {
  where: IngredientScalarWhereInput!
  data: IngredientUpdateManyDataInput!
}

input IngredientUpdateWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput!
  data: IngredientUpdateDataInput!
}

input IngredientUpsertWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput!
  update: IngredientUpdateDataInput!
  create: IngredientCreateInput!
}

input IngredientWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [IngredientWhereInput!]
  OR: [IngredientWhereInput!]
  NOT: [IngredientWhereInput!]
}

input IngredientWhereUniqueInput {
  id: ID
}

scalar Long

type Meal {
  id: ID!
}

type MealConnection {
  pageInfo: PageInfo!
  edges: [MealEdge]!
  aggregate: AggregateMeal!
}

input MealCreateInput {
  id: ID
}

type MealEdge {
  node: Meal!
  cursor: String!
}

enum MealOrderByInput {
  id_ASC
  id_DESC
}

type MealPreviousValues {
  id: ID!
}

type MealSubscriptionPayload {
  mutation: MutationType!
  node: Meal
  updatedFields: [String!]
  previousValues: MealPreviousValues
}

input MealSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MealWhereInput
  AND: [MealSubscriptionWhereInput!]
  OR: [MealSubscriptionWhereInput!]
  NOT: [MealSubscriptionWhereInput!]
}

input MealWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [MealWhereInput!]
  OR: [MealWhereInput!]
  NOT: [MealWhereInput!]
}

input MealWhereUniqueInput {
  id: ID
}

type Mutation {
  createAddress(data: AddressCreateInput!): Address!
  updateAddress(data: AddressUpdateInput!, where: AddressWhereUniqueInput!): Address
  updateManyAddresses(data: AddressUpdateManyMutationInput!, where: AddressWhereInput): BatchPayload!
  upsertAddress(where: AddressWhereUniqueInput!, create: AddressCreateInput!, update: AddressUpdateInput!): Address!
  deleteAddress(where: AddressWhereUniqueInput!): Address
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  createGuest(data: GuestCreateInput!): Guest!
  updateGuest(data: GuestUpdateInput!, where: GuestWhereUniqueInput!): Guest
  updateManyGuests(data: GuestUpdateManyMutationInput!, where: GuestWhereInput): BatchPayload!
  upsertGuest(where: GuestWhereUniqueInput!, create: GuestCreateInput!, update: GuestUpdateInput!): Guest!
  deleteGuest(where: GuestWhereUniqueInput!): Guest
  deleteManyGuests(where: GuestWhereInput): BatchPayload!
  createIngredient(data: IngredientCreateInput!): Ingredient!
  updateIngredient(data: IngredientUpdateInput!, where: IngredientWhereUniqueInput!): Ingredient
  updateManyIngredients(data: IngredientUpdateManyMutationInput!, where: IngredientWhereInput): BatchPayload!
  upsertIngredient(where: IngredientWhereUniqueInput!, create: IngredientCreateInput!, update: IngredientUpdateInput!): Ingredient!
  deleteIngredient(where: IngredientWhereUniqueInput!): Ingredient
  deleteManyIngredients(where: IngredientWhereInput): BatchPayload!
  createMeal(data: MealCreateInput!): Meal!
  deleteMeal(where: MealWhereUniqueInput!): Meal
  deleteManyMeals(where: MealWhereInput): BatchPayload!
  createRecipe(data: RecipeCreateInput!): Recipe!
  updateRecipe(data: RecipeUpdateInput!, where: RecipeWhereUniqueInput!): Recipe
  updateManyRecipes(data: RecipeUpdateManyMutationInput!, where: RecipeWhereInput): BatchPayload!
  upsertRecipe(where: RecipeWhereUniqueInput!, create: RecipeCreateInput!, update: RecipeUpdateInput!): Recipe!
  deleteRecipe(where: RecipeWhereUniqueInput!): Recipe
  deleteManyRecipes(where: RecipeWhereInput): BatchPayload!
  createTime(data: TimeCreateInput!): Time!
  updateTime(data: TimeUpdateInput!, where: TimeWhereUniqueInput!): Time
  updateManyTimes(data: TimeUpdateManyMutationInput!, where: TimeWhereInput): BatchPayload!
  upsertTime(where: TimeWhereUniqueInput!, create: TimeCreateInput!, update: TimeUpdateInput!): Time!
  deleteTime(where: TimeWhereUniqueInput!): Time
  deleteManyTimes(where: TimeWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  address(where: AddressWhereUniqueInput!): Address
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  guest(where: GuestWhereUniqueInput!): Guest
  guests(where: GuestWhereInput, orderBy: GuestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guest]!
  guestsConnection(where: GuestWhereInput, orderBy: GuestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuestConnection!
  ingredient(where: IngredientWhereUniqueInput!): Ingredient
  ingredients(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ingredient]!
  ingredientsConnection(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IngredientConnection!
  meal(where: MealWhereUniqueInput!): Meal
  meals(where: MealWhereInput, orderBy: MealOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meal]!
  mealsConnection(where: MealWhereInput, orderBy: MealOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MealConnection!
  recipe(where: RecipeWhereUniqueInput!): Recipe
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe]!
  recipesConnection(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RecipeConnection!
  time(where: TimeWhereUniqueInput!): Time
  times(where: TimeWhereInput, orderBy: TimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Time]!
  timesConnection(where: TimeWhereInput, orderBy: TimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TimeConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Recipe {
  id: ID!
  name: String!
  url: String!
  type: String!
  totalMinutes: Int!
  times(where: TimeWhereInput, orderBy: TimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Time!]
  ingredients(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ingredient!]
}

type RecipeConnection {
  pageInfo: PageInfo!
  edges: [RecipeEdge]!
  aggregate: AggregateRecipe!
}

input RecipeCreateInput {
  id: ID
  name: String!
  url: String!
  type: String!
  totalMinutes: Int!
  times: TimeCreateManyInput
  ingredients: IngredientCreateManyInput
}

input RecipeCreateManyInput {
  create: [RecipeCreateInput!]
  connect: [RecipeWhereUniqueInput!]
}

type RecipeEdge {
  node: Recipe!
  cursor: String!
}

enum RecipeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  type_ASC
  type_DESC
  totalMinutes_ASC
  totalMinutes_DESC
}

type RecipePreviousValues {
  id: ID!
  name: String!
  url: String!
  type: String!
  totalMinutes: Int!
}

input RecipeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  totalMinutes: Int
  totalMinutes_not: Int
  totalMinutes_in: [Int!]
  totalMinutes_not_in: [Int!]
  totalMinutes_lt: Int
  totalMinutes_lte: Int
  totalMinutes_gt: Int
  totalMinutes_gte: Int
  AND: [RecipeScalarWhereInput!]
  OR: [RecipeScalarWhereInput!]
  NOT: [RecipeScalarWhereInput!]
}

type RecipeSubscriptionPayload {
  mutation: MutationType!
  node: Recipe
  updatedFields: [String!]
  previousValues: RecipePreviousValues
}

input RecipeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RecipeWhereInput
  AND: [RecipeSubscriptionWhereInput!]
  OR: [RecipeSubscriptionWhereInput!]
  NOT: [RecipeSubscriptionWhereInput!]
}

input RecipeUpdateDataInput {
  name: String
  url: String
  type: String
  totalMinutes: Int
  times: TimeUpdateManyInput
  ingredients: IngredientUpdateManyInput
}

input RecipeUpdateInput {
  name: String
  url: String
  type: String
  totalMinutes: Int
  times: TimeUpdateManyInput
  ingredients: IngredientUpdateManyInput
}

input RecipeUpdateManyDataInput {
  name: String
  url: String
  type: String
  totalMinutes: Int
}

input RecipeUpdateManyInput {
  create: [RecipeCreateInput!]
  update: [RecipeUpdateWithWhereUniqueNestedInput!]
  upsert: [RecipeUpsertWithWhereUniqueNestedInput!]
  delete: [RecipeWhereUniqueInput!]
  connect: [RecipeWhereUniqueInput!]
  set: [RecipeWhereUniqueInput!]
  disconnect: [RecipeWhereUniqueInput!]
  deleteMany: [RecipeScalarWhereInput!]
  updateMany: [RecipeUpdateManyWithWhereNestedInput!]
}

input RecipeUpdateManyMutationInput {
  name: String
  url: String
  type: String
  totalMinutes: Int
}

input RecipeUpdateManyWithWhereNestedInput {
  where: RecipeScalarWhereInput!
  data: RecipeUpdateManyDataInput!
}

input RecipeUpdateWithWhereUniqueNestedInput {
  where: RecipeWhereUniqueInput!
  data: RecipeUpdateDataInput!
}

input RecipeUpsertWithWhereUniqueNestedInput {
  where: RecipeWhereUniqueInput!
  update: RecipeUpdateDataInput!
  create: RecipeCreateInput!
}

input RecipeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  totalMinutes: Int
  totalMinutes_not: Int
  totalMinutes_in: [Int!]
  totalMinutes_not_in: [Int!]
  totalMinutes_lt: Int
  totalMinutes_lte: Int
  totalMinutes_gt: Int
  totalMinutes_gte: Int
  times_every: TimeWhereInput
  times_some: TimeWhereInput
  times_none: TimeWhereInput
  ingredients_every: IngredientWhereInput
  ingredients_some: IngredientWhereInput
  ingredients_none: IngredientWhereInput
  AND: [RecipeWhereInput!]
  OR: [RecipeWhereInput!]
  NOT: [RecipeWhereInput!]
}

input RecipeWhereUniqueInput {
  id: ID
  url: String
}

type Subscription {
  address(where: AddressSubscriptionWhereInput): AddressSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  guest(where: GuestSubscriptionWhereInput): GuestSubscriptionPayload
  ingredient(where: IngredientSubscriptionWhereInput): IngredientSubscriptionPayload
  meal(where: MealSubscriptionWhereInput): MealSubscriptionPayload
  recipe(where: RecipeSubscriptionWhereInput): RecipeSubscriptionPayload
  time(where: TimeSubscriptionWhereInput): TimeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Time {
  id: ID!
  minutes: Int!
  type: String!
}

type TimeConnection {
  pageInfo: PageInfo!
  edges: [TimeEdge]!
  aggregate: AggregateTime!
}

input TimeCreateInput {
  id: ID
  minutes: Int!
  type: String!
}

input TimeCreateManyInput {
  create: [TimeCreateInput!]
  connect: [TimeWhereUniqueInput!]
}

type TimeEdge {
  node: Time!
  cursor: String!
}

enum TimeOrderByInput {
  id_ASC
  id_DESC
  minutes_ASC
  minutes_DESC
  type_ASC
  type_DESC
}

type TimePreviousValues {
  id: ID!
  minutes: Int!
  type: String!
}

input TimeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  minutes: Int
  minutes_not: Int
  minutes_in: [Int!]
  minutes_not_in: [Int!]
  minutes_lt: Int
  minutes_lte: Int
  minutes_gt: Int
  minutes_gte: Int
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  AND: [TimeScalarWhereInput!]
  OR: [TimeScalarWhereInput!]
  NOT: [TimeScalarWhereInput!]
}

type TimeSubscriptionPayload {
  mutation: MutationType!
  node: Time
  updatedFields: [String!]
  previousValues: TimePreviousValues
}

input TimeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TimeWhereInput
  AND: [TimeSubscriptionWhereInput!]
  OR: [TimeSubscriptionWhereInput!]
  NOT: [TimeSubscriptionWhereInput!]
}

input TimeUpdateDataInput {
  minutes: Int
  type: String
}

input TimeUpdateInput {
  minutes: Int
  type: String
}

input TimeUpdateManyDataInput {
  minutes: Int
  type: String
}

input TimeUpdateManyInput {
  create: [TimeCreateInput!]
  update: [TimeUpdateWithWhereUniqueNestedInput!]
  upsert: [TimeUpsertWithWhereUniqueNestedInput!]
  delete: [TimeWhereUniqueInput!]
  connect: [TimeWhereUniqueInput!]
  set: [TimeWhereUniqueInput!]
  disconnect: [TimeWhereUniqueInput!]
  deleteMany: [TimeScalarWhereInput!]
  updateMany: [TimeUpdateManyWithWhereNestedInput!]
}

input TimeUpdateManyMutationInput {
  minutes: Int
  type: String
}

input TimeUpdateManyWithWhereNestedInput {
  where: TimeScalarWhereInput!
  data: TimeUpdateManyDataInput!
}

input TimeUpdateWithWhereUniqueNestedInput {
  where: TimeWhereUniqueInput!
  data: TimeUpdateDataInput!
}

input TimeUpsertWithWhereUniqueNestedInput {
  where: TimeWhereUniqueInput!
  update: TimeUpdateDataInput!
  create: TimeCreateInput!
}

input TimeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  minutes: Int
  minutes_not: Int
  minutes_in: [Int!]
  minutes_not_in: [Int!]
  minutes_lt: Int
  minutes_lte: Int
  minutes_gt: Int
  minutes_gte: Int
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  AND: [TimeWhereInput!]
  OR: [TimeWhereInput!]
  NOT: [TimeWhereInput!]
}

input TimeWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    