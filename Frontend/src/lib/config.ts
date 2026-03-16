const rawUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Remove trailing slash for consistent URL handling
const normalizedRoot = rawUrl.endsWith('/') ? rawUrl.slice(0, -1) : rawUrl;

export const API_BASE_URL = normalizedRoot;

// Backend API should be under /api, avoid duplicate slashes
export const API_URL = API_BASE_URL.endsWith('/api') ? API_BASE_URL : `${API_BASE_URL}/api`;

// Socket connection usually expects host without /api
export const SOCKET_URL = API_BASE_URL.replace(/\/api$/i, '');
