import { FC, useMemo } from "react";
import { SalesData } from "../types";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis
} from "recharts";
import { lightGrey } from "../constants";

interface ChartProps {
  data: SalesData[]
}

interface MonthData {
  name: string
  retailSales: number
  wholesaleSales: number
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const Chart: FC<ChartProps> = ({ data }) => {
  const chartData = useMemo(() => {
    const bucketedData: MonthData[] = []
    let currentMonth: MonthData = {
      name: "January",
      retailSales: 0,
      wholesaleSales: 0
    }

    data.forEach((week: SalesData) => {
      const monthNum = week.weekEnding.split("-")?.[1]
      const monthName = months[+monthNum - 1]
      if (monthName !== currentMonth.name) {
        bucketedData.push({ ...currentMonth })
        currentMonth = {
          name: monthName,
          retailSales: 0,
          wholesaleSales: 0
        }
      }
      currentMonth.retailSales += week.retailSales
      currentMonth.wholesaleSales += week.wholesaleSales
    })
    bucketedData.push({ ...currentMonth })

    console.log(bucketedData)
    return bucketedData
  }, [data])

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={400}
        height={400}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="name"
          stroke={lightGrey}
          tickLine={false}
          tickMargin={15}
          tickFormatter={(value: string) => value.substring(0, 3).toUpperCase()}
        />
        <Tooltip labelFormatter={label => data[label]?.weekEnding || label} />
        <Line type="monotone" dataKey="retailSales" stroke="#45A7F6" strokeWidth={3} />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#9AA5BE" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart
