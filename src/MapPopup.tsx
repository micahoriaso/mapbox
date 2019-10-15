import React, {SetStateAction, Dispatch} from 'react';
import {Popup} from 'react-map-gl';
import PopupListItem from './PopupListItem'
import { Location } from './types';


const MapPopup = ({selectedLocation, setSelectedLocation}: {selectedLocation: Location, setSelectedLocation: Dispatch<SetStateAction<Location | null>>}) => (
  <Popup
    longitude={selectedLocation.geometry.coordinates[0]}
    latitude={selectedLocation.geometry.coordinates[1]}
    onClose={() => setSelectedLocation(null)}
    className="map-popup"
    >
    <div>
      <div className="location-title">{selectedLocation.properties.Facility_Service_Name}</div>
      <PopupListItem
        propertyKey={"Facility/Service Type:"}
        propertyValue={selectedLocation.properties.Facility_Service_type}
      />
      <PopupListItem
        propertyKey={"Broad category:"}
        propertyValue={selectedLocation.properties.Broad_Category}
      />
      <PopupListItem
        propertyKey={"Country:"}
        propertyValue={selectedLocation.properties.Country}
      />
      <PopupListItem
        propertyKey={"Center:"}
        propertyValue={selectedLocation.properties.Centre}
      />
      <PopupListItem
        propertyKey={"Facility/Service shared accross border:"}
        propertyValue={selectedLocation.properties.Facility_Service_shared_by_people}
      />
      <PopupListItem
        propertyKey={"Why Facility/Service is not shared across border:"}
        propertyValue={selectedLocation.properties.Facility_Service_not_shared_by_people_reason}
      />
      <PopupListItem
        propertyKey={"People served at facility per day:"}
        propertyValue={selectedLocation.properties.People_served_at_Facility_Per_Day}
      />
      <PopupListItem
        propertyKey={"Challenge present with sharing resource:"}
        propertyValue={selectedLocation.properties.Challenges_facility_sharing_present}
      />
      <PopupListItem
        propertyKey={"Specific challenge:"}
        propertyValue={selectedLocation.properties.Challenges}
      />
      <PopupListItem
        propertyKey={"Ongoing efforsts to solve challenges:"}
        propertyValue={selectedLocation.properties.Efforts_solutions_ongoing}
      />
      <PopupListItem
        propertyKey={"Driver of peace at facility:"}
        propertyValue={selectedLocation.properties.Driver_of_peace}
      />
      <PopupListItem
        propertyKey={"Recommendations:"}
        propertyValue={selectedLocation.properties.Recommendations}
      />
      <PopupListItem
        propertyKey={"Benefit of facility across border:"}
        propertyValue={selectedLocation.properties.Benefits_across_border}
      />
      <PopupListItem
        propertyKey={"Phase of mapping:"}
        propertyValue={selectedLocation.properties.Round_of_Mapping}
      />
      <PopupListItem
        propertyKey={"Altitude:"}
        propertyValue={selectedLocation.properties.Altitude}
      />
    </div>
  </Popup>
);

export default MapPopup;