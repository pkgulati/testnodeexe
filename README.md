# sample project to test pkg usage

The app is using a node module testpkg1.

If I change node_modules/testpkg1/package.json to specify

```
"pkg" : { "assets": [ "dir1", "dir2"]},
```

The app works fine with pkg. However if I change my own package.json (root level) to include node_modules/testpkg1/dir1 and node_modules/testpkg1/dir2, it gives following error

```
pkg/prelude/bootstrap.js:262
  if (error) throw error;
             ^

Error: Directory '/**/testnodeexe/node_modules/testpkg1/dir1' was not included into executable at compilation stage. Please recompile adding it as asset or script.
    at error_ENOENT (pkg/prelude/bootstrap.js:424:17)
    at readdirFromSnapshot (pkg/prelude/bootstrap.js:765:29)
    at Object.fs.readdirSync (pkg/prelude/bootstrap.js:785:12)
    at Object.listdir (/snapshot/testnodeexe/node_modules/testpkg1/lib/util.js:12:5)
    at Object.func1 (/snapshot/testnodeexe/node_modules/testpkg1/index.js:8:14)
    at Object.<anonymous> (/snapshot/testnodeexe/index.js:0:0)
    at Module._compile (pkg/prelude/bootstrap.js:1251:22)
    at Object.Module._extensions..js (module.js:661:10)
    at Module.load (module.js:563:32)
    at tryModuleLoad (module.js:503:12)

```
