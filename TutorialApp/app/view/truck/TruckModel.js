Ext.define('TutorialApp.view.truck.TruckModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.truck',

    stores: {
        trucks: {
            type: 'trucks'
        },
        truckParams : {
            type : 'truckParamsCombo',
            autoLoad: true,
            sorters: [{
                property: 'name',
                direction:'ASC'
            }]
        },
        carMake : {
            type : 'makeCombo'
        }
    }

});
