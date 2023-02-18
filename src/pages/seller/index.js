// ** React Imports
import { useState, Fragment } from 'react'
import Grid from '@mui/material/Grid'
import SellerForm from 'src/pages/sellerForm'
import TableCustomized from 'src/views/tables/TableCustomized'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import TableCustomizedSales from 'src/views/tables/TablesCustomizedSales'
import { useEffect } from 'react'
import axios from 'axios'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const SellerPage = () => {
  // ** States
  const [orderData, setOrderData] = useState()
  const [orderDataSales, setOrderDataSales] = useState()

  // ** Hook
  const theme = useTheme()

  const getData = async () => {
    const response = await axios.get(`https://e6ff-2402-3a80-569-97a5-c4ba-8d42-ed45-8cdb.in.ngrok.io/asks`)
    setOrderData(response)
    console.log(response)
  }

  const getDataSales = async () => {
    const response = await axios.get(`https://e6ff-2402-3a80-569-97a5-c4ba-8d42-ed45-8cdb.in.ngrok.io/bids`)
    setOrderDataSales(response)
  }

  useEffect(() => {
    getData()
    getDataSales()
  }, [])

  return (
    <div>
      <Grid container spacing={6} padding={8}>
        <Grid item xs={12} md={7}>
          <SellerForm />
        </Grid>
        <Grid item xs={12} md={5} >
          <TableCustomized orderData={orderData} />
          <TableCustomizedSales orderDataSales={orderDataSales} />
        </Grid>
      </Grid>
    </div>
  )
}
SellerPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default SellerPage
