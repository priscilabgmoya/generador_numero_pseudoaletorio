import { useState } from 'react';
import './App.css'
import generarDias from './helpers/helps'
import { Box, Container } from '@mui/system';
import { Autocomplete, Button, TextField, Typography } from '@mui/material';
import SimularTurista from './js/pruebaTp/Turismo';
import MediaCardData from './Components/Card';

function App() {
  const {arrayDias}  = generarDias(); 
// eslint-disable-next-line no-unused-vars
const [dias, setDias] = useState(arrayDias); 
const [diaSeleccionado, setDiaSeleccionado] = useState(null); 
const [resultados, setResultados] = useState([]); 
const [total, setTotal] = useState(null)
const handleChange =(value) =>{
  if (value?.id){
    setDias(dias.filter(dia=>{return dia.id !== value.id} )); 
    setDiaSeleccionado(value.numeroDia); 
  }else{
    setDias(arrayDias); 
    setResultados([]); 
    setTotal(null); 
    localStorage.clear(); 
  }
}
const addInfo= (value, total) =>{
  setTotal(total); 
  setResultados([...resultados, ...value]); 
}
const deleteInfo= (id) =>{
  setResultados(resultados.filter(data=>{return data.id !== id})); 
}
const simular =() =>{
  if (diaSeleccionado){
    SimularTurista(diaSeleccionado,addInfo); 
  }
}
  return (
    <Container>
      <Typography variant='h3'> Simulador de Turismo </Typography>
      <Box sx={{display:"flex" , justifyContent: "center", alignItems:"center" , gap: 2 ,m:1}}>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      getOptionLabel={(dia) => dia.opcion}
      options={dias}
      onChange={(_, newValue) =>handleChange( newValue)}
      sx={{ width: 300 , color:"white"}}
      renderInput={(params) => <TextField {...params} label="Seleccione:  " />}
    />
    <Button variant="contained" color='error' onClick={simular}>SIMULAR</Button>
      </Box>
      {
        total &&  <Typography variant='h6'> {`Total de Turistas: ${total.totalTuristas} - Total de Souvenir: ${total.souveniTotal}`} </Typography>
      }
      <Box sx={{display:"flex" , justifyContent: "space-between" , overflowY:"auto", alignItems:"center" , gap: 2 ,m:1 , height: 400 , flexDirection: "row", flexWrap:"wrap"}}>
      {
        resultados.map((data, index)=>{
          return <MediaCardData data={data} key={index} deleteData={deleteInfo} />
        })
      }
      </Box>
    </Container>
  )
}

export default App
