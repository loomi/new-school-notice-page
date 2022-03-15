import { NextRequest, NextResponse } from 'next/server';

import { ACCESS_TOKEN_ID } from '@/config';

export function middleware(req: NextRequest) {
  const accessToken = req.cookies[ACCESS_TOKEN_ID];

  if (!accessToken) return NextResponse.redirect(`${req.nextUrl.origin}/login`);

  return;
}
