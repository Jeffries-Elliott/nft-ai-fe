"use client"

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PageBackground from "@/components/PageBackground";
import {useAccount, useBalance} from "wagmi";

export default function Home() {
  const {address, isConnected} = useAccount()
  const {data: balance} = useBalance({address})

  return (
    <Container maxWidth={false} sx={{height: 1000}}>
      <PageBackground imageUrl="https://picsum.photos/600/300?1" />

      <Box sx={{color: "#fff"}}>
        <Typography>isConnected： {isConnected ? 'yes' : 'no'}</Typography>
        <Typography>address: {address}</Typography>
        {balance && <Typography>balance: {balance.formatted}</Typography>}
      </Box>
    </Container>
  );
}
