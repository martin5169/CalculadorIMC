import React from 'react'
import { Table } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

function TableModel() {
  return (
    <Container>
<Table striped bordered hover>
      <thead>
        <tr align="center">
          <th colSpan={2}>Indice Masa Corporal</th>
          <th colSpan={2}> Clasificacion</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={2} align="center">Menor a 16.00</td>
          <td colSpan={2} align="center">Delgadez severa</td>
          
        
        </tr>
        <tr>
        <td colSpan={2} align="center">16.00-16.99</td>
          <td colSpan={2} align="center">Delgadez moderada</td>
          
          
        </tr>
        
       
        <tr>
        <td colSpan={2} align="center">17.00-18.49</td>
          <td colSpan={2} align="center">Delgadez aceptable</td>
          
          
        </tr>
        <tr>
        <td colSpan={2} align="center">18.50-24.99</td>
          <td colSpan={2} align="center">Peso normal</td>
          
          
        </tr>
        <tr>
        <td colSpan={2} align="center">25.00-29.99</td>
          <td colSpan={2} align="center">Sobrepeso</td>
          
          
        </tr>
        <tr>
        <td colSpan={2} align="center">30.00-34.99</td>
          <td colSpan={2} align="center">Obeso tipo I</td>
          
          
        </tr>
        <tr>
        <td colSpan={2} align="center">35.00-40.00</td>
          <td colSpan={2} align="center">Obeso tipo II</td>
          
          
        </tr>
        
      </tbody>
    </Table>
    </Container>
  )
}

export default TableModel