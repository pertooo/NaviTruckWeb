Ext.define('TutorialApp.model.driver.Driver', {
    extend: 'TutorialApp.model.Base',

    fields: [
        { name: 'username', type: 'string'},
        { name: 'password', type: 'string'},
        { name: 'available', type: 'boolean'},
        { name: 'team', type: 'boolean'},
        { name: 'confirmed', type: 'boolean'},
        { name: 'active', type: 'boolean'}
    ]
});
