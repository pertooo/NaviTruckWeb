Ext.define('TutorialApp.model.task.Task', {
    extend: 'TutorialApp.model.Base',

    fields: [
        { name: 'addressFrom', type: 'string'},
        { name: 'addressTo', type: 'string'},
        { name: 'pickupTime', type: 'date', dateFormat: 'C', persist: false },
        { name: 'unloadTime', type: 'date', dateFormat: 'C', persist: false },
        { name: 'pickupTimeStr', type: 'string'},
        { name: 'unloadTimeStr', type: 'string'},
        { name: 'weight', type: 'number'},
        { name: 'fee', type: 'number'},
        { name: 'sendImmediately', type: 'boolean'}
    ]
});
