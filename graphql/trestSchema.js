import { gql } from 'apollo-server';

const typeDefs = `
  type Query {
    premiumAdjustment(id: ID!): PremiumAdjustment
  }

  type Mutation {
    editPremiumAdjustment(input: EditPremiumAdjustmentInput!): PremiumAdjustment
  }

  input EditPremiumAdjustmentInput {
    id: ID!
    Comment: String!
    Total_Borrower_Fees: Float
    CU_Retail_Rate: Float
    Protected_Loan_Amount: Float
    Pay_Rate: Float
    Premium_Due: Float
    Total_Amount: Float
  }

  type PremiumAdjustment {
    id: ID!
    Comment: String!
    Total_Borrower_Fees: Float
    CU_Retail_Rate: Float
    Protected_Loan_Amount: Float
    Pay_Rate: Float
    Premium_Due: Float
    Total_Amount: Float
  }
`;

export default typeDefs;