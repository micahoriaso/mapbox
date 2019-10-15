import Sidebar from './SideBar';
import MapPopup from './MapPopup';
import React, {MouseEvent} from 'react';
import { Icon, CheckboxProps } from 'semantic-ui-react';
import *  as allLocations from './data/locationData.json';
import ReactMapGl, {Marker, NavigationControl} from 'react-map-gl';
import { Location, Filters, ViewPort, LocationResource, IconResource } from './types';

const Map = () => {
  let filteredLocations = [];

  const [viewPort, setViewPort] = React.useState<ViewPort>({
    latitude: 0.336765,
    longitude: 34.169276,
    zoom: 9.9,
  })

  const [filters, setFilters]  = React.useState<Filters>({
    "type": [],
    "challenges": [],
    "shared": [],
    "country": [],
    "round": []
  });

  const [selectedLocation, setSelectedLocation] = React.useState<Location | null>(null);
  const [mapStyle, setMapStyle] = React.useState<string>('mapbox://styles/micahoriaso/ck0y66q3n042q1cqszv749n02');

  const [locationData, setLocationData] = React.useState<LocationResource>(
    {
      "type": "FeatureCollection",
      "features": []
    }
  );
  const handleChangeMapStyle = (e:  React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
    const {value} = data;

    setMapStyle(String(value!));
  }

  const handleOnchange = (e:  React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {

    const {value, name, checked} = data
    const formattedName = String(name!)
    const formattedValue = String(value!)

    if (checked) {
      filters[formattedName] = [...filters[formattedName], formattedValue];
      setFilters({
        ...filters
      })
    }
    else {
      filters[formattedName] = filters[formattedName].filter(item => item !== value);
      setFilters({
        ...filters
      })
    }


    if (
        filters.challenges.length === 0 &&
        filters.country.length === 0 &&
        filters.round.length === 0 &&
        filters.shared.length === 0 &&
        filters.type.length === 0) {

      return setLocationData({
        ...locationData,
        features: []
      })
    }

    setLocationData({
      ...locationData,
      features: [...filterLocation()]
    })
  }


  const getPinIcon = (locationType: string): IconResource => {
    let pin: IconResource;

    switch (locationType) {
      case 'Administrative Offices and Services across the Border' :
        pin = {
          icon: "building",
          color: "black"
        };
        break;
      case 'Business and Financial Service Intitutions/Services' :
        pin = {
          icon:"dollar sign",
          color: "green"
        };
        break;
      case 'Education Facilities and Institutions' :
        pin = {
          icon:"university",
          color: "brown"
        };
        break;
      case 'Entertainment and Hospitality Facilities and Services' :
        pin = {
          icon:"utensils",
          color: "purple"
        };
        break;
      case 'Health Facilities, Centres and institutions' :
        pin = {
          icon:"hospital symbol",
          color: "olive"
        };
        break;
      case 'Roads, Bridges and other Infastructure' :
        pin = {
          icon:"road",
          color: "brown"
        };
        break;
      case 'Market and Trade Facilities' :
        pin = {
          icon:"shopping cart",
          color: "orange"
        };
        break;
      case 'Natural Resource eg Water Source, Lake, Swamp, Mineral Deposit' :
        pin = {
          icon:"leaf",
          color: "green"
        };
        break;
      case 'NGO/FBO/Society or Community Focus/Based Organizations' :
        pin = {
          icon:"users",
          color: "teal"
        };
        break;
      case 'Religious Intitutions and Services (Church, Mosques)' :
        pin = {
          icon:"plus",
          color: "purple"
        };
        break;
      case 'Social Amenities and Services' :
        pin = {
          icon:"id card",
          color: "grey"
        };
        break;
      default:
        pin = {
          icon: "map marker",
          color: "blue"
        };
        break;
    }

    return pin
  }

  const filterByType = (location: Location) => {
    if (filters.type.length > 0){
      return filters.type.includes(location.properties.Facility_Service_type!);
    }
    else {
      return true
    }
  }

  const filterByChallenges = (location: Location) => {
    if (filters.challenges.length > 0){
      return filters.challenges.includes(location.properties.Challenges_facility_sharing_present!);
    }
    else {
      return true
    }
  }
  const filterByCountry = (location: Location) => {
    if (filters.country.length > 0){
      return filters.country.includes(location.properties.Country!);
    }
    else {
      return true
    }
  }
  const filterByRound = (location: Location) => {
    if (filters.round.length > 0){
      return filters.round.includes(location.properties.Round_of_Mapping!);
    }
    else {
      return true
    }
  }

  const filterByIsShared = (location: Location) => {
    if (filters.shared.length > 0){
      return filters.shared.includes(location.properties.Facility_Service_shared_by_people!);
    }
    else {
      return true
    }
  }

  const filterLocation = (): Location[] => {
      filteredLocations = [
        ...allLocations.features.filter (
          location => filterByType(location) && filterByChallenges(location) && filterByCountry(location) && filterByRound(location) && filterByIsShared(location)
        )
      ]
    return filteredLocations;
  }

  return (
  <div className="main-container">
    <div className="map-container">
      <ReactMapGl
        mapStyle={mapStyle}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewPort => {setViewPort(viewPort)}}
        width='100%'
        height= '100%'
        {...viewPort}
      >
       <div className="navigation-control">
          <NavigationControl />
        </div>
        {
          locationData.features.length > 0 && locationData.features.map(
            (location: Location, index: number) => (
              <Marker
                key={index}
                longitude={location.geometry.coordinates[0]}
                latitude={location.geometry.coordinates[1]}
              >
              <Icon
                circular={true}
                inverted={true}
                className="location-pointer"
                name={getPinIcon(location.properties.Facility_Service_type!).icon}
                color={getPinIcon(location.properties.Facility_Service_type!).color}
                onClick={ (e: MouseEvent) => {
                  e.preventDefault();
                  setSelectedLocation(location)
                }}
              />
              </Marker>
            )
          )
        }
        {
          selectedLocation &&
          <MapPopup
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        }
      </ReactMapGl>
    </div>
    <div className="controls-container">
      <Sidebar
        handleOnchange={handleOnchange}
        handleChangeMapStyle={handleChangeMapStyle}
        locationData={locationData}
        mapStyle={mapStyle}
      />
    </div>
  </div>
  )
}

export default Map;