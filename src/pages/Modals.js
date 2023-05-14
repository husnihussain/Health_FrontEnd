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
     <PageTitle>Stack Qustions & Answers</PageTitle>

    
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Enter your qustion on Healthcare</span>
          <Input className="mt-1" valid={false} placeholder="Jane Doe" />
        </Label>

        <br></br>
        <Button>Ask</Button>
      </div>
    </>
  )
}

export default Forms
