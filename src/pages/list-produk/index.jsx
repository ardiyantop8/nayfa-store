import DashboardLayout from "@/components/template/DashboardLayout";
import { Typography } from "@mui/material";

const index = () => {
  return (
    // <div>Halaman list produk</div>
    <DashboardLayout>
        <Typography variant="h4" gutterBottom>
            List Produk
        </Typography>
            <Typography>Halaman list produk!</Typography>
    </DashboardLayout>
  )
}

export default index