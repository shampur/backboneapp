app.models.todo = Backbone.Model.extend({
    defaults: function() {
        var id = this.generateUid();
        return {
            id: id,
            title: '',
            description: '',
            completed: false,
            create_ts: new Date(),
            update_ts: new Date()
        };
    },

    validate: function(attrs){
        if(!attrs.title) {
            return 'Please enter the title';
        }
        if (!attrs.description) {
            return 'Please enter a short description for the task';
        }
    },

    generateUid: function() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
    },

    setCompleted: function(flag){
        this.set({completed: flag, update_ts: new Date()});
    }
});

