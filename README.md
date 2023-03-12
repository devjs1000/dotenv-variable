# node-libs

1. add a `.env` file.
2. add below format of code.

js```
isProduction: true
production:
  port: 7000
dev:
  port: 8000
```

3. import
js```
const dep=require("dot-env-plus");
```

## you can access values from config return or process.env;

4. 
js```
const {port}=dep.config();
console.log(port);
```

5.
js```
dep.config();
console.log(process.env.port);
```
