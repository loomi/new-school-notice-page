import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const autenticate = false;
  if (!autenticate)
    return NextResponse.redirect(`${req.nextUrl.origin}/auth`);
  return;
}
