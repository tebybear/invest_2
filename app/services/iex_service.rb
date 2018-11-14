require 'net/http'
require 'json'
require 'uri'

class IexService
  def quote(symbol)
    url = "https://api.iextrading.com/1.0/stock/#{symbol}/quote"
    uri = URI(url)
    result = Net::HTTP.get(uri)
    if result != "Unknown symbol"
      @quote = JSON.parse(result)
    else
      @quote = "N/A"
    end
  end
end
