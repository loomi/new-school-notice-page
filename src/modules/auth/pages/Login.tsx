import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { AuthLayout } from '../components/AuthLayout';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  const toast = useToast();
  const router = useRouter();

  return (
    <AuthLayout title="Log in to your account">
      <LoginForm
        onSuccess={() => {
          toast({
            title: 'Successfully logged.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
          router.push('admin');
        }}
        onError={(message) =>
          toast({
            title: message,
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        }
      />
    </AuthLayout>
  );
};
