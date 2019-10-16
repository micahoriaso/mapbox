import { SemanticICONS, SemanticCOLORS } from "semantic-ui-react";

export interface LocationResource {
  type: string;
  features: Location[];
}
export interface Location {
  type: string;
  properties: LocationProperties;
  geometry: LocationGeometry;
}

export interface LocationProperties {
  Round_of_Mapping: string | null;
  Facility_Service_Name: string | null;
  Latitude: number | null;
  Longitude: number | null;
  Altitude: number | null;
  Country: string | null;
  Centre: string | null;
  Facility_Service_type: string | null;
  Broad_Category: string | null;
  Facility_Service_shared_by_people: string | null;
  Facility_Service_not_shared_by_people_reason: string | null;
  Challenges_facility_sharing_present: string | null;
  Challenges: string | null;
  Driver_of_peace: string | null;
  Efforts_solutions_ongoing: string | null;
  Recommendations: string | null;
  People_served_at_Facility_Per_Day: number | null;
  Benefits_across_border: string | null;
}

export interface LocationGeometry {
  type: string;
  coordinates: Array<number>;
}

export interface LocationData {
  type: string;
  features: LocationProperties[];
}

export interface Filters {
  [key: string]: Array<string>;
}

export interface ViewPort {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface IconResource {
  icon: SemanticICONS;
  color: SemanticCOLORS;
}
