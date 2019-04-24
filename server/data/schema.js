const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Query {
  user(input: UserInput!): User
  allUsers(filter: UserFilter): [User]!
  strain(input: StrainInput!): Strain
  allStrains(filter: StrainFilter): [Strain]!
}
type Strain {
  _id: String
  company: [String]
  website: [String]
  alias: [String]

  name: String
  price: [[Float]]
  description: [String]
  effect: [Int]
  yield: [Int]
  genetic: Int
  flowerTime: [Int]
  difficulty: Int
  indica: Float
  sativa: Float
  ruderalis: Float
  type: Int
  environment: Int
  relations: [String]
  pThc: Float
  pCbd: Float
  pCbn: Float
  country: [Int]
  moreInfo: [[String]]
  breeder: [String]

  reviews: [String]

  sotiId: [String]
  sttId: [String]
  releaseDate: [String]

  qtyPacked: [[[Int]]]
  qtyPackedROP: [[[Int]]]
  qtyPackedNOE: [[[Int]]]
  qtyLoose: [Int]
  qtyLooseROP: [Int]
  qtyLooseNOE: [Int]
  qtySold: [[[Int]]]
  location: [[String]]
  category: Int
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
  company: [String]
  website: [String]
  alias: [String]

  name: String
  price: [[Float]]
  description: [String]
  effect: [Int]
  yield: [Int]
  genetic: Int
  flowerTime: [Int]
  difficulty: Int
  indica: Float
  sativa: Float
  ruderalis: Float
  type: Int
  environment: Int
  relations: [String]
  pThc: Float
  pCbd: Float
  pCbn: Float
  country: [Int]
  moreInfo: [[String]]
  breeder: [String]

  reviews: [String]

  sotiId: [String]
  sttId: [String]
  releaseDate: [String]

  qtyPacked: [[[Int]]]
  qtyPackedROP: [[[Int]]]
  qtyPackedNOE: [[[Int]]]
  qtyLoose: [Int]
  qtyLooseROP: [Int]
  qtyLooseNOE: [Int]
  qtySold: [[[Int]]]
  location: [[String]]
  category: Int
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
