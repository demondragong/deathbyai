import React from "react";
import dynamic from "next/dynamic";
import {
  format,
  formatDistance,
  parseISO,
  formatDistanceToNow,
} from "date-fns";

import ExIcon from "../../assets/ex.svg";
import EwIcon from "../../assets/ew.svg";
import CrIcon from "../../assets/cr.svg";
import EnIcon from "../../assets/en.svg";
import VuIcon from "../../assets/vu.svg";
import NtIcon from "../../assets/nt.svg";

import { ProductWithSlug } from "../../types/Product";
import Badge from "../Badge";

// Import Styled Components
import {
  ConservationStatus,
  ContentContainer,
  Description,
  Hope,
  Icon,
  IconContainer,
  ListItem,
} from "./Item.atoms";

export default function Item(props: ProductWithSlug) {
  const isPast = () => {
    return new Date() > new Date(props.dateClose);
  };

  const getYears = () => {
    const duration = formatDistance(
      parseISO(props.dateClose),
      parseISO(props.dateOpen)
    );

    if (!isPast()) {
      return ` It will be ${duration} old.`;
    }
    return ` It was ${duration} old.`;
  };

  const getIcon = () => {
    switch (props.conservationStatus) {
      case "ex":
        return <ExIcon />;
      case "ew":
        return <EwIcon />;
      case "cr":
        return <CrIcon />;
      case "en":
        return <EnIcon />;
      case "vu":
        return <VuIcon />;
      case "nt":
        return <NtIcon />;
      default:
        break;
    }
  };

  const conservationStatus = () => {
    switch (props.conservationStatus) {
      case "ex":
        return <ConservationStatus>Extinct</ConservationStatus>;
        break;
      case "ew":
        return <ConservationStatus>Extinct in the Wild</ConservationStatus>;
        break;
      case "cr":
        return <ConservationStatus>Critically Endangered</ConservationStatus>;
        break;
      case "en":
        return <ConservationStatus>Endangered</ConservationStatus>;
        break;
      case "vu":
        return <ConservationStatus>Vulnerable</ConservationStatus>;
        break;
      case "nt":
        return <ConservationStatus>Near Threatened</ConservationStatus>;
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
          {props.link ? (
            <a href={props.link} target="_blank" rel="nofollow noopener noreferrer">{props.name}</a>
          ) : (
            props.name
          )}
        </h2>
        <Description>{props.description}</Description>
        <Hope>{props.hope}</Hope>
      </ContentContainer>
    </ListItem>
  );
}
