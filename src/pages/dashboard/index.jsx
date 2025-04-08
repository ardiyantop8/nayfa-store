import DashboardLayout from "@/components/template/DashboardLayout";
import { Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

export default function DashboardPage() {
  const ListCardDashboard = [
    { icon: <DashboardIcon />, title: "Dashboard", count: "18" },
    { icon: <LocalMallIcon />, title: "List Produk", count: "20" },
    { icon: <LiveHelpIcon/>, title: "Pusat Bantuan", count: "15" },
    { icon: <SettingsIcon />, title: "Pengaturan", count: "" },
    // { icon: <ExitToAppIcon />, title: <ExitToAppIcon />, count: "" },
  ]
  return (
    <DashboardLayout>
        <Typography variant="h4" gutterBottom>
            Dashboard Admin
        </Typography>
            {/* <Typography>Selamat datang di halaman dashboard!</Typography> */}
        <div className="grid grid-cols-4">
          {ListCardDashboard.map((item) => (
            <div className="bg-white rounded-xl w-3xs h-3xs px-5 py-3 my-3">
              <div className="flex justify-between">
                  <div className="bg-[#F2F7FF] px-2 py-2 rounded-xl">{item.icon}</div>
                  <div className="pr-4">
                    <h1>{item.title}</h1>
                    <h3>{item.count}</h3>
                  </div>
              </div>
            </div>
          ))}
        </div>
    </DashboardLayout>
  );
}