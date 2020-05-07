Ext.define('TutorialApp.store.combo.TruckParamsComboStore', {
    extend: 'Ext.data.Store',
    alias: 'store.truckParamsCombo',

  //  model: 'TutorialApp.model.combo.DefaultComboModel',
    model: 'TutorialApp.model.truck.TruckParameters',

    storeId: 'ComboTruckParamsStoreID',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
            read: 'http://localhost:8080/combo/getTruckParams'
        },
        reader: { type: 'json',  successProperty: 'success', rootProperty: 'content', totalProperty: 'totalElements' }
    }

});
