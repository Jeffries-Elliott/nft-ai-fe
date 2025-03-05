"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTranslations } from "next-intl";

export default function AuctionHistory() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [status, setStatus] = useState("all");
  const t = useTranslations();

  // 模拟数据
  const auctionHistory = [
    {
      name: "NFT #1",
      quantity: 1,
      collection: "Collection A",
      price: "0.5 ETH",
      floorDiff: "+20%",
    },
    {
      name: "NFT #2",
      quantity: 2,
      collection: "Collection B",
      price: "1.2 ETH",
      floorDiff: "-5%",
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          position: "sticky",
          top: 112,
          zIndex: 100,
          pt: 1,
          pb: 1,
          backgroundColor: 'background.default',
        }}
      >
        <TextField
          label={t("Search")}
          variant="outlined"
          size="small"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          sx={{ width: 300 }}
        />

        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel>{t("Status")}</InputLabel>
          <Select
            value={status}
            label={t("Status")}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="all">{t("All")}</MenuItem>
            <MenuItem value="active">{t("Active")}</MenuItem>
            <MenuItem value="ending">{t("Ending Soon")}</MenuItem>
            <MenuItem value="inactive">{t("Inactive")}</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TableContainer sx={{ height: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>{t("Name")}</TableCell>
              <TableCell>{t("Quantity")}</TableCell>
              <TableCell>{t("Collection")}</TableCell>
              <TableCell>{t("Price")}</TableCell>
              <TableCell>{t("Floor Price Diff")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {auctionHistory.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.collection}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell
                  sx={{
                    color: row.floorDiff.startsWith("+")
                      ? "success.main"
                      : "error.main",
                  }}
                >
                  {row.floorDiff}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
