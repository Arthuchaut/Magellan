'use strict'

var cp = require('child_process');


after(() => {
    cp.execSync('rm -Rf ../tests-tmp');
})