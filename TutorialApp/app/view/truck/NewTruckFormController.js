Ext.define('TutorialApp.view.truck.NewTruckFormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.newTruck',
    viewModel: 'truck',

    onComboChange : function (cb, val, ov) {
        var combo = Ext.getCmp('newTruckParamComboID');
        var name = Ext.getCmp('newTruckParamNameID');
        var maxWeight = Ext.getCmp('newTruckParamMaxWeightID');
        var l = Ext.getCmp('newTruckParamLenghtID');
        var w = Ext.getCmp('newTruckParamWidthID');
        var h = Ext.getCmp('newTruckParamHeightID');

        var vm = this.getViewModel();
        var store = vm.getStore('truckParams');

        if (val) {
            combo.setHidden(false)
            name.setHidden(true)
            combo.setValue(null);
            name.setValue(null);

            var data = store.getAt(0).data;
            l.setValue(data.length);
            w.setValue(data.width);
            h.setValue(data.height);
            maxWeight.setValue(data.maxWeight);
            combo.setValue(1);
        } else {
            combo.setHidden(true);
            name.setHidden(false);
            name.setValue(null);

            l.setValue(null);
            w.setValue(null);
            h.setValue(null);
            maxWeight.setValue(null);
            combo.setValue(null);

        }
    }



});
