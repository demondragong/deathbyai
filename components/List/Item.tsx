import React from 'react';
import dynamic from 'next/dynamic';
import {
  format,
  formatDistance,
  parseISO,
  formatDistanceToNow,
} from 'date-fns';

import ex from '../../assets/ex.webp'
import ew from '../../assets/ew.webp'
import cr from '../../assets/cr.webp'
import en from '../../assets/en.webp'
import vu from '../../assets/vu.webp'
import nt from '../../assets/nt.webp'

import { ProductWithSlug } from '../../types/Product';
import Badge from '../Badge'; 

// Import Styled Components
import {
  ConservationStatus,
  ContentContainer,
  Description,
  Hope,
  Icon,
  IconContainer,
  ListItem,
} from './Item.atoms';

export default function Item(props: ProductWithSlug) {

  const isPast = () => {
    return new Date() > new Date(props.dateClose);
  };

  const getYears = () => {
    const duration = formatDistance(parseISO(props.dateClose), parseISO(props.dateOpen));

    if (!isPast()) {
      return ` It will be ${duration} old.`;
    }
    return ` It was ${duration} old.`;
  };

  const getIcon = () => {
    switch (props.conservationStatus) {
      case "ex":
        return <Icon src={ex.src} alt="extinct" />  
        break;
      case "ew":
        return <Icon src={ew.src} alt="extinct in the wild" />  
        break;
      case "cr":
        return <Icon src={cr.src} alt="critically endangered" />  
        break;
      case "en":
        return <Icon src={en.src} alt="endangered" />  
        break;
      case "vu":
        return <Icon src={vu.src} alt="vulnerable" />  
        break;
      case "nt":
        return <Icon src={nt.src} alt="near threatened" />  
        break;
      default:
        break;
    }
  };


  const conservationStatus = () => {
    
    switch (props.conservationStatus) {
      case "ex":
        return <ConservationStatus>Extinct</ConservationStatus>
        break;
      case "ew":
        return <ConservationStatus>Extinct in the Wild</ConservationStatus>
        break;
      case "cr":
        return <ConservationStatus>Critically Endangered</ConservationStatus>
        break;
      case "en":
        return <ConservationStatus>Endangered</ConservationStatus>
        break;
      case "vu":
        return <ConservationStatus>Vulnerable</ConservationStatus>
        break;
      case "nt":
        return <ConservationStatus>Near Threatened</ConservationStatus>
        break;
      default:
        break;
    }
  };


  return (
    <ListItem>
      <IconContainer>
        {getIcon()}
        {conservationStatus()}
        <Badge content={props.type} />
      </IconContainer>
      <ContentContainer>
        <h2>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {props.name}
          </a>
        </h2>
        <Description>
          {props.description}
        </Description>
        <Hope>
          {props.hope}
        </Hope>
      </ContentContainer>
    </ListItem>
  );
}

