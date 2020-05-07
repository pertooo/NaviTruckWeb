Ext.define('TutorialApp.store.driver.Drivers', {
    extend: 'Ext.data.Store',
    alias: 'store.drivers',

    model: 'TutorialApp.model.driver.Driver',
    storeId: 'DriverStoreID',
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: 'ajax',
        api: {
            read: 'http://localhost:8080/truck_user/list'
        },
        reader: { type: 'json',  successProperty: 'success', rootProperty: 'content', totalProperty: 'totalElements' }
    }

});
