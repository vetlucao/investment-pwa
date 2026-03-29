// Service worker minimalista — apenas para satisfazer o PWA manifest
// Sem cache agressivo que causa 404 no iOS
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
// Sem interceptação de fetch — deixa tudo passar normalmente
 
