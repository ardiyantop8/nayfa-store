import DashboardLayout from "@/components/template/DashboardLayout";
import { Typography } from "@mui/material";

const index = () => {
  return (
    // <div>halaman settings admin</div>
    <DashboardLayout>
        <Typography variant="h4" gutterBottom>
            Settings
        </Typography>
            <Typography>Halaman Settings Admin</Typography>
    </DashboardLayout>
  )
}

export default index