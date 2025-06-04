import { NextResponse } from 'next/server';

// Configure route for static export
export const dynamic = 'force-static';

const vocabularyContext = {
  "@context": {
    "@version": 1.1,
    "AtomicResourceCredential": "https://ordinals.plus/vocab/v1#AtomicResourceCredential",
    "AtomicResource": "https://ordinals.plus/vocab/v1#AtomicResource",
    "VerifiableCollectibleCredential": "https://ordinals.plus/vocab/v1#VerifiableCollectibleCredential",
    "VerifiableCollectible": "https://ordinals.plus/vocab/v1#VerifiableCollectible",
    "attributes": {
      "@id": "https://ordinals.plus/vocab/v1#attributes",
      "@container": "@set",
      "traitType": "https://ordinals.plus/vocab/v1#traitType",
      "value": "https://ordinals.plus/vocab/v1#traitValue"
    }
  }
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Max-Age': '86400',
};

export async function GET() {
  return NextResponse.json(vocabularyContext, {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=86400',
      ...corsHeaders,
    },
  });
}

export async function HEAD() {
  return new NextResponse(null, {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=86400',
      ...corsHeaders,
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
} 