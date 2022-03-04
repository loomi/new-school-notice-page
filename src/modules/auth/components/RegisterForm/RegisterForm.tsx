import { Button } from '@chakra-ui/react';

import Link from 'next/link';
import { FieldWrapper, Form, RadioGroup, TextArea, TextInput, Radio } from '@/components/Form';
import * as LC from '@/components/LC';
import { useAuth } from '@/lib/auth/authentication';

import { RegisterCredentials } from '../../api/types';

import schema from './schema';

type RegisterFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const { register, isRegistering } = useAuth();

  return (
    <Form<RegisterCredentials>
      initialValues={{
        firstName: '',
        lastName: '',
        bio: '',
        role: 'USER',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={async (values) => {
        await register(values);
        onSuccess();
      }}
      validationSchema={schema}
    >
      {() => (
        <>
          <FieldWrapper
            name="firstName"
            required
            label="First name"
            as={(props) => <TextInput {...props} />}
          />
          <FieldWrapper
            name="lastName"
            required
            label="Last name"
            as={(props) => <TextInput {...props} />}
          />
          <FieldWrapper name="bio" label="Bio" as={(props) => <TextArea {...props} />} />
          <FieldWrapper
            name="email"
            required
            label="Email"
            as={(props) => <TextInput {...props} />}
          />
          <FieldWrapper
            name="password"
            required
            label="Password"
            as={(props) => <TextInput type="password" {...props} />}
          />
          <FieldWrapper
            name="confirmPassword"
            required
            label="Confirm password"
            as={(props) => <TextInput type="password" {...props} />}
          />
          <FieldWrapper
            name="role"
            required
            label="Role"
            as={(props) => (
              <RadioGroup {...props} inline>
                <Radio value="USER">User</Radio>
                <Radio value="ADMIN">Admin</Radio>
              </RadioGroup>
            )}
          />

          <LC.Vertical center spaceBetween mt={8}>
            <Button
              isLoading={isRegistering}
              type="submit"
              className="w-full"
              variant="@primary"
              w="100%"
            >
              Register
            </Button>
            <Link href="../login">
              <Button variant="ghost" mt={4} size="sm">
                Back to login
              </Button>
            </Link>
          </LC.Vertical>
        </>
      )}
    </Form>
  );
};
