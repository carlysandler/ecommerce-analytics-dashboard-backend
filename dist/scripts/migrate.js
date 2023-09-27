"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasources_1 = require("../datasources");
const ds = new datasources_1.MySqlDataSource();
ds.automigrate('User', (err) => {
    if (err)
        throw err;
    console.log('Models migrated');
    ds.disconnect();
});
//# sourceMappingURL=migrate.js.map