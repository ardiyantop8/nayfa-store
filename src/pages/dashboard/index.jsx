import DashboardLayout from "@/components/template/DashboardLayout";
import { Typography } from "@mui/material";

export default function DashboardPage() {
  return (
    <DashboardLayout>
        <Typography variant="h4" gutterBottom>
            Dashboard Admin
        </Typography>
            <Typography>Selamat datang di halaman dashboard!</Typography>
    </DashboardLayout>
  );
}