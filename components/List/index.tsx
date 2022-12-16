import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ProductWithSlug } from '../../types/Product';

import Item from './Item';
import {
    ListItem,
} from './Item.atoms';
import { ListContainer } from './List.atoms';
import Link from 'next/link';


type Props = {
    items: ProductWithSlug[]
}

const List: React.FC<Props> = ({ items }) => (
    <ListContainer>
        {items.map(item => (
            <Item key={item.slug} {...item} />
        ))}
    </ListContainer>
);


export default List;
