import React from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import InfoCard from '../components/Cards/InfoCard'
import { Card, CardBody } from '@windmill/react-ui'
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import { Button } from '@windmill/react-ui'

function Cards() {
  return (
    <>
     <PageTitle>Consaltations and Channelings</PageTitle>


      <Card className="mb-8 shadow-md">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Large, full width sections goes here  
          </p>
          <Button >Book</Button>
        </CardBody>
        
      </Card>

      <Card className="mb-8 shadow-md">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Large, full width sections goes here  
          </p>
          <Button >Book</Button>
        </CardBody>
        
      </Card>

      <Card className="mb-8 shadow-md">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Large, full width sections goes here  
          </p>
          <Button >Book</Button>
        </CardBody>
        
      </Card>

      <Card className="mb-8 shadow-md">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Large, full width sections goes here  
          </p>
          <Button >Book</Button>
        </CardBody>
        
      </Card>

            
    </>
  )
}

export default Cards
