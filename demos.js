module.exports = {
    'demo1': {
        cwd: 'test', // 命令执行的目录，可以为绝对路径、相对路径,默认为process.cwd()
        outputColor: 'blue', // 可选颜色请参考https://github.com/chalk/chalk，默认为蓝色
        clearBeforeOutput: false, // 在输出当前命令的结果前，是否要清空命令行窗口，默认为false
        commands: [
            'ls', //命令可以是字符串
            { //如果需要覆盖全局设置，可以用对象指定要覆盖的选项
                command: 'cat index.js',
                // cwd: '/test', //命令的选项会覆盖demo的选项
                outputColor: 'red', //命令的选项会覆盖demo的选项
                // clearBeforeOutput: false //命令的选项会覆盖demo的选项
            }
        ]
    },
    'demo2': {
        cwd: 'test',
        commands: [
            'ls',
            'cat index.js'
        ]
    }
};
