const ALLOWED_ORIGIN = 'https://ambassadeurs.fleuronindustries.fr'

export function getCorsHeaders(origin) {
  const headers = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  // Si l'origin correspond, on l'autorise
  if (origin === ALLOWED_ORIGIN || origin === 'http://localhost:3000') {
    headers['Access-Control-Allow-Origin'] = origin
  }

  return headers
}

// Helper pour les réponses OPTIONS (preflight)
export function handleCorsOptions(request) {
  const origin = request.headers.get('origin')
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(origin),
  })
}
