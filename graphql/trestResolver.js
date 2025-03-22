const resolvers = {
  Query: {
    premiumAdjustment: (_, { id }) => {
      // Sample data
      const adjustments = [
        {
          id: "1",
          Comment: "Initial adjustment",
          Total_Borrower_Fees: 100.0,
          CU_Retail_Rate: 5.0,
          Protected_Loan_Amount: 5000.0,
          Pay_Rate: 4.5,
          Premium_Due: 200.0,
          Total_Amount: 5300.0,
        },
      ];

      return adjustments.find((adjustment) => adjustment.id === id) || null;
    },
  },
  Mutation: {
    editPremiumAdjustment: (_, { input }) => {
      // Sample data management logic
      let adjustments = [
        {
          id: "1",
          Comment: "Initial adjustment",
          Total_Borrower_Fees: 100.0,
          CU_Retail_Rate: 5.0,
          Protected_Loan_Amount: 5000.0,
          Pay_Rate: 4.5,
          Premium_Due: 200.0,
          Total_Amount: 5300.0,
        },
      ];

      const index = adjustments.findIndex((adjustment) => adjustment.id === input.id);
      if (index !== -1) {
        adjustments[index] = { ...adjustments[index], ...input };
        return adjustments[index];
      }

      return null;
    },
  },
};

export default resolvers;