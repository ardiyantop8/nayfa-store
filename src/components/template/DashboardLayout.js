import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "@/components/template/Sidebar";

const drawerWidth = 240;

export default function DashboardLayout({ children }) {
  return (
    <Box className="bg-[#F2F7FF]" sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
