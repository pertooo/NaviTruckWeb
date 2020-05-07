Ext.define('TutorialApp.view.truck.TruckController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.truck',
    viewModel: 'truck',


    openNewTruckForm : function(){
        var form = Ext.widget('newTruckForm');
        form.show();
    },

    refreshTrucks: function () {
        var vm = this.getViewModel();
        vm.getStore('trucks').reload();
    }
});
