import DashboardLayout from "@/components/template/DashboardLayout";
import { Typography } from "@mui/material";
import { Grid } from '@mui/material'; 
import { CardWithHeader }  from "@/components/atoms/card/with-header";
import  Button  from '@mui/material/Button';
// import { IconListDocument } from "@/components/atoms/icons/list-document";
import ArticleIcon from '@mui/icons-material/Article';

const index = () => {
  const dataDetail2 = [
    {label: "CIF", value: "STEJ121"},
    {label: "Nama Debitur", value: "Dimas Setiawan"},
    {label: "No. Rekening Pinjaman", value: "0206-01-50225-15-6"},
    {label: "Tanggal Jatuh Tempo Kredit", value: "12/12/2026"},
    {label: "Unit Kerja", value: "KCK Jakarta"},
    {label: "Currency", value: "IDR"},
    {label: "Jenis Fasilitas", value: "KMK"},
    {label: "Alamat Debitur", value: "Komp. Pergudangan PT Meiko Abadi A-2A, Jakarta Selatan, DKI Jakarta, 12550"},
  ];
  return (
    // <div>Halaman list produk</div>
    <DashboardLayout>
        <Typography variant="h4" gutterBottom>
            Daftar Produk
        </Typography>
        
        <Grid item xs={12}>
            <CardWithHeader
              label="Card List"
              icon={<ArticleIcon />}
            >
              
            </CardWithHeader>
        </Grid>

    </DashboardLayout>
  )
}

export default index