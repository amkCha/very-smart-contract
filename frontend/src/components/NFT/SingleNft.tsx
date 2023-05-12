import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface SingleNftProps {
  nft: any;
}

const SingleNft: React.FC<SingleNftProps> = ({ nft }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={
          nft.image ||
          `https://static-assets.lenster.xyz/images/placeholder.webp`
        }
        title={nft.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nft.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {nft.collection.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleNft;
