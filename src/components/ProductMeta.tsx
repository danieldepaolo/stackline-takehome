import { FC } from 'react'
import styled from 'styled-components'

import Tag from './Tag'
import { DividerLine } from './styled'
import { Product } from '../types'
import { lightGrey } from '../constants'

const ProductWrapper = styled.div`
  text-align: center;
  font-size: 0.9em;

  .title {
    margin: 0.5em 0;
  }

  .subtitle {
    color: ${lightGrey};
    font-size: 0.85em;
    margin: 0 10px 10px;
    width: 80%;
  }
`

const TitleArea = styled.div`
  padding: 1em;
`

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 12px 16px;
`

interface ProductMetaProps {
  product: Product
}

const ProductMeta: FC<ProductMetaProps> = ({ product }) => {
  return (
    <ProductWrapper>
      <TitleArea>
        <img src={product.image} width={128} alt="Product Image" />
        <h3 className="title">{product.title}</h3>
        <span className="subtitle">{product.subtitle}</span>
      </TitleArea>
      <DividerLine />
      <TagsWrapper>
        {product.tags.map((tag, i) => (
          <Tag key={`${tag}-${i}`} label={tag} />
        ))}
      </TagsWrapper>
      <DividerLine />
    </ProductWrapper>
  )
}

export default ProductMeta
