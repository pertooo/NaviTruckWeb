Ext.define('TutorialApp.store.combo.MakeComboStore', {
    extend: 'Ext.data.Store',
    alias: 'store.makeCombo',

    model: 'TutorialApp.model.combo.DefaultComboModel',

    storeId: 'MakeComboStoreID',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
            read: 'http://localhost:8080/combo/getMake'
        },
        reader: { type: 'json',  successProperty: 'success', rootProperty: 'content', totalProperty: 'totalElements' }
    }

});
