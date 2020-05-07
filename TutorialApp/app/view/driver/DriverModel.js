Ext.define('TutorialApp.view.driver.DriverModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.driver',

    stores: {
        drivers: {
            type: 'drivers'
        }
    }

});
