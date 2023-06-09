# Nodejs OS Data: A simple package to view OS data

> 🌱 I did this project to learn about how to publish a NPM package and work with command-line arguments

💻 Get operating system-related data such as CPU Architecture, CPU Model, Total memory, and more!

🍃 Lightweight without dependencies

# Preview

### Console 
![image of os data from terminal](https://github.com/barcellos-pedro/nodejs-os-data/assets/33139500/1b212eb9-18a5-4c07-8f80-89b106e1044a)

### Files
![image of different files containing OS data](https://github.com/barcellos-pedro/nodejs-os-data/assets/33139500/4ebff331-fe48-4279-83a3-6ae33a2f9c4f)

# How to use

### Code
```js
getData().catch(console.error);
```

### NPX
```bash
npx nodejs-os-data [filename] [format]
```

### Available Options:
| Command     | Description | Defaults |
| ----------- | ----------- | -------- |
| --filename  | Filename to use | info.txt |
| --format    | File extension  | .txt     |

# References

### Node.js API docs used as knowledgebase
- [Process (argv)](https://nodejs.org/docs/latest/api/process.html#processargv)
- [OS](https://nodejs.org/api/os.html#os)
- [Test Runner](https://nodejs.org/docs/latest-v18.x/api/test.html#test-runner)
