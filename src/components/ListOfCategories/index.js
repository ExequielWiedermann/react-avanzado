import React from 'react'
import { Category } from '../Category'
import { List, Item } from './style'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
  return (
        <List>
            {
                // eslint-disable-next-line react/jsx-key
                // Se puede hacer el <Category {...category} /> con
                // <Category cover={category.cover} emoji={categoy.emoji} />
                [categories].map(category => <Item key= {category.id}> <Category {...category} /> </Item>)
            }
        </List>
  )
}
