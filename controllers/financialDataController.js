const FinancialData = require("../model/FinancialData");
const calculateScore = async (req, res) => {
  const { income, expenses, debts, assets } = req.body;
  try {
    const netIncome = income + assets;
    const netLoss = expenses + debts;
    let netScore = ((netIncome/netLoss)*100).toFixed(2);
    let score = 0;
    if(netScore > 100 ){
        score = 100;
    }else{
        score = netScore;
    }

    const financialData = new FinancialData({
      income,
      expenses,
      debts,
      assets,
      score,
    });
    const data = await financialData.save();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  calculateScore,
};
