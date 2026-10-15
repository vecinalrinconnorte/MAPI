// Service Worker mínimo para PWA
// Este archivo es requerido por Chrome en Android para instalar la app como WebAPK

self.addEventListener('install', (event) => {
  // Se ejecuta cuando el SW se instala por primera vez
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Se ejecuta cuando el SW toma el control
  event.waitUntil(clients.claim());
});

// Manejador de fetch (necesario para que Chrome considere la app instalable en Android)
self.addEventListener('fetch', (event) => {
  // Por ahora no hacemos nada especial, dejamos que la red responda
  // Más adelante se puede agregar lógica de caché para offline
});
