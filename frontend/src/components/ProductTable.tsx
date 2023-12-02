import { FC } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'

import { SalesData } from '../types'
import { darkGrey, faintGrey } from '../constants'

const columns: TableColumn<SalesData>[] = [
  {
    name: 'WEEK ENDING',
    selector: row => row.weekEnding,
    sortable: true,
  },
  {
    name: 'RETAIL SALES',
    selector: row => row.retailSales,
    sortable: true,
  },
  {
    name: 'WHOLESALE SALES',
    selector: row => row.wholesaleSales,
    sortable: true,
  },
  {
    name: 'UNITS SOLD',
    selector: row => row.unitsSold,
    sortable: true,
  },
  {
    name: 'RETAILER MARGIN',
    selector: row => row.retailerMargin,
    sortable: true,
  },
]

const customStyles = {
  cells: {
    style: {
      color: darkGrey,
    },
  },
  headCells: {
    style: {
      color: 'rgba(0, 0, 0, 0.7)',
    },
  },
  headRow: {
    style: {
      padding: '6px 12px',
      borderBottomColor: faintGrey,
    },
  },
  rows: {
    style: {
      padding: '0 12px',
      '&:not(:last-of-type)': {
        borderBottomColor: faintGrey,
      },
    },
  },
}

interface ProductTableProps {
  tableData: SalesData[]
}

const ProductTable: FC<ProductTableProps> = ({ tableData }) => {
  return (
    <DataTable
      columns={columns}
      data={tableData}
      customStyles={customStyles}
      pagination
    />
  )
}

export default ProductTable
