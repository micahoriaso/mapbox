import React, { ReactElement } from "react";

const PopupListItem = ({
  propertyKey,
  propertyValue
}: {
  propertyKey: string;
  propertyValue: string | number | null;
}): ReactElement => (
  <div className="location-property">
    <div className="location-property-key">{propertyKey}</div>
    <div className="location-property-value">
      {propertyValue ? (
        propertyValue
      ) : (
        <span className="value-not-set">Not set</span>
      )}
    </div>
  </div>
);

export default PopupListItem;
