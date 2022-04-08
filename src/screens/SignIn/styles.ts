import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { TextInput } from 'react-native';

export const Container1 = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT,
    start: { x: 0, y:1 },
    end: { x: 0.5, y:0.5 }
}))`
flex: 1;
justify-content: center;
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + 48
    },
})`
width: 100%;
padding: 0 32px;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 24px;
  align-self: flex-start;
   
  ${({theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.TITLE};
  `};

`;

export type TypeProps = 'primary' | 'secondary';

type Props = {
  type: TypeProps;
}

export const Container2 = styled(TextInput).attrs<Props>(({ theme, type }) => ({
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

export const Halo = styled.Image.attrs({
  resizeMode: 'contain'
})`
  height: 120px;
  margin-top: 64px;
  margin-bottom: 12px;
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