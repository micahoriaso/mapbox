import React, {FormEvent} from 'react';
import { LocationResource } from './types';
import { Checkbox, Form, Segment, Statistic, Icon, Header, Divider, CheckboxProps } from 'semantic-ui-react'


const Sidebar = (
  {handleOnchange, locationData, handleChangeMapStyle, mapStyle} :
  {
    handleOnchange: (event: FormEvent<HTMLInputElement>, data: CheckboxProps) => void,
    locationData: LocationResource,
    handleChangeMapStyle: (event: FormEvent<HTMLInputElement>, data: CheckboxProps) => void,
    mapStyle: string}) => (
  <div className="sidebar">
      <Segment vertical textAlign='left'>
      <Header as='h3' color="grey" block>DMERL EASSI PROJECT</Header>
      <Form>
      <Header as='h4'>
        Points of interest
      </Header>
      <Form.Field>
      <Icon circular inverted name='building' color="black"/>
        <Checkbox
        name="type"
        value="Administrative Offices and Services across the Border"
        onChange={handleOnchange}
        label='Administrative institutions' />
      </Form.Field>
      <Form.Field>
      <Icon circular inverted name='dollar sign' color="green"/>
        <Checkbox
        name="type"
        value="Business and Financial Service Intitutions/Services"
        onChange={handleOnchange}
        label='Business institutions' />
      </Form.Field>
      <Form.Field>
        <Icon circular inverted name='university' color="brown"/>
        <Checkbox
        name="type"
        value="Education Facilities and Institutions"
        onChange={handleOnchange}
        label='Educational institutions' />
      </Form.Field>
      <Form.Field>
      <Icon circular inverted name='utensils' color="purple"/>
        <Checkbox
        name="type"
        value="Entertainment and Hospitality Facilities and Services"
        onChange={handleOnchange}
        label='Entertainment/Hospitality institutions' />
      </Form.Field>
      <Form.Field>
        <Icon circular inverted name='hospital symbol' color="olive"/>
        <Checkbox
        name="type"
        value="Health Facilities, Centres and institutions"
        onChange={handleOnchange}
        label='Health institutions' />
      </Form.Field>
      <Form.Field>
        <Icon circular inverted name='road' color="brown"/>
        <Checkbox
        name="type"
        value="Roads, Bridges and other Infastructure"
        onChange={handleOnchange}
        label='Infrastructure' />
      </Form.Field>
      <Form.Field>
        <Icon circular inverted name='shopping cart' color="orange"/>
        <Checkbox
        name="type"
        value="Market and Trade Facilities"
        onChange={handleOnchange}
        label='Market/Trade insttitutions' />
      </Form.Field>
      <Form.Field>
        <Icon circular inverted name='leaf' color="green"/>
        <Checkbox
        name="type"
        value="Natural Resource eg Water Source, Lake, Swamp, Mineral Deposit"
        onChange={handleOnchange}
        label='Natural resources' />
      </Form.Field>
      <Form.Field>
        <Icon circular inverted name='users' color="teal"/>
        <Checkbox
        name="type"
        value="NGO/FBO/Society or Community Focus/Based Organizations"
        onChange={handleOnchange}
        label='Community Based Organisations' />
      </Form.Field>
      <Form.Field>
        <Icon circular inverted name='plus' color="purple"/>
        <Checkbox
        name="type"
        value="Religious Intitutions and Services (Church, Mosques)"
        onChange={handleOnchange}
        label='Religious Facilities' />
      </Form.Field>
      <Form.Field>
        <Icon circular inverted name='id card' color="grey"/>
        <Checkbox
        name="type"
        value="Social Amenities and Services"
        onChange={handleOnchange}
        label='Social Amenities' />
      </Form.Field>

        <Header as='h4'>
        Round of Mapping
        </Header>

      <Form.Field>
        <Checkbox
        name="round"
        value="1st Round"
        onChange={handleOnchange}
        label='First Round' />
      </Form.Field>
      <Form.Field>
        <Checkbox
        name="round"
        value="Second round"
        onChange={handleOnchange}
        label='Second Round' />
      </Form.Field>


      <Header as='h4'>
      Operational Challenges
      </Header>

      <Form.Field>
        <Checkbox
        name="challenges"
        value="Yes"
        onChange={handleOnchange}
        label='Challenges present' />
      </Form.Field>
      <Form.Field>
        <Checkbox
        name="challenges"
        value="No"
        onChange={handleOnchange}
        label='Challenges absent' />
      </Form.Field>

      <Header as='h4'>
      Facilities shared across countries
      </Header>

      <Form.Field>
        <Checkbox
        name="shared"
        value="Yes"
        onChange={handleOnchange}
        label='Shared' />
      </Form.Field>
      <Form.Field>
        <Checkbox
        name="shared"
        value="No"
        onChange={handleOnchange}
        label='Not shared' />
      </Form.Field>


      <Header as='h4'>
      Country
      </Header>


      <Form.Field>
        <Checkbox
        name="country"
        value="Kenya"
        onChange={handleOnchange}
        label='Kenya' />
      </Form.Field>
      <Form.Field>
        <Checkbox
        name="country"
        value="Uganda"
        onChange={handleOnchange}
        label='Uganda' />
      </Form.Field>
      <Form.Field>
        <Checkbox
        name="country"
        value="Other/No Mans Land"
        onChange={handleOnchange}
        label='No mans land' />
      </Form.Field>

      <Divider />

      <Form.Field>
        <Checkbox
          radio
          label='Street View'
          name='checkboxRadioGroup'
          onChange={handleChangeMapStyle}
          checked={mapStyle === 'mapbox://styles/micahoriaso/ck0y66q3n042q1cqszv749n02'}
          value='mapbox://styles/micahoriaso/ck0y66q3n042q1cqszv749n02'
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Satellite View'
          name='checkboxRadioGroup'
          onChange={handleChangeMapStyle}
          checked={mapStyle === 'mapbox://styles/micahoriaso/ck1anddqi02vj1cpg8is5rbty'}
          value='mapbox://styles/micahoriaso/ck1anddqi02vj1cpg8is5rbty'
        />
      </Form.Field>
      </Form>

      <Statistic horizontal>
        <Statistic.Value>
          <Icon name='location arrow' color="blue"/>{locationData.features.length}
        </Statistic.Value>
        <Statistic.Label>Locations</Statistic.Label>
      </Statistic>
      </Segment>
    </div>
)

export default Sidebar;