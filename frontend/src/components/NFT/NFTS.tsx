import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useAccount } from 'wagmi';
import SingleNft from './SingleNft';
import { Collection, NFT } from '../../types';

interface IProps {}

const NFTS: React.FC<IProps> = () => {
  const { address } = useAccount();

  const [nfts, setNfts] = useState<NFT[]>([]);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      address,
      chain: 'linea_goerli',
      page: 0,
      sort_by: 'listed_lowest_price',
      contract_addresses: '',
      name: '',
    }),
  };

  useEffect(() => {
    fetch('https://api-testnet.nftnest.io/v1/wallet/get_nfts', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const rawNfts = data.tokens['59140'];
        const cleanNfts = Object.entries(rawNfts).map((rawNft: any) => {
          const rawCollection: any = Object.entries(
            data.contracts['59140'],
          ).find((collection) => {
            return collection[0] === rawNft[1]?.contract_address;
          });
          const collection: Collection = {
            name: rawCollection[1]?.collection_info?.name,
            contract: rawCollection[0],
          };
          const n: NFT = {
            tokenId: rawNft[1].token_id,
            name: rawNft[1].token_info?.metadata?.name,
            collection,
            image: rawNft[1].token_info?.metadata?.image?.replace(
              'ipfs://',
              `https://${process.env.REACT_APP_INFURA_IPFS}.infura-ipfs.io/ipfs/`,
            ),
          };
          return n;
        });
        const filteredNfts = cleanNfts.filter((n) => n.name);
        setNfts(filteredNfts);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box
          sx={{
            m: 5,
          }}
        >
          <Paper elevation={0}>
            <Typography variant="h5" component="div" gutterBottom>
              Your NFTs
            </Typography>
            <Grid container spacing={2}>
              {nfts.map((nft: NFT) => (
                <Grid
                  item
                  xs={6}
                  key={`${nft.collection.contract}_${nft.tokenId}`}
                >
                  <SingleNft nft={nft} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            m: 5,
          }}
        >
          <Paper elevation={0}>
            <Typography variant="h5" component="div" gutterBottom>
              Our recommendations
            </Typography>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NFTS;
