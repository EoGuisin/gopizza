import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from 'react-native'

import { useAuth } from '../../hooks/auth';

import halo from '../../assets/halo.png';

import { Input } from '../../components/Input';
import { Button } from "../../components/Button";

import {
  Container1,
  Content,
  Title,
  Halo,
  ForgotPasswordButton,
  ForgotPasswordLabel
} from "./styles";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, isLogging, forgotPassword } = useAuth();

  function handleSignIn() {
    signIn(email, password);
  }

  function handleforgotPassword() {
    forgotPassword(email);
  }

  return (
    <Container1>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>

          <Halo source={halo} />

          <Title>Login</Title>

          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
          />

          <Input
            placeholder="Senha"
            type='secondary'
            secureTextEntry
            onChangeText={setPassword}
          />

          <ForgotPasswordButton onPress={handleforgotPassword}>
            <ForgotPasswordLabel>
              Esqueci minha senha, Help!
            </ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button
            title="Entrar"
            type="secondary"
            onPress={handleSignIn}
            isLoading={isLogging}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container1>
  )
}