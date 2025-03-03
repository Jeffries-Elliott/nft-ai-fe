"use client"

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import PageBackground from "@/components/PageBackground";
import {useAccount, useBalance} from "wagmi";

export default function Home() {
  const {address, isConnected} = useAccount()
  const {data: balance} = useBalance({address})

  return (
    <Container maxWidth={false} sx={{ minHeight: '100vh', py: 4 }}>
      <PageBackground imageUrl="https://picsum.photos/600/300?1" />

      <Grid container spacing={2}>
        {/* 头部区域 */}
        <Grid size={12}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2
            }}
          >
            <Stack spacing={1}>
              <Typography variant="h4" component="h1">
                title
              </Typography>
            </Stack>
          </Paper>
        </Grid>

        {/* 钱包信息区域 */}
        <Grid size={{xs: 12, md: 6}}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              height: '100%'
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h6">钱包信息</Typography>
              <Typography>
                状态：{isConnected ? '已连接' : '未连接'}
              </Typography>
              <Typography
                sx={{
                  wordBreak: 'break-all'
                }}
              >
                地址：{address || '未连接'}
              </Typography>
              {balance && (
                <Typography>
                  余额：{balance.formatted}
                </Typography>
              )}
            </Stack>
          </Paper>
        </Grid>

        {/* 其他内容区域 */}
        <Grid size={{xs: 12, md: 6}}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              height: '100%'
            }}
          >

            {/* 这里可以添加 NFT 相关内容 */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
