import React from 'react';



const resx = {
  en: {
    meta: {
      label: 'English',
      iconOffset: 0,
    },
    title: 'Prebook your Taxi or Limousine',
    whenAndWhen: 'Where & When',
    chooseCar: 'Choose a Car',
    detailsAndPayment: 'Details & Payment',
  },
  
  de: {
    meta: {
      label: 'Deutsch',
      iconOffset: 16,
    },
  },

  es: { 
    meta: {
      label: 'Español',
      iconOffset: 32,
    },
  },

  fr: {
    meta: {
      label: 'Français',
      iconOffset: 48,
    },
  },

  it: {
    meta: {
      label: 'Italiano',
      iconOffset: 64,
    },
  },

  pl: {
    meta: {
      label: 'Polski',
      iconOffset: 80,
    },
  },
}
export default resx



export const ResxContext = React.createContext('test') 



export const getResxMetaData = function() {
  let result = {}
  Object.entries(resx).forEach(([key, val]) => {
    result[key] = {...val.meta}
  });

  return result;
}