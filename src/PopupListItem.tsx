import React from 'react';

const PopupListItem = ({propertyKey, propertyValue}: {propertyKey: string, propertyValue: any}) => (
  <div className="location-property">
    <div className="location-property-key">{propertyKey}</div>
    <div className="location-property-value">{propertyValue ? propertyValue : <span className="value-not-set">Not set</span>}</div>
  </div>
)

export default PopupListItem;
