import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { parseCookies } from 'nookies';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { accessToken } = parseCookies();
  if (!accessToken)
    return NextResponse.redirect(`${req.nextUrl.origin}/login`); 
  return;
}
