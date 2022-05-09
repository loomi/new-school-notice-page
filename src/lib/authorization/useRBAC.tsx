import { useCallback } from 'react';

import { useAuth } from '@/lib/auth/authentication';

export const useRBAC = () => {
  const { user } = useAuth();

  if (!user) {
    throw Error('User does not exist!');
  }

  const checkAllowedRole = useCallback(() => {
    // if (allowedRoles && allowedRoles.length > 0) {
    //   return allowedRoles?.includes(user.role);
    // }

    return true;
  }, []);

  return { checkAllowedRole, role: '' };
};
