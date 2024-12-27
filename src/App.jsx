import { useState } from 'react';
import SelectStockDialog from './components/SelectStockDialog';

const App = () => {
  const [selectedStock, setSelectedStock] = useState(null);
  const [stockData, setStockData] = useState(null);

  // Fetch stock data (dummy data for now)
  const fetchStockData = (symbol) => {
    const stockData = {
      AAPL: { price: 190.56, change: '+1.23%', volume: '45M' },
      TSLA: { price: 245.33, change: '-0.87%', volume: '30M' },
      AMZN: { price: 132.98, change: '+0.56%', volume: '20M' },
      GOOGL: { price: 2785.67, change: '+2.45%', volume: '10M' },
      MSFT: { price: 299.25, change: '+1.67%', volume: '15M' },
      META: { price: 351.45, change: '-0.58%', volume: '12M' },
      NVDA: { price: 475.33, change: '+3.12%', volume: '8M' },
      SPY: { price: 421.22, change: '+0.98%', volume: '20M' },
      BA: { price: 229.56, change: '-0.65%', volume: '6M' },
      DIS: { price: 186.34, change: '+1.12%', volume: '5M' },
      NFLX: { price: 510.12, change: '-1.45%', volume: '7M' },
      INTC: { price: 57.88, change: '-0.75%', volume: '25M' },
      AMD: { price: 116.67, change: '+2.89%', volume: '9M' },
      PYPL: { price: 297.85, change: '+0.34%', volume: '18M' },
      V: { price: 240.11, change: '+0.76%', volume: '14M' },
      JNJ: { price: 167.98, change: '+0.95%', volume: '22M' },
      PFE: { price: 43.67, change: '-0.22%', volume: '16M' },
      GM: { price: 41.88, change: '+1.78%', volume: '11M' },
      CVX: { price: 169.67, change: '+0.45%', volume: '5M' },
      KO: { price: 59.55, change: '+0.65%', volume: '13M' },
    };
    
    return stockData[symbol];
  };

  const handleSelectStock = (symbol) => {
    const data = fetchStockData(symbol);
    setStockData(data);
    setSelectedStock(symbol);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-xl bg-gray-800 rounded-lg p-6 flex flex-col items-center">
        <header className="mb-6 text-center">
          <h1 className="text-2xl">Stock Dashboard</h1>
          
        </header>
        <main className="w-full">
          <SelectStockDialog
            setSelectedStock={handleSelectStock}
            fetchStockData={fetchStockData}

          />
        </main>

        
        {stockData && (
          <div className="w-full mt-6 bg-green-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl mb-2">{selectedStock} Stock Information</h2>
            <p className="text-lg">Price: ${stockData.price}</p>
            <p className="text-lg">Change: {stockData.change}</p>
            <p className="text-lg">Volume: {stockData.volume}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
