import { NextRequest, NextResponse } from 'next/server';

import { ACCESS_TOKEN_ID, MOCK_ENABLED } from '@/config';

export function middleware(req: NextRequest) {
  if (MOCK_ENABLED === 'true') {
    return NextResponse.next();
  } else {
    const accessToken = req.cookies[ACCESS_TOKEN_ID];

    if (!accessToken) return NextResponse.redirect(`${req.nextUrl.origin}/login`);

    return NextResponse.next();
  }
}
