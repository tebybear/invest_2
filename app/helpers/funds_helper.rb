module FundsHelper
  def has_investments(fund)
    if fund.investments.count > 0
      true
    end
  end
end
