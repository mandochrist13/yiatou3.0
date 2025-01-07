import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { formatCurrency, addDaysToDate, formatDateRange } from '../../utils/utils';

const CustomSelect = ({ value, onChange, options, currency }) => {
  return (
    <div className="relative inline-flex items-center">
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="appearance-none bg-transparent text-md text-blue-600 focus:outline-none py-1 pl-2 pr-2"
        >
          {options.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name === value ? option.name : `${formatCurrency(option.price, currency)} - ${option.name}`}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const DeliveryInfo = ({ 
  initialCity, 
  initialPrice, 
  currency, 
  unit, 
  startDate, 
  endDate, 
  daysRange, 
  cities,
  isSample = false
}) => {
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [price, setPrice] = useState(initialPrice);
  const [deliveryDays, setDeliveryDays] = useState(daysRange);

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    const selectedCityObj = cities.find(city => city.name === cityName);
    setSelectedCity(cityName);
    setPrice(selectedCityObj.price);
    setDeliveryDays(isSample ? 0 : daysRange + 2);
  };

  const getDeliveryTimeText = () => {
    if (isSample) {
      return "-2 heures";
    }
    const newEndDate = addDaysToDate(startDate, deliveryDays);
    return `${formatDateRange(startDate, newEndDate)} (10 - ${deliveryDays} jours)`;
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center">
        <span className="font-medium text-md text-gray-900 mr-1">
          Livraison à
        </span>
        <div className="flex items-center -ml-2">
          <CustomSelect
            value={selectedCity}
            onChange={handleCityChange}
            options={cities}
            currency={currency}
          />
          <FiChevronDown className="h-4 w-4 text-blue-600 -ml-24" />
        </div>
      </div>
      <p className="mt-2 text-gray-600 text-sm">
        Prix: <span className="font-base">{formatCurrency(price, currency)}/{unit}</span>
      </p>
      <p className="mt-1 text-gray-600 text-sm">
        Délais: <span className="font-base">{getDeliveryTimeText()}</span>
      </p>
      <p className="mt-2 text-xs text-black font-medium">
        (Paiement du transport à la livraison)
      </p>
    </div>
  );
};

export default DeliveryInfo;
