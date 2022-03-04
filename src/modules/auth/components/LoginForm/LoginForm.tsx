import { Button } from '@chakra-ui/react';

import Link from 'next/link';

import { FieldWrapper, Form, TextInput } from '@/components/Form';
import * as LC from '@/components/LC';
import { useAuth } from '@/lib/auth/authentication';

import { LoginCredentials } from '../../api/types';

import schema from './schema';

type LoginFormProps = {
  onSuccess: () => void;
  onError: (message: string) => void;
};

export const LoginForm = ({ onSuccess, onError }: LoginFormProps) => {
  const { login, isLoggingIn } = useAuth();

  return (
    <Form<LoginCredentials>
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        try {
          await login(values);
          onSuccess();
        } catch (err: any) {
          onError(err.response.data.message);
        }
      }}
      validationSchema={schema}
      withDebugger
    >
      {() => (
        <LC.Vertical w="100%">
          <FieldWrapper
            name="email"
            helper="Insert a valid email"
            required
            label="Email"
            as={(props) => <TextInput type="email" {...props} />}
          />
          <FieldWrapper
            name="password"
            helper="Insert a valid password"
            required
            label="Password"
            as={(props) => <TextInput type="password" {...props} />}
          />

          <LC.Vertical center spaceBetween>
            <Link href="../register">
              <Button size="sm" mb={4} variant="ghost">
                Don&apos;t have an account?
              </Button>
            </Link>
            <Button
              isLoading={isLoggingIn}
              type="submit"
              className="w-full"
              variant="@primary"
              w="100%"
            >
              Log in
            </Button>
          </LC.Vertical>
        </LC.Vertical>
      )}
    </Form>
  );
};
