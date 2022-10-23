import React from "react";
import { Grid, Image, Link } from './styles'

export const ListtOfFavs = ({ favs = [] }) => {
  return <Grid>
    {
        favs.map(fav => <Link key={fav.id} to={`detaild/${fav.id}`}>
            <Image src={fav.src} />
        </Link>)
    }
  </Grid>
};
