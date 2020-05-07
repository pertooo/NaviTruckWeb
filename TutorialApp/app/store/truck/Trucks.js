Ext.define('TutorialApp.store.truck.Trucks', {
    extend: 'Ext.data.Store',
    alias: 'store.trucks',

    model: 'TutorialApp.model.truck.Truck',
    storeId: 'TrucksStoreID',
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: 'ajax',
        api: {
            read: 'http://localhost:8080/truck/list'
        },
        reader: { type: 'json',  successProperty: 'success', rootProperty: 'content', totalProperty: 'totalElements' }
    }

});
