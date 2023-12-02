import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Bars } from 'react-loader-spinner'

import ProductMeta from './ProductMeta'
import Chart from './Chart'
import ProductTable from './ProductTable'
import { CardWrapper } from './styled'
import { Product } from '../types'
import { RootState } from '../store'
import { setProducts } from '../features/product/productSlice'
import productResponse from '../test/data/stackline_frontend_assessment_data_2021.json'

const LayoutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin: 1em;
  min-height: 85vh;
`

const Sidebar = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px;
  flex: 1 1 250px;
  height: auto;
`

const WidgetsArea = styled.div`
  display: flex;
  flex: 1 1 70%;
  flex-direction: column;
  gap: 3em;
  width: 100%;
`

const ProductPage: FC = () => {
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
          {loaded ? (
            <Chart data={currentProduct.sales} />
          ) : (
            <Bars width={200} />
          )}
        </CardWrapper>
        <CardWrapper>
          {loaded ? (
            <ProductTable tableData={currentProduct.sales} />
          ) : (
            <Bars width={200} />
          )}
        </CardWrapper>
      </WidgetsArea>
    </LayoutWrapper>
  )
}

export default ProductPage
