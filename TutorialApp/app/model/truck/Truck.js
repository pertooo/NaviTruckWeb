Ext.define('TutorialApp.model.truck.Truck', {
    extend: 'TutorialApp.model.Base',

    fields: [
        { name: 'make', type: 'string'},
        { name: 'model', type: 'string'},
        { name: 'truckType', type: 'number'},
        { name: 'bodyType', type: 'number'},
        { name: 'year', type: 'number'},

        { name: 'paramName', type: 'string'},
        { name: 'maxWeight', type: 'number'},
        { name: 'length', type: 'number'},
        { name: 'width', type: 'number'},
        { name: 'height', type: 'number'}
    ]
});
