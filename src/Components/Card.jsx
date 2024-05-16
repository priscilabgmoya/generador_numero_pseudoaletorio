/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/**
            turistaValle: valleCalchaqui,
            colectivoValle: cantidadColecValle,
            turistaChorromoro: chorromoro,
            colectivoChorromoro: cantidadColecChorromoro,
 * @param {*} param0 
 * @returns 
 */
export default function MediaCardData({data, deleteData}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Día: {data.dia} 
        </Typography>
        <Typography gutterBottom  component="div">
         Souvenir del Día: {data.souvenirDia} - Turistas: {data.turistas}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {`Cantidad de Turistas en los valles: ${data.turistaValle}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {`Cantidad de Colectivos  los valles: ${data.colectivoValle}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {`Cantidad de Turistas en Chorromoro: ${data.turistaChorromoro}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {`Cantidad de Colectivos Chorromoro: ${data.colectivoChorromoro}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='error' onClick={()=>{deleteData(data?.id)}} >Eliminar</Button>
      </CardActions>
    </Card>
  );
}
