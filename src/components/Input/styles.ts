import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export type TypeProps = 'primary' | 'secondary';

type Props = {
  type: TypeProps;
}

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  placeholderTextColor: type === 'primary' ? theme.COLORS.SECONDARY_900 : theme.COLORS.PRIMARY_50
})) <Props>`
  width: 100%;
  height: 60px;
  background-color: transparent;
  border-radius: 15px;
  font-size: 16px;
  padding: 20px 0;
  padding-left: 22px;
  margin-bottom: 24px;

  ${({ theme, type }) => css`
    font-family: ${theme.FONTS.TEXT}
    border: 1px solid ${theme.COLORS.SHAPE}
    color: ${type === 'primary' ? theme.COLORS.SECONDARY_900 : theme.COLORS.TITLE};
  `}; 
`;

export const Brand = styled.Image.attrs({
  resizeMode: 'contain'
})`
  height: 340px;
  margin-top: 64px;
  magin-bottom: 32px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 20px;
`;

export const ForgotPasswordLabel = styled.Text`
    font-size: 14px;

    ${({ theme }) => css`
      font-family: ${theme.FONTS.TEXT};
      color: ${theme.COLORS.TITLE};
    `};
`;