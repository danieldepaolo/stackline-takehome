import styled from "styled-components";

export const CardWrapper = styled.div<{ $withPadding?: boolean; }>`
  background-color: white;
  padding: ${props => props.$withPadding ? '1em' : 0};

  .title {
    font-weight: 400;
    letter-spacing: 0.15px;
    margin: 0.5em 0;
  }
`

export const DividerLine = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,0.05);
`
