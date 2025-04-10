import DashboardLayout from "@/components/template/DashboardLayout";
import { Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import Button from '@mui/material/Button';
import React, { useState } from 'react'

export default function DashboardPage() {

  const [lihat,setLihat] = useState();
  const ListCardDashboard = [
    { icon: <DashboardIcon />, title: "Dashboard", count: "18", value:"dashboard" },
    { icon: <LocalMallIcon />, title: "List Produk", count: "20", value:"produk" },
    { icon: <LiveHelpIcon/>, title: "Pusat Bantuan", count: "15", value:"bantuan" },
    { icon: <SettingsIcon />, title: "Pengaturan", count: "", value:"pengaturan" },
    // { icon: <ExitToAppIcon />, title: <ExitToAppIcon />, count: "" },
  ];

  const buttonLihat = (value) => {
    console.log("VAL:", value);
  }
  return (
    <DashboardLayout>
        <Typography className="md:px-4" variant="h4" gutterBottom>
            Dashboard Admin
        </Typography>
            {/* <Typography>Selamat datang di halaman dashboard!</Typography> */}
        <div className="xl:grid xl:grid-cols-4 md:grid md:grid-cols-2">
          {ListCardDashboard.map((item) => (
            <div className="bg-white rounded-xl xl:w-3xs h-3xs px-5 py-3 my-3 md:mx-4">
              <div className="flex justify-between py-3">
                  <div className="bg-[#F2F7FF] px-2 py-2 rounded-xl">{item.icon}</div>
                  <div className="pr-4">
                    <h1>{item.title}</h1>
                    <h3 className="font-bold">{item.count}</h3>
                  </div>
              </div>
              <div className="py-4">
                <Button fullWidth variant="contained" onClick={()=> buttonLihat(item.value)}>Lihat</Button>
              </div>
            </div>
          ))}
        </div>
    </DashboardLayout>
  );
}