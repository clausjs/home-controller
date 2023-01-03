export interface HassAPI {
    getApiStatus: () => string;
  }
  
  declare global {
    interface Window {
      hass: HassAPI
    }
  }