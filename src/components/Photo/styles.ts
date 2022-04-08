import styled, { css } from 'styled-components/native';

export const Image = styled.Image`
  width: 160px;
  height: 160px;
  borderRadius: 80px;
`;

export const PlaceHolder = styled.View`
  width: 160px;
  height: 160px;
  justify-content: center;
  align-items: center;
  border-radius: 80px;

  border: 1px dashed ${({ theme }) => theme.COLORS.SECONDARY_900}
`;

export const PlaceHolderTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  
  ${({ theme }) => css`
     font-family: ${ theme.FONTS.TEXT};
     color: ${ theme.COLORS.SECONDARY_900}
   `};
  `;
