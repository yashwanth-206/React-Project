import { AddCircleRounded } from '@mui/icons-material'
import { Button} from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <div style={{ marginLeft: '200px', marginRight: '80px', marginTop: '100px', fontFamily: 'Poppins' }}>
        <h1>Contact Details</h1>
        <table>
          <tbody>
            <tr>
              <td style={{ padding: '0px 10px ' }}><h3>Emergency</h3></td>
              <td style={{ padding: '0px 10px' }}>1066</td>
            </tr>
            <tr>
              <td style={{ padding: '0px 10px' }}><h3>Global Lifeline <br />International</h3></td>
              <td style={{ padding: '0px 10px' }}>+91 4043441066</td>
            </tr>
            <tr>
              <td style={{ padding: '0px 10px' }}><h3>Health Help Line</h3></td>
              <td style={{ padding: '0px 10px' }}>1860-500-1066</td>
            </tr>
            <tr>
              <td style={{ padding: '0px 10px' }}><h3>Subscribe our Newsletter</h3></td>
            </tr>
            <tr>
              <td style={{ padding: '0px 10px' }}>
                <input type="email" name="email" id="email" placeholder='Enter your Email' style={{width:'240px',height:'50px',background:'#f5f5f5',borderRadius:"10px"}}/>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '5px 10px' }}>
                <Button variant='contained' color='success'endIcon={<AddCircleRounded/>}>Subscribe</Button>
              </td>
            </tr>
          </tbody>
        </table>

      </div >
    </>
  )
}

export default About