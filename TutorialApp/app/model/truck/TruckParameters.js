Ext.define('TutorialApp.model.truck.TruckParameters', {
    extend: 'TutorialApp.model.Base',

    fields: [
        { name: 'id', type: 'number'},
        { name: 'paramName', type: 'string'},
        { name: 'maxWeight', type: 'number'},
        { name: 'length', type: 'number'},
        { name: 'width', type: 'number'},
        { name: 'height', type: 'number'}
    ]
});
