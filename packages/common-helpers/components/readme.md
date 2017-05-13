the reason this dir has a .babelrc file is because babel-node
gets babel args from the destination dir when it tries to import
a file. So in order to `import 'DocHeader'` there needs to be a
.babelrc to tell it how to transpile the file.
