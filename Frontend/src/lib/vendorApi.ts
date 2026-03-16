import API from './api';

// ===== Vendor Profile =====
export const getVendorProfile = () => API.get('/vendor/profile');
export const updateVendorProfile = (data: Record<string, any>) => API.put('/vendor/profile', data);

// ===== Vendor Offers =====
export const getVendorOffers = (vendorId: string) => API.get(`/vendors/${vendorId}/offers`);
export const getMyOffers = (params?: Record<string, any>) => API.get('/vendors/offers', { params });
export const createVendorOffer = (offerData: FormData) => API.post('/vendors/offers', offerData);
export const updateVendorOffer = (offerId: string, data: Record<string, any>) => API.patch(`/vendors/offers/${offerId}`, data);
export const deleteVendorOffer = (offerId: string) => API.delete(`/vendors/offers/${offerId}`);

// ===== Vendor Redemption =====
export const getVendorRedemptions = (params?: Record<string, any>) => API.get('/vendors/redemptions', { params });

// ===== Vendor Analytics =====
export const getVendorDashboard = () => API.get('/vendors/dashboard');
export const getVendorAnalytics = () => API.get('/vendors/analytics');
export const getVendorLocationAnalytics = (params?: Record<string, any>) => API.get('/vendors/analytics/location', { params });

// ===== Vendor Location =====
export const updateLocation = (data: { latitude: number; longitude: number; address?: string }) => API.put('/vendor/location', data);
