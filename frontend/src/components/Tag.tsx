import { FC } from "react"
import styled from "styled-components";

const TagWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: #80838C;
  font-size: 0.9em;
  letter-spacing: 0.25px;
  padding: 3px 12px;
`

interface TagProps {
  label: string;
}

const Tag: FC<TagProps> = ({ label }) => {
  return (
    <TagWrapper>
      {label}
    </TagWrapper>
  )
}

export default Tag
