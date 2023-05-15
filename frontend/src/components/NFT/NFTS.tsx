import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useAccount } from 'wagmi';
import { Collection, NFT } from '../../types';
import vscLogo from '../../assets/img/vsc-logo.png';
import button from '../../assets/img/button.svg';
import { LineWave } from 'react-loader-spinner';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Footer from '../Footer';

interface IProps {}

const NFTS: React.FC<IProps> = () => {
  const { address } = useAccount();

  const [ownedNfts, setOwnedNfts] = useState<NFT[]>([]);
  const [recommendedNfts, setRecommendedNfts] = useState<NFT[]>([]);
  const [loadingRecommendations, setLoadingRecommendations] =
    useState<boolean>(false);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      address,
      chain: 'linea_goerli',
      page: 0,
      sort_by: 'minted_newest',
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
        setOwnedNfts(cleanNfts.filter((n) => n.name));
      });
  }, []);

  const delay = (milliseconds: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  };

  const getRecommendations = async () => {
    setLoadingRecommendations(true);
    await delay(2000);
    setRecommendedNfts(ownedNfts);
    setLoadingRecommendations(false);
  };

  const displayLoader = () => {
    return (
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <LineWave
          height="200"
          width="200"
          color="#1932F5"
          ariaLabel="line-wave"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      </Grid>
    );
  };

  return (
    <>
      <Grid container spacing={2} padding={2}>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <div
            onClick={getRecommendations}
            onKeyDown={getRecommendations}
            tabIndex={0}
            role="button"
            style={{ cursor: 'pointer' }}
          >
            <img src={vscLogo} alt={'VSC logo'} />
          </div>
        </Grid>
        <Grid item xs={5}>
          <Box>
            <Paper elevation={0} style={{ backgroundColor: 'transparent' }}>
              <Typography variant="h5" component="div" gutterBottom>
                Your NFTs
              </Typography>
              {ownedNfts.length ? (
                <ImageList
                  sx={{ width: '100%', height: '73vh' }}
                  variant="quilted"
                  cols={3}
                  rowHeight={200}
                >
                  {ownedNfts.map((item) => (
                    <ImageListItem key={item.image} cols={1} rows={1}>
                      <img
                        src={`${item.image}`}
                        alt={item.name}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              ) : (
                displayLoader()
              )}
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={2} display="flex" alignItems="center">
          {Boolean(ownedNfts.length) && (
            <div
              onClick={getRecommendations}
              onKeyDown={getRecommendations}
              tabIndex={0}
              role="button"
              style={{ cursor: 'pointer', margin: 'auto' }}
            >
              <img src={button} alt={'Click me'} width={'90%'} />
            </div>
          )}
        </Grid>
        <Grid item xs={5}>
          <Box>
            <Paper elevation={0} style={{ backgroundColor: 'transparent' }}>
              <Typography variant="h5" component="div" gutterBottom>
                Our recommendations
              </Typography>
              {loadingRecommendations ? (
                displayLoader()
              ) : (
                <ImageList
                  sx={{ width: '100%', height: '73vh' }}
                  variant="woven"
                  cols={3}
                  rowHeight={200}
                >
                  {recommendedNfts
                    .sort(() => 0.5 - Math.random())
                    .map((item) => (
                      <ImageListItem key={item.image} cols={1} rows={1}>
                        <img
                          src={`${item.image}`}
                          alt={item.name}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                </ImageList>
              )}
            </Paper>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default NFTS;
