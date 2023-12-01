import DataTable, { TableColumn } from "react-data-table-component"
import { SalesData } from "../types"
import { FC } from "react"
import { darkGrey } from "../constants"

interface ProductTableProps {
  tableData: SalesData[]
}

const columns: TableColumn<SalesData>[] = [
  {
    name: 'Week Ending',
    selector: row => row.weekEnding
  },
  {
    name: 'Retail Sales',
    selector: row => row.retailSales
  },
  {
    name: 'Wholesale Sales',
    selector: row => row.wholesaleSales
  },
  {
    name: 'Units Sold',
    selector: row => row.unitsSold
  },
  {
    name: 'Retailer Margin',
    selector: row => row.retailerMargin
  }
]

const customStyles = {
  cells: {
    style: {
      color: darkGrey
    }
  }
}

const ProductTable: FC<ProductTableProps> = ({ tableData }) => {
  return (
    <DataTable columns={columns} data={tableData} customStyles={customStyles} pagination />
  )
}

export default ProductTable
