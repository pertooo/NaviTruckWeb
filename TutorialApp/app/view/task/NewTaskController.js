Ext.define('TutorialApp.view.task.NewTaskController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.newTask',
    //   viewModel: 'task',


    onReset: function () {
        console.log('reset');
    },

    onCreate: function (scope) {
        var form = scope.up('form');
        if (form.isValid()) {
            var formData = form.getForm().getValues();
            formData.sendImmediately = (scope.id !== 'create');
            console.log(formData);
            Ext.Ajax.request({
                url: 'http://localhost:8080/task/save',
                method: 'PUT',
                jsonData: formData,
                headers: {
                    'Content-Type': 'application/json'
                },
                success: function (response, opts) {
                    var obj = Ext.decode(response.responseText);
                    console.dir(obj);

                    var grid = Ext.getCmp('TaskGridID');
                    var store = grid.getStore();

                    store.on('load', function() {
                        grid.getView().refresh();
                        form.close();
                    });
                    store.reload();
                },

                failure: function (response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                }
            });
        } else {
            alert('Some field are empty!');
        }

    }



});
