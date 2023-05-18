import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
//import { useAccount } from 'wagmi';
import { Collection, NFT } from '../../types';
import vscLogo from '../../assets/img/vsc-logo.png';
import button from '../../assets/img/button.svg';
import { LineWave } from 'react-loader-spinner';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Header from '../Header';

interface IProps {}

const NFTS: React.FC<IProps> = () => {
  //const { address } = useAccount();

  const [ownedNfts, setOwnedNfts] = useState<NFT[]>([]);
  const [recommendedNfts, setRecommendedNfts] = useState<NFT[]>([]);
  const [loadingRecommendations, setLoadingRecommendations] =
    useState<boolean>(false);

  const initialRequestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      //address,
      address: '0x8BB6B64e14c22b6f478da1172257C1410981792B',
      chain: 'linea_goerli',
      page: 0,
      sort_by: 'minted_newest',
      contract_addresses: '',
      name: '',
    }),
  };

  const recommendationRequestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      address: '0xd1503b0a5AC889b7afcCbD1Aaa9E646d27c1c35F',
      chain: 'linea_goerli',
      page: 0,
      sort_by: 'minted_newest',
      contract_addresses: '',
      name: '',
    }),
  };

  useEffect(() => {
    fetch(
      'https://api-testnet.nftnest.io/v1/wallet/get_nfts',
      initialRequestOptions,
    )
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
            image: rawNft[1].token_info?.metadata?.image
              ?.replace('ipfs://', `https://ipfs.io/ipfs/`)
              .replace(
                'https://gateway.pinata.cloud/ipfs/',
                'https://ipfs.io/ipfs/',
              ),
          };
          return n;
        });
        setOwnedNfts(cleanNfts.filter((n) => n.name));
      });
  }, []);

  const getRecommendations = async () => {
    setRecommendedNfts([]);
    setLoadingRecommendations(true);
    fetch(
      'https://api-testnet.nftnest.io/v1/wallet/get_nfts',
      recommendationRequestOptions,
    )
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
            image: rawNft[1].token_info?.metadata?.image
              ?.replace('ipfs://', `https://ipfs.io/ipfs/`)
              .replace(
                'https://gateway.pinata.cloud/ipfs/',
                'https://ipfs.io/ipfs/',
              ),
          };
          return n;
        });
        setRecommendedNfts(
          cleanNfts.filter((n) => n.name).sort(() => 0.5 - Math.random()),
        );
        setLoadingRecommendations(false);
      });
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
      <Header />
      <Grid container spacing={2} padding={2}>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Link to={'/'}>
            <img src={vscLogo} alt={'VSC logo'} />
          </Link>
        </Grid>
        <Grid item xs={5}>
          <Box>
            <Paper elevation={0} style={{ backgroundColor: 'transparent' }}>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                textAlign={'center'}
                color={'#353435'}
              >
                Your NFTs
              </Typography>
              {ownedNfts.length ? (
                <ImageList
                  sx={{ width: '100%', height: '73vh' }}
                  variant="woven"
                  cols={3}
                  rowHeight={200}
                >
                  {ownedNfts.map((item) => (
                    <Link
                      to={`https://testnet.zonic.app/asset/linea_goerli/${item.collection.contract}/${item.tokenId}`}
                      target={'_blank'}
                      rel={'noopener'}
                      key={`${item.collection.contract}_${item.tokenId}`}
                    >
                      <ImageListItem cols={1} rows={1}>
                        <img
                          src={`${item.image}`}
                          alt={item.name}
                          loading="lazy"
                        />
                      </ImageListItem>
                    </Link>
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
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                textAlign={'center'}
                color={'#353435'}
              >
                What next?
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
                  {recommendedNfts.map((item) => (
                    <Link
                      to={`https://testnet.zonic.app/asset/linea_goerli/${item.collection.contract}/${item.tokenId}`}
                      target={'_blank'}
                      rel={'noopener'}
                      key={`${item.collection.contract}_${item.tokenId}`}
                    >
                      <ImageListItem cols={1} rows={1}>
                        <img
                          src={`${item.image}`}
                          alt={item.name}
                          loading="lazy"
                        />
                      </ImageListItem>
                    </Link>
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
