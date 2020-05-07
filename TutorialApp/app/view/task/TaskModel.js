Ext.define('TutorialApp.view.task.TaskModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.task',

    stores: {
        tasks: {
            type: 'tasks',
            grouper: {
                groupFn: function(record) {
                    return record.get('weight')[0];
                }
            }
        }
    }

});
