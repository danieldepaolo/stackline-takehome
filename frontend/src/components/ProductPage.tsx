import { FC, ReactNode, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components"
import { Bars } from "react-loader-spinner"

import { Product } from "../types"
import productResponse from "../../../data/stackline_frontend_assessment_data_2021.json"
import ProductMeta from "./ProductMeta"
import { RootState } from "../store"
import { setProducts } from "../features/product/productSlice"
import Chart from "./Chart"
import ProductTable from "./ProductTable"
import { CardWrapper } from "./styled"

const LayoutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin: 1em;
`

const Sidebar = styled.div`
  background-color: white;
  flex: 1 1 250px;
  height: auto;
`

const WidgetsArea = styled.div`
  display: flex;
  flex: 1 1 70%;
  flex-direction: column;
  gap: 1em;
  width: 100%;
`

interface MainViewProps {
  cardComponents?: ReactNode[]
}

const ProductPage: FC<MainViewProps> = () => {
  const products = useSelector((state: RootState) => state.products.items)
  const loaded: boolean = !!products?.length
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const promise: Promise<Product[]> = new Promise(resolve => {
      setTimeout(() => resolve(productResponse), 1000)
    })
    const response = await promise
    dispatch(setProducts(response))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const currentProduct = products[0]

  return (
    <LayoutWrapper>
      <Sidebar>
        <CardWrapper>
          {loaded && <ProductMeta product={currentProduct} />}
        </CardWrapper>
      </Sidebar>
      <WidgetsArea>
        <CardWrapper $withPadding>
          <h3 className="title">Sales</h3>
          {loaded ? <Chart data={currentProduct.sales} /> : <Bars width={200} />}
        </CardWrapper>
        <CardWrapper $withPadding>
          {loaded ? <ProductTable tableData={currentProduct.sales} /> : <Bars width={200} />}
        </CardWrapper>
      </WidgetsArea>
    </LayoutWrapper>
  )
}

export default ProductPage
