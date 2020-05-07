Ext.define('TutorialApp.view.driver.DriverController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.driver',
    viewModel: 'driver',


    onCreate: function (scope) {
        var form = scope.up('form');
        if (form.isValid()) {
            var formData = form.getForm().getValues();

            var team = formData.team;
            if(team == undefined)
                team = false;

            var available = formData.available;
            if(available == undefined)
                available = false;

            Ext.Ajax.request({
                url: 'http://localhost:8080/truck_user/save' +
                    '?username='+formData.username+'&team='+team+'&available='+available,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                success: function (response, opts) {
                    var obj = Ext.decode(response.responseText);
               //     console.dir(obj);

                    var grid = Ext.getCmp('DriverGridID');
                    var store = grid.getStore();
                    store.on('load', function() {
                        grid.getView().refresh();
                        form.reset();
                    });
                    store.reload();
                    form.collapse();
                },

                failure: function (response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                }
            });
        } else {
            alert('Some field are empty!');
        }

    },

    refreshTruckUsers: function () {
        var vm = this.getViewModel();
        vm.getStore('drivers').reload();
    },

    resetPassword : function(scope){
        var grid = scope.up('grid');
        var ID = grid.getSelectionModel().getSelection()[0].id;

        Ext.Ajax.request({
            url: 'http://localhost:8080/truck_user/reset?ID='+ID,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (response, opts) {
                var obj = Ext.decode(response.responseText);
                console.log(obj.success);

                if(obj.success){
                    var store = grid.getStore();
                    store.on('load', function() {
                        grid.getView().refresh();
                    });
                    store.reload();
                    alert('The Password Reseted!');
                }else{
                    alert('Something gone Wrong!');
                }
            },

            failure: function (response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    }


});
