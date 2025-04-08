import DashboardLayout from "@/components/template/DashboardLayout";
import { Typography } from "@mui/material";

const index = () => {
  return (
    // <div>Halaman pusat bantuan</div>
    <DashboardLayout>
        <Typography variant="h4" gutterBottom>
            Pusat Bantuan
        </Typography>
            <Typography>Halaman pusat bantuan</Typography>
    </DashboardLayout>
  )
}

export default index