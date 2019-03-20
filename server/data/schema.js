const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Query {
  user(input: UserInput!): User
  allUsers(filter: UserFilter): [User]!
  strain(input: StrainInput!): Strain
  allStrains(filter: StrainFilter): [Strain]!
  getFeaturedList: [Strain]!
  getRelatedList(input: RelatedInput!): [Strain]!
}
type Strain {
  _id: String
  name: String
  price: [Float]
  strainImg: String
  packageImg: String
  description: String
  effect: [Int]
  genetic: Int
  yield: [Int]
  flowerTime: String
  difficulty: Int
  type: Int
  og: [String]
  pthc: [Float]
  pcbd: [Float]
  pcbn: [Float]
  country: [Int]
  sotiId: String
  indica: Float
  sativa: Float
  ruderalis: Float
  env: String
  rating: Float
  reviews: [String]
  ratingQuantity: [Int]
  featured: Boolean
  relationData: String
  releaseDate: String
  soldQuantity: [Int]
  inStock: Boolean
}
type User {
  _id: String
  username: String
  name: String
  badge: String
  locked: Boolean
  token: String
  admin: Boolean
  online: Boolean
  createdAt: String
  lastAction: String
}
type Subscription {
  userUpdate: User
}
type Custom {
  publishUserUpdate(input: UserInput!): User
}
input RelatedInput {
  limit: Int
  sotiId: String
}
input UserFilter {
  OR: [UserFilter!]
  is_admin: Boolean
}
input StrainFilter {
  OR: [StrainFilter!]
  genetic: Int
  nameContains: String
}
input StrainInput {
 name: String
  price: [Float]
  strainImg: String
  packageImg: String
  description: String
  effect: [Int]
  genetic: Int
  yield: [Int]
  flowerTime: String
  difficulty: Int
  type: Int
  og: [String]
  pthc: [Float]
  pcbd: [Float]
  pcbn: [Float]
  country: [Int]
  sotiId: String
  indica: Float
  sativa: Float
  ruderalis: Float
  env: String
  review: String
  featured: Boolean
  relationData: String,
  response: String
  releaseDate: String
}
input UserInput {
  id: String
  username: String
  name: String
  badge: String
  locked: Boolean
  token: String
  admin: Boolean
  online: Boolean
  lastAction: String
}

type Mutation {
  createStrain(input: StrainInput): Strain
  updateStrain(input: StrainInput): Strain
  verifyCredentials(input: UserInput!): User
  registerCredentials(input: UserInput!): User
  updateUser(input: UserInput!): User
  deleteUser(input: UserInput!): User
  typeToDom: [Strain]
}
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
