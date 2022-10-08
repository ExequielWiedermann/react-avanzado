import React from 'react'
import { Category } from '../Category'
import { List, Item } from './style'

export const ListOfCategories = () => {
  return (
        <List>
            {
                // eslint-disable-next-line react/jsx-key
                [1, 2, 3, 4].map(category => <Item key= {category}> <Category/> </Item>)
            }
        </List>
  )
}
