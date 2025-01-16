import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import {
  formatCurrency,
  addDaysToDate,
  formatDateRange,
} from "../../utils/utils";

const CustomSelect = ({ value, onChange, options, currency }) => {
  return (
    <div className="relative inline-flex items-center">
      <select
        value={value}
        onChange={onChange}
        className="appearance-none bg-transparent text-transparent  text-md focus:outline-none py-1 pl-2 pr-2"
      >
        {options.map((option) => (
          <option
            className="text-blue-600"
            key={option.name}
            value={option.name}
          >
            {`${formatCurrency(option.price, currency)} - ${option.name}`}
          </option>
        ))}
      </select>
      {/* Sélection apparente uniquement avec le nom de la ville */}
      <div className="absolute text-blue-600 inset-y-0 left-0 pl-2 pointer-events-none flex items-center">
        {value}
      </div>
    </div>
  );
};

const CustomSelect1 = ({ value, onChange, options = [] }) => {
  return (
    <div className="relative inline-flex items-center">
      <select
        value={value}
        onChange={onChange}
        className="appearance-none bg-transparent text-transparent text-md focus:outline-none py-1 pl-2 pr-2"
      >
        {options.map((option) => (
          <option
            className="text-blue-600"
            key={option.name}
            value={option.name}
          >
            {`${option.name}`}
          </option>
        ))}
      </select>
      <div className="absolute text-blue-600 inset-y-0 left-0 pl-2 pointer-events-none flex items-center">
        {value}
      </div>
    </div>
  );
};

const DeliveryInfo = ({
  initialCity,
  initialCity1,
  initialPrice,
  currency,
  unit,
  startDate,
  daysRange,
  cities,
  cityNames,
  isSample = false,
}) => {
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [price, setPrice] = useState(initialPrice);
  const [deliveryDays, setDeliveryDays] = useState(daysRange);
  const [selectedCityNames, setSelectedCityNames] = useState(initialCity1);

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    const selectedCityObj = cities.find((city) => city.name === cityName) || {};
    setSelectedCity(cityName);
    setPrice(selectedCityObj.price || 0);
    setDeliveryDays(isSample ? 0 : daysRange + 2);
  };
  const handleCityNamesChange = (e) => {
    const selectedCityName = e.target.value;

    if (!Array.isArray(cityNames)) {
      console.error("cityNames is not a valid array:", cityNames);
      return;
    }

    // Mettez directement à jour la ville sélectionnée
    setSelectedCityNames(selectedCityName);
  };

  const getDeliveryTimeText = () => {
    if (isSample) {
      return (
        <div>
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
              <FiChevronDown className="h-4 w-4 text-blue-600 -ml-[85px]" />
            </div>
          </div>
          <div>
            Délais: -2 heures
            <br />
            Prix: {formatCurrency(price, currency)}/{unit}
          </div>
        </div>
      );
    }
    const newEndDate = addDaysToDate(startDate, deliveryDays);
    return (
      <div>
        <div className="flex items-center">
          <span className="font-medium text-md text-gray-900 mr-1">
            Livraison à
          </span>
          <div className="flex items-center -ml-2">
            <CustomSelect1
              value={selectedCityNames}
              onChange={handleCityNamesChange}
              options={cityNames || []}
            />
            <FiChevronDown className="h-4 w-4 text-blue-600 -ml-2" />
          </div>
        </div>
        {formatDateRange(startDate, newEndDate)} (10 - {deliveryDays} jours)
        <br />
        <p className="mt-2 text-xs text-black font-medium">
          (Paiement du transport à la livraison)
        </p>
      </div>
    );
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className=" hidden items-center">
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
      <p className="mt-2 hidden text-gray-600 text-sm">
        Prix:{" "}
        <span className="font-base">
          {formatCurrency(price, currency)}/{unit}
        </span>
      </p>
      <p className="mt-1 text-gray-600 text-sm">
        <span className="font-base">{getDeliveryTimeText()}</span>
      </p>
      <p className="mt-2 hidden text-xs text-black font-medium">
        (Paiement du transport à la livraison)
      </p>
    </div>
  );
};

export default DeliveryInfo;
