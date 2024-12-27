import { useState } from 'react';
import { stocks } from '../../utils/dummyData'; 

const SelectStockDialog = ({ setSelectedStock, fetchStockData }) => {
  const [selected, setSelected] = useState('');
  const [stockDetails, setStockDetails] = useState(null);

 
  const handleSelect = (event) => {
    const stockSymbol = event.target.value;
    setSelected(stockSymbol);

   
    const stock = stocks.find((stock) => stock.symbol === stockSymbol);
    setStockDetails(stock ? fetchStockData(stockSymbol) : null);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 text-white rounded-lg p-6 w-96">
        <h2 className="text-xl mb-4">Select a Stock</h2>

        
        <form>
          <div className="mb-4">
            <label className="block text-3xl mb-2 ">Choose a stock:</label>
            <select
              value={selected}
              onChange={handleSelect}
              className="p-10 bg-gray-700 text-white rounded w-full"
            >
              <option value="">Select a stock...</option>
              {stocks.map((stock) => (
                <option key={stock.id} value={stock.symbol}>
                  {stock.name} ({stock.symbol})
                </option>
              ))}
            </select>
          </div>
          {stockDetails && (
            <div>
              <h3 className="text-lg mb-2">{stockDetails.name}</h3>
              <p>Price: ${stockDetails.price}</p>
              <p>Change: {stockDetails.change}</p>
              <p>Volume: {stockDetails.volume}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SelectStockDialog;
