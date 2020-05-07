Ext.define('TutorialApp.store.task.Tasks', {
    extend: 'Ext.data.Store',
    alias: 'store.tasks',

    model: 'TutorialApp.model.task.Task',
    storeId: 'TaskStoreID',
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: 'ajax',
        api: {
            read: 'http://localhost:8080/task/list'
        },
        reader: { type: 'json',  successProperty: 'success', rootProperty: 'content', totalProperty: 'totalElements' }
    }

});
