import React from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import { Button } from '@windmill/react-ui'

import { MailIcon } from '../icons'
import { BREAK } from 'graphql'

function Forms() {
  return (
    <>
      <PageTitle>Find Hospitals and Doctor near your location</PageTitle>      

      
      {/* <SectionTitle>Elements</SectionTitle> */}


      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800" >
        <Label>
          <span>Find</span>
        </Label>
        <Label radio>
              <Input type="checkbox" value="doctor" name="accountType" />
              <span className="ml-2">Doctor</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="checkbox" value="specialist" name="accountType" />
              <span className="ml-2">Specialist</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="checkbox" value="hospital" name="accountType" />
              <span className="ml-2">Hospital</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="checkbox" value="medicalcenter" name="accountType" />
              <span className="ml-2">Medical Center</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="checkbox" value="labs" name="accountType" />
              <span className="ml-2">Labs</span>
            </Label>


            <Label className="mt-4">
          <span>Specialization</span>
          <Select className="mt-1">
            <option>ENT</option>
            <option>VOG</option>
            <option>Dental</option>
          </Select>
        </Label>
            

       <table>
        <tr>

      <td>


      <Label className="mt-4">
          <span>District</span>
          <Select className="mt-1">
            <option>Colombo</option>
            <option>Kandy</option>
            <option>Kegalle</option>
          </Select>
        </Label> </td>

        <td>
          <Label className="mt-4">
          <span>City</span>
          <Select className="mt-1">
            <option>Kegalle</option>
            <option>Mawanella</option>
            <option>Rambukkana</option>
          </Select>
        </Label></td>
         </tr>

        </table>


       add a date time picker <br></br>

       
       <div>
          <Button>Find Button</Button>
        </div>

        
      </div>

      <SectionTitle>Results</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Invalid input</span>
          <Input className="mt-1" valid={false} placeholder="Jane Doe" />
          <HelperText valid={false}>Your password is too short.</HelperText>
        </Label>

        <Label className="mt-4">
          <span>Valid input</span>
          <Input className="mt-1" valid={true} placeholder="Jane Doe" />
          <HelperText valid={true}>Your password is strong.</HelperText>
        </Label>

        <Label className="mt-4">
          <span>Helper text</span>
          <Input className="mt-1" placeholder="Jane Doe" />
          <HelperText>Your password must be at least 6 characters long.</HelperText>
        </Label>
      </div>
    </>
  )
}

export default Forms
