// ** React Imports
import { useState, Fragment } from 'react'
// ** MUI Imports
import Grid from '@mui/material/Grid'
// ** Next Imports
import SellerForm from 'src/pages/sellerForm'
import TableCustomized from 'src/views/tables/TableCustomized'
// ** MUI Components
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

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
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  // ** Hook
  const theme = useTheme()

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <div>
      <Grid container spacing={6} padding={8}>
        <Grid item xs={12} md={4}>
          <SellerForm />
        </Grid>
        <Grid item xs={12} md={8}>
          <TableCustomized />
        </Grid>
      </Grid>
    </div>
  )
}
SellerPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default SellerPage
