import React from 'react'
import { Category } from '../Category'

export const ListOfCategories = () => {
  return (
        <ul>
            {
                // eslint-disable-next-line react/jsx-key
                [1, 2].map(category => <li> <Category/> </li>)
            }
        </ul>
  )
}
