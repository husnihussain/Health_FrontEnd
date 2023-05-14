import React, { useState, useEffect } from 'react'

import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/tableData'
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from '@windmill/react-ui'

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from '../utils/demo/chartsData'

function Dashboard() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  return (
    <>
      <PageTitle>Home</PageTitle>


      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Doctors" value="69">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Hospitals" value="23">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Channeling Centers" value="16">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Patients" value="643">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Articles</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Date</TableCell>
            </tr>
          </TableHeader>
          <TableBody >
            <tr><b>Modern Covid Effects</b><td rowSpan={2}>Dr. Jhon Vik</td><td rowSpan={2}>03/05/2023</td></tr>
            <tr>In 2023, The covid has been inscreased</tr>

            <tr><b>Modern Covid Effects</b><td rowSpan={2}>Dr. Jhon Vik</td><td rowSpan={2}>03/05/2023</td></tr>
            <tr>In 2023, The covid has been inscreased</tr>

            <tr><b>Modern Covid Effects</b><td rowSpan={2}>Dr. Jhon Vik</td><td rowSpan={2}>03/05/2023</td></tr>
            <tr>In 2023, The covid has been inscreased</tr>

          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>

      
    </>
  )
}

export default Dashboard
