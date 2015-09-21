'use strict';

module.exports = {
  URL: {
    production: 'https://api.gerencianet.com.br',
    sandbox: 'https://sandbox.gerencianet.com.br'
  },
  ENDPOINTS: {
    authorize: {
      route: '/authorize',
      method: 'post'
    },
    createCharge: {
      route: '/charge',
      method: 'post'
    },
    detailCharge: {
      route: '/charge/:id',
      method: 'get'
    },
    updateChargeMetadata: {
      route: '/charge/:id/metadata',
      method: 'put'
    },
    updateBillet: {
      route: '/charge/:id/billet',
      method: 'put'
    },
    payCharge: {
      route: '/charge/:id/pay',
      method: 'post'
    },
    cancelCharge: {
      route: '/charge/:id/cancel',
      method: 'put'
    },
    createCarnet: {
      route: '/carnet',
      method: 'post'
    },
    detailCarnet: {
      route: '/carnet/:id',
      method: 'get'
    },
    updateParcel: {
      route: '/carnet/:id/parcel/:parcel',
      method: 'put'
    },
    updateCarnetMetadata: {
      route: '/carnet/:id/metadata',
      method: 'put'
    },
    getNotification: {
      route: '/notification/:token',
      method: 'get'
    },
    getPlans: {
      route: '/plans',
      method: 'get'
    },
    createPlan: {
      route: '/plan',
      method: 'post'
    },
    deletePlan: {
      route: '/plan/:id',
      method: 'del'
    },
    createSubscription: {
      route: '/plan/:id/subscription',
      method: 'post'
    },
    detailSubscription: {
      route: '/subscription/:id',
      method: 'get'
    },
    paySubscription: {
      route: '/subscription/:id/pay',
      method: 'post'
    },
    cancelSubscription: {
      route: '/subscription/:id/cancel',
      method: 'put'
    },
    updateSubscriptionMetadata: {
      route: '/subscription/:id/metadata',
      method: 'put'
    },
    getInstallments: {
      route: '/installments',
      method: 'post'
    }
  }
};
