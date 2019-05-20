(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{59:function(e,n,t){"use strict";t.r(n);var r=t(0),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git","aria-hidden":"true"}},[e._v("#")]),e._v(" Git")]),e._v(" "),t("h3",{attrs:{id:"git基本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git基本命令","aria-hidden":"true"}},[e._v("#")]),e._v(" Git基本命令")]),e._v(" "),t("h4",{attrs:{id:"初始化一个git仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化一个git仓库","aria-hidden":"true"}},[e._v("#")]),e._v(" 初始化一个Git仓库")]),e._v(" "),t("p",[t("code",[e._v("git init")])]),e._v(" "),t("h4",{attrs:{id:"添加文件到git仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加文件到git仓库","aria-hidden":"true"}},[e._v("#")]),e._v(" 添加文件到Git仓库")]),e._v(" "),t("p",[t("code",[e._v("git add <file>")])]),e._v(" "),t("h4",{attrs:{id:"提交文件到git仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交文件到git仓库","aria-hidden":"true"}},[e._v("#")]),e._v(" 提交文件到Git仓库")]),e._v(" "),t("p",[t("code",[e._v("git commit -m <message>")])]),e._v(" "),t("h4",{attrs:{id:"查看仓库当前的状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看仓库当前的状态","aria-hidden":"true"}},[e._v("#")]),e._v(" 查看仓库当前的状态")]),e._v(" "),t("p",[t("code",[e._v("git status")])]),e._v(" "),t("h4",{attrs:{id:"查看当前文件做了什么修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前文件做了什么修改","aria-hidden":"true"}},[e._v("#")]),e._v(" 查看当前文件做了什么修改")]),e._v(" "),t("p",[t("code",[e._v("git difference")])]),e._v(" "),t("h3",{attrs:{id:"远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库","aria-hidden":"true"}},[e._v("#")]),e._v(" 远程仓库")]),e._v(" "),t("p",[e._v("Git是分布式版本控制系统, 同一个Git仓库, 可以分部到不同的机器上.")]),e._v(" "),t("p",[e._v('最早, 只有一台机器有一个原始版本库, 此后, 别的机器可以"克隆"这个原始版本库, 而且每台机器的版本库其实都是一样的.')]),e._v(" "),t("p",[e._v("本地的Git仓库和Git仓库之间的传输是通过SSH加密的.")]),e._v(" "),t("p",[t("strong",[e._v("远程准备 :")])]),e._v(" "),t("ol",[t("li",[e._v("创建SSH Key: "),t("code",[e._v('ssh-keygen -t rsa -C "your email @example.com"')]),e._v("(如果一切顺利的话, 可以再用户主目录里找到 "),t("code",[e._v(".ssh")]),e._v(" 目录, "),t("code",[e._v("id_rsa")]),e._v(" 是私钥, "),t("code",[e._v("id_rsa.pub")]),e._v(" 是公钥)")]),e._v(" "),t("li",[e._v('登录 GitHub, 打开"Account settings", "SSH Keys"页面: 然后, 点"Add SSH Key", 填上任意Title, 在Key文本框里粘贴 '),t("code",[e._v("id_rsa.pub")]),e._v(" 文件的内容.")])]),e._v(" "),t("p",[t("strong",[e._v("注 :")]),e._v(" 为什么GitHub需要SSH Key呢?")]),e._v(" "),t("p",[e._v("因为GitHub需要识别出你推送的提交确实是你推送的, 而不是别人冒充的, 而Git支持SSH协议, 所以, GitHub 只要知道了你的公钥, 就可以确认只有你自己才能推送.")]),e._v(" "),t("h4",{attrs:{id:"_1-先有本地库-关联远程库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-先有本地库-关联远程库","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. 先有本地库, 关联远程库")]),e._v(" "),t("p",[t("code",[e._v("git remote add origin git@github.com:michaelliao/learngit.git")])]),e._v(" "),t("blockquote",[t("p",[e._v("从远程的仓库克隆到本地的仓库")])]),e._v(" "),t("p",[t("strong",[e._v("注 :")]),e._v(" 远程库的名字就是 "),t("code",[e._v("origin")]),e._v(", 这是Git默认的叫法.")]),e._v(" "),t("p",[e._v("下一步, 就可以把本地仓库的所有内容都推送到远程库上:")]),e._v(" "),t("p",[t("code",[e._v("git push -u origin master")])]),e._v(" "),t("p",[e._v("由于远程库时空的, 我们第一次推送 "),t("code",[e._v("master")]),e._v(" 分支时, 加上了 "),t("code",[e._v("-u")]),e._v(" 参数, Git不但会把本地的 "),t("code",[e._v("master")]),e._v(" 分支内容推送远程新的 "),t("code",[e._v("master")]),e._v(" 分支, 还会把本地的 "),t("code",[e._v("master")]),e._v(" 分支和远程的 "),t("code",[e._v("master")]),e._v(" 分支关联起来, 在以后的推送或者拉取时就可以简化命令.")]),e._v(" "),t("p",[e._v("此后, 每次本地提交后, 只要有必要, 就可以使用命令 "),t("code",[e._v("git push origin master")]),e._v(" 推送最新修改.")]),e._v(" "),t("h4",{attrs:{id:"_2-先建远程库-然后从远程库克隆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-先建远程库-然后从远程库克隆","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. 先建远程库, 然后从远程库克隆")]),e._v(" "),t("p",[t("code",[e._v("git clone git@github.com:michaelliao/gitskills.git")])]),e._v(" "),t("p",[e._v("然后进入 "),t("code",[e._v("gitskills")]),e._v(" 目录看看")]),e._v(" "),t("pre",[t("code",[e._v("$ cd gitskills\n$ ls\n")])]),e._v(" "),t("h3",{attrs:{id:"创建与合并分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建与合并分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建与合并分支")]),e._v(" "),t("p",[e._v("在Git里, 主分支是 "),t("code",[e._v("master")]),e._v(" 分支. "),t("code",[e._v("HEAD")]),e._v(" 严格来说不是指向提交, 而是指向 "),t("code",[e._v("master")]),e._v(" , "),t("code",[e._v("master")]),e._v(" 才是指向提交的, 所以, "),t("code",[e._v("HEAD")]),e._v(" 指向的就是当前分支.")]),e._v(" "),t("p",[e._v("一开始的时候, "),t("code",[e._v("master")]),e._v(" 分支是一条线, Git用 "),t("code",[e._v("master")]),e._v(" 指向最新的提交, 再用 "),t("code",[e._v("HEAD")]),e._v(" 指向 "),t("code",[e._v("master")]),e._v(" , 就能确定当前分支, 以及分支的提交点.")]),e._v(" "),t("p",[e._v("步骤:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("创建 "),t("code",[e._v("dev")]),e._v(" 分支")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 创建分支\ngit branch dev\n\n// 切换分支\ngit checkout dev\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 创建加切换分支\ngit checkout -b dev\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("然后, 用"),t("code",[e._v("git branch")]),e._v("命令查看当前分支:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git branch\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("code",[e._v("git branch")]),e._v(" 命令会列出所有分支, 当前分支前面会标一个"),t("code",[e._v("*")]),e._v("号")])]),e._v(" "),t("li",[t("p",[e._v("切换分支")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git checkout master\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("合并分支")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git merge dev\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("code",[e._v("git merge")]),e._v(" 命令用于合并指定分支到当前分支.")])]),e._v(" "),t("li",[t("p",[e._v("删除分支")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git branch -d dev\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])]),e._v(" "),t("h3",{attrs:{id:"feature-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feature-分支","aria-hidden":"true"}},[e._v("#")]),e._v(" Feature 分支")]),e._v(" "),t("p",[e._v("每添加一个新功能, 最好新建一个 feature 分支, 在上面开发, 完成后合并, 最后删除该分支.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 1. 创建分支\ngit checkout -b xxx\n    \n// 2. 合并分支\ngit checkout dev\n    \n// 3. 删除分支\ngit branch -d xxx\n    \n// 4. 分支还没有合并的时候强制删除\ngit branch -D xxx\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("h3",{attrs:{id:"bug-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-分支","aria-hidden":"true"}},[e._v("#")]),e._v(" bug 分支")]),e._v(" "),t("p",[e._v("使用场景: 当你要修复一个 bug 时, 当前正在 "),t("code",[e._v("dev")]),e._v(" 上进行的工作还没有提交.")]),e._v(" "),t("p",[t("code",[e._v("dev")]),e._v(" 上的工作只进行到一半, 还没法提交, 预计完成还需1天时间. 但是必须在两小时内修复 bug 怎么办?")]),e._v(" "),t("p",[e._v("Git 提供了一个 "),t("code",[e._v("stash")]),e._v(' 功能, 可以把当前工作现场"储藏"起来, 等以后恢复现场后继续工作:')]),e._v(" "),t("p",[t("code",[e._v("git stash")]),e._v(" 暂存修改")]),e._v(" "),t("p",[t("code",[e._v("git status")]),e._v(" 查看工作区")]),e._v(" "),t("p",[e._v("首先,确定要在哪个分支上修复bug")]),e._v(" "),t("p",[t("code",[e._v("git checkout master")]),e._v(" 切换到需要修复bug 的分支上")]),e._v(" "),t("p",[t("code",[e._v("git checkout -b bug-issue")]),e._v(" 新建bug修复的分支")]),e._v(" "),t("p",[e._v("在 bug-issue 分支上修改, 然后 commit .")]),e._v(" "),t("p",[e._v("修复完成后, 切换到 "),t("code",[e._v("master")]),e._v(" 分支, 并完成合并, 最后删除 bug 分支.")]),e._v(" "),t("p",[t("code",[e._v("git stash list")]),e._v(" 查看暂存区的所有暂存信息")]),e._v(" "),t("p",[t("code",[e._v("git stash apply")]),e._v(" 恢复暂存区的内容, 但是 stash 内容并不删除.")]),e._v(" "),t("p",[t("code",[e._v("git stash drop")]),e._v(" 删除暂存区的内容")]),e._v(" "),t("p",[t("code",[e._v("git stash pop")]),e._v(" 恢复暂存区的内容, 并删除暂存区的内容.")]),e._v(" "),t("p",[e._v("多次 "),t("code",[e._v("stash")]),e._v(" 的时候, 可以先用 "),t("code",[e._v("git stash list")]),e._v(" 查看, 然后回复指定的 stash")]),e._v(" "),t("p",[t("code",[e._v("git stash apply stash@{0}")]),e._v(" 恢复指定的 stash")]),e._v(" "),t("h5",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[e._v("#")]),e._v(" 小结:")]),e._v(" "),t("p",[e._v("修复 bug 时, 我们会通过创建新的 bug 分支进行修复, 然后合并, 最后删除;")]),e._v(" "),t("p",[e._v("当手头的工作没有完成时, 先把工作现场"),t("code",[e._v("git stash")]),e._v("一下, 然后去修复bug, 修复后, 再"),t("code",[e._v("git stash pop")]),e._v(", 回到工作现场.")]),e._v(" "),t("h3",{attrs:{id:"多人协作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多人协作","aria-hidden":"true"}},[e._v("#")]),e._v(" 多人协作")]),e._v(" "),t("p",[e._v("当你从远程仓库克隆时, 实际上Git 自动把本地的 "),t("code",[e._v("master")]),e._v(" 分支和远程的 "),t("code",[e._v("master")]),e._v(" 分支对应起来了, 并且, 远程仓库的默认名称是 "),t("code",[e._v("origin")]),e._v(".")]),e._v(" "),t("p",[t("code",[e._v("git remote")]),e._v(" 查看远程库的信息.")]),e._v(" "),t("p",[t("code",[e._v("git remote -v")]),e._v(" 显示更详细的信息.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git remote -v\norigin  git@github.com:michaelliao/learngit.git (fetch)\norigin  git@github.com:michaelliao/learngit.git (push)\n\n// 显示了 可以抓取和推送的 origin 的地址.\n// 如果没有推送权限, 就看不到 push 的地址.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("h2",{attrs:{id:"typescript基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript基础","aria-hidden":"true"}},[e._v("#")]),e._v(" TypeScript基础")]),e._v(" "),t("h3",{attrs:{id:"基础类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础类型","aria-hidden":"true"}},[e._v("#")]),e._v(" 基础类型")]),e._v(" "),t("p",[e._v("TypeScript的基础类型和JavaScript的基础类型几乎相同。")]),e._v(" "),t("pre",[t("code",[e._v('// 布尔值\nlet isDone: boolean = false;\n\n// 所有的数字都是浮点数， 支持 十进制 十六进制 还有 二进制和八进制\nlet decLiteral: number = 6;\nlet hexLiteral: number = 0xf00d;\nlet binaryLiteral: number = 0b1010;\nlet octalLiteral: number = 0o744;\n\n// 字符串\nlet name: string = "Jane";\nlet name: string = `Gane`;\nlet sentence: string = `Hello, my name is ${name}`;\n\n// 数组\nlet list: number[] = [1, 2, 3, 4];\nlet list: Array<number> = [1, 2, 3, 4];\n\n// Null 和 Undefined\nlet u: undefined = undefined;\nlet n: null = null;\n\n// Object (object 表示非原始类型)\ndeclare function create(o: object | null): void;\n\ncreate({ prop: 0 }); // ok\ncreate(null); // ok\n\ncreate(42); // error 42 属于 number 类型\n')])]),e._v(" "),t("p",[t("strong",[e._v("元祖 Tuple")]),e._v(" (新增类型)")]),e._v(" "),t("p",[e._v("元祖类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。")]),e._v(" "),t("pre",[t("code",[e._v("let x: [string, number];\nx = ['hello', 10]; // ok\nx = [10, 'hello']; // error\n")])]),e._v(" "),t("p",[t("strong",[e._v("枚举 emum")])]),e._v(" "),t("p",[e._v("enum 类型是对JavaScript标准数据类型的补充。")]),e._v(" "),t("pre",[t("code",[e._v("enum Color {Red = 1, Green, Blue = 4}\nlet c: Color = Color.Green;\n// c = 2\n\n// 枚举类型提供的一个便利是可以通过枚举的值得到它的名字.\nlet colorName: string = Color[4]; \n// colorName = Blue\n")])]),e._v(" "),t("p",[t("strong",[e._v("Any")])]),e._v(" "),t("p",[e._v("为不确定类型的变量指定一个类型.")]),e._v(" "),t("pre",[t("code",[e._v("let noSure: any = 4;\nnotSure = \"maybe a string instead\";\nnotSure = false;\n\nlet list: any[] = [1, true, \"free\"];\nlist[1] = 100;\n\n// Object 类型的变量只允许赋值, 不能够调用任意方法, any类型可以调用方法\n\nlet noSure: any = 4;\nnotSure.ifItExists(); // ok\n\nlet prettySure: Object = 4;\nprettySure.toFixed(); // Error: Property 'toFixed' doesn't exit on type 'Object'.\n")])]),e._v(" "),t("p",[t("strong",[e._v("void")])]),e._v(" "),t("p",[e._v("表示没有任何类型. 当一个函数没有返回值时,通常会见到其返回值是void.")]),e._v(" "),t("pre",[t("code",[e._v('function warnUser(): void {\n    console.log("This is my waring message");\n}\n\n// void 类型的变量只能被赋予 undefined 和 null\nlet unusable: void = undefined;\n')])]),e._v(" "),t("p",[t("strong",[e._v("Never")])]),e._v(" "),t("p",[e._v("never 类型表示的是那些永不存在值的类型.   never类型是任何类型的子类型, 也可以赋值给任何类型.")]),e._v(" "),t("pre",[t("code",[e._v("// 返回never 的函数必须存在无法到达的终点\nfunction error(message: string): never {\n    throw new Error(message);\n}\n\nfunction infiniteLoop(): never {\n    while (true) {\n        xxx;\n    }\n}\n\n// 推断的返回值类型为 never\nfunction fail() {\n    return error('Something failed')\n}\n")])]),e._v(" "),t("p",[t("strong",[e._v("类型断言")])]),e._v(" "),t("p",[e._v("类型断言就是程序员已经判断好了类型, 替代编译器进行特殊的数据检查和解构.")]),e._v(" "),t("pre",[t("code",[e._v("let someValue: any = 'This is a string';\nlet strLength: number = (<string>someValue).length;\n\nlet strLength: number = (someValue as string).length;\n// JSX 只有 as 语法断言是被允许的\n")])]),e._v(" "),t("h3",{attrs:{id:"变量声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量声明","aria-hidden":"true"}},[e._v("#")]),e._v(" 变量声明")]),e._v(" "),t("p",[t("code",[e._v("var let const")])]),e._v(" "),t("h3",{attrs:{id:"接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口","aria-hidden":"true"}},[e._v("#")]),e._v(" 接口")]),e._v(" "),t("p",[e._v('TypeScript的核心原则之一是对值所具有的结构进行类型检查. 它有时被称为"鸭式辨型法"或"结构性子类型化".')]),e._v(" "),t("p",[e._v("在TypeScript里, 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约.")]),e._v(" "),t("p",[t("strong",[e._v("普通对象")])]),e._v(" "),t("pre",[t("code",[e._v("// 必须属性\ninterface LabelledValue {\n    label: string;\n}\n\n// 可选属性\ninterface SquareConfig {\n    color?: string\n}\n \n// 只读属性\ninterface Point {\n    readonly x: number\n}\n\n// 额外属性检查\ninterface SquareConfig {\n    color: string;\n    width: number;\n    [propName: string]: any\n}\n")])]),e._v(" "),t("p",[t("strong",[e._v("函数类型")])]),e._v(" "),t("pre",[t("code",[e._v("// 只有参数列表和返回值类型的函数定义\ninterface SearchFunc {\n    (source: string, subString: string) : boolean;\n}\n")])]),e._v(" "),t("p",[t("strong",[e._v("可索引类型")])]),e._v(" "),t("pre",[t("code",[e._v('// 描述那些能够通过索引得到的类型 比如 a[10]\ninterface StringArray {\n    [index: number]: string\n}\n\n// ts 支持两种索引签名: 字符串和数字. 数字索引的返回值必须是字符串索引返回值类型的子类型.\n// 当使用 number 来索引时, JavaScript 会将它转换成 string 然后再去索引对象. 也就是说 100 = "100".\n\n// 字符串索引签名能够很好的描述 dictionary 模式, 并且\n')])]),e._v(" "),t("p",[t("strong",[e._v("接口的可继承性")])]),e._v(" "),t("pre",[t("code",[e._v('interface Shape {\n    color: string;\n}\n\ninterface PenStroke {\n    penWidth: number;\n}\n\ninterface Square extends Shape, PenStroke {\n    sideLength: number;\n}\n\nlet square = <Square>{};\nsquare.color = "blue";\nsquare.sideLength = 10;\nsquare.penWidth = 5.0;\n')])]),e._v(" "),t("p",[t("strong",[e._v("混合类型")])]),e._v(" "),t("pre",[t("code",[e._v("interface Counter {\n    (start: number): string;\n    interval: number;\n    reset(): void;\n}\n\nfunction getCounter(): Counter {\n    let counter = <Counter>function (start: number) { };\n    counter.interval = 123;\n    counter.reset = function () {};\n    return counter;\n}\n\nlet c = getCounter();\nc(10);\nc.reset();\nc.interval = 5.0;\n")])]),e._v(" "),t("h3",{attrs:{id:"类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类","aria-hidden":"true"}},[e._v("#")]),e._v(" 类")]),e._v(" "),t("pre",[t("code",[e._v('class Greeter {\n    greeting: string;\n    constructor(message: string) {\n        this.greeting = message;\n    }\n    greet () {\n        return "Hello, " + this.greeting;\n    }\n}\n\nlet greeter = new Greeter(\'world\');\n\nclass Animal {\n    name: string;\n    constructor(theName: string) { this.name = theName; }\n    move(distanceInMeters: number = 0) {\n        console.log(`${this.name} moved ${distanceInMeters}m`);\n    }\n}\n\nclass Snake extends Animal {\n    constructor(name: string) { super(name); }\n    move(distanceInMeters = 5) {\n        console.log("slithering...");\n        super.move(distanceInMeters);\n    }\n}\n\nlet tom: Animal = new Snake("Sammy the Python");\n\ntom.move(34);\n')])]),e._v(" "),t("p",[e._v("派生类包含了一个构造函数, 它必须调用 super(), 它会执行基类的构造函数.")]),e._v(" "),t("p",[e._v("而且在构造函数里访问this 的属性之前, 我们一定要调用 super()")]),e._v(" "),t("h3",{attrs:{id:"函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数","aria-hidden":"true"}},[e._v("#")]),e._v(" 函数")]),e._v(" "),t("p",[e._v("为函数定义类型")]),e._v(" "),t("pre",[t("code",[e._v("function add (x: number, y:number): number {\n    return x + y;\n}\n")])]),e._v(" "),t("p",[e._v("可选参数和默认参数")]),e._v(" "),t("pre",[t("code",[e._v('// 可选参数在参数旁使用 ? 实现可选参数的功能 (可选参数一定要放在最后面, 而且要对其进行处理)\nfunction buildName (firstName: string, lastName?: string) {\n    if (lastName) {\n        return firstName + " " + lastName;\n    } else {\n        return lastName;\n    }\n}\n\n// 默认参数 (带默认值的参数不需要放在最后, 用户只需要明确地传入 undefined 值来获得默认值就可以)\nfunction buildName (firstName: string, lastName = "Smith", addName: string) {\n    return firstName + " " + lastName;\n}\n\nlet result = buildName("Bob", ,"Sr.")\n')])]),e._v(" "),t("p",[e._v("剩余参数")]),e._v(" "),t("pre",[t("code",[e._v('// 同时操作多个参数, 但是并不知道会有多少个参数传进来\nfunction buildName(firstName: string, ...restOfName: string[]) {\n    return firstName + " " + restOfName.join("");\n}\n\nlet employeeName = buildName("Joseph", "Samuel", "Lucas", "Mackinzie");\n')])]),e._v(" "),t("p",[e._v("this指向 顶级的非方法式调用会将 this 视为 window (注: 在严格模式下, this为 undefined )")]),e._v(" "),t("p",[e._v("函数重载 (函数名一样, 参数不一样, 不同的处理方法)")]),e._v(" "),t("h3",{attrs:{id:"泛型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#泛型","aria-hidden":"true"}},[e._v("#")]),e._v(" 泛型")]),e._v(" "),t("p",[e._v("创建可重用的组件, 一个组件可以支持多种类型的数据.")]),e._v(" "),t("pre",[t("code",[e._v('// T 是类型变量 它是一种特殊的变量, 表示的是类型 而不是值\nfunction identity<T>(arg: T): T {\n    return arg;\n}\n\nlet output = identity<string>("myString"); // type of output will be "string"\n\nlet output = identity("myString"); // 类型推论(帮助我们保持代码精简和高可读性)\n\n// 创建 T 类型的数组 而不直接是T\nfunction loggingIdentity<T>(arg: T[]):T {\n    console.log(arg.length);\n    return arg;\n}\n')])]),e._v(" "),t("h3",{attrs:{id:"枚举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#枚举","aria-hidden":"true"}},[e._v("#")]),e._v(" 枚举")]),e._v(" "),t("p",[e._v("TypeScript支持数字和基于字符串的枚举.")]),e._v(" "),t("pre",[t("code",[e._v('// 数字枚举 (自增长行为)\nenum Direction {\n    Up = 1, // 不设置值的时候默认从 0 开始\n    Down, // 2\n    Left, // 3\n    Right // 4\n}\n\n// 字符串枚举 (没有自增长行为,每个成员都必须用字符串自变量)\nenum Direction {\n    Up = "Up",\n    Down = "Down",\n    Left = "Left",\n    Right = "Right"\n}\n\n// 异构枚举 (不建议)\nenum BooleanLikeHeterogenneousEnum {\n    No = 0;\n    Yes = "YES",\n}\n\n// 反向映射\nenum Enum {\n    A\n}\nlet a = Enum.A;\nlet nameOfA = Enum[a]; // "A"\n')])]),e._v(" "),t("h3",{attrs:{id:"类型推论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型推论","aria-hidden":"true"}},[e._v("#")]),e._v(" 类型推论")]),e._v(" "),t("p",[e._v("TypeScript里, 在有些没有明确指出类型的地方, 类型推论会帮助提供类型.")]),e._v(" "),t("pre",[t("code",[e._v("// 发生在初始化变量和成员, 设置默认值和决定函数返回值时\nlet x = 3; // x => 数字\n\n// 按照上下文分类\nfunction crreateZoo(): Animal[] {\n    return [new Rhino(), new Elephant(), new Snake()];\n}\n// 在这个例子里, 最佳通用类型有4个候选者: Animal, Rhino, Elephant, Snake. 当然, Animal 会被作为最佳通用类型.\n")])]),e._v(" "),t("h3",{attrs:{id:"类型兼容性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型兼容性","aria-hidden":"true"}},[e._v("#")]),e._v(" 类型兼容性")]),e._v(" "),t("p",[e._v("TypeScript结构化类型系统的基本规则是: 如果x要兼容y, 那么y至少具有与x相同的属性.")]),e._v(" "),t("pre",[t("code",[e._v('interface Named {\n    name: string;\n}\n\nlet x: Named;\n// Y\'s inferred type is { name: string; location: string; }\nlet y = { name: "Alice", location: "Seattle" };\nx = y;\n// x 必须包含名字是 name 的 string 类型成员. y 满足条件, 因此赋值正确.\n')])]),e._v(" "),t("p",[e._v("检查函数参数时 使用相同的规则.")]),e._v(" "),t("h3",{attrs:{id:"高级类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高级类型","aria-hidden":"true"}},[e._v("#")]),e._v(" 高级类型")]),e._v(" "),t("p",[e._v("交叉类型 (Intersection Types) : 将多个类型合并为一个类型")]),e._v(" "),t("pre",[t("code",[e._v("function extend<T, U>(first: T, second: U): T & U {\n    let result = <T & U>{ };\n    for (let id in first) {\n        (<any>result)[id] = (<any>first)[id];\n    }\n    for (let id in second) {\n        if (!result.hasOwnProperty(id)) {\n            (<any>result)[id] = (<any>second)[id];\n        }\n    }\n    return result;\n}\n")])]),e._v(" "),t("p",[e._v("联合类型 (Union Types) : 与交叉类型很有关联, 但是使用上完全不同")]),e._v(" "),t("pre",[t("code",[e._v('function padLeft(value: string, padding: string | number) {\n    xxx;\n}\n\nlet indentedString = padLeft("Hello world", true);\n')])]),e._v(" "),t("p",[e._v("类型保护与区分类型(Type Guards and Differentiating Types)")]),e._v(" "),t("p",[e._v("typeof 类型保护")]),e._v(" "),t("pre",[t("code",[e._v("function padLeft(value: string, padding: string | number) {\n    if (typeof padding === 'number') {\n        xxx;\n    }\n    if (typeof padding === 'string') {\n        xxx;\n    }\n}\n")])]),e._v(" "),t("p",[e._v("instanceof 类型保护")]),e._v(" "),t("p",[e._v("instanceof 的右侧要求是一个构造函数, TypeScript将细化为:")]),e._v(" "),t("ol",[t("li",[e._v("此构造函数的 prototype 属性的类型, 如果它的类型不为 any 的话")]),e._v(" "),t("li",[e._v("构造签名所返回的类型的联合")])]),e._v(" "),t("h3",{attrs:{id:"symbol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol","aria-hidden":"true"}},[e._v("#")]),e._v(" Symbol")]),e._v(" "),t("p",[e._v("symbol 是一种新的原生类型. Symbols 是不可改变且唯一的.")]),e._v(" "),t("pre",[t("code",[e._v('let sym1 = Symbol();\nlet sym2 = Symbol("key"); // 可选的字符串key\n\nlet sym = Symbol();\n\nlet obj = {\n    [sym]: "value"\n};\n\nconsole.log(obj[sym]); // "value"\n')])]),e._v(" "),t("h3",{attrs:{id:"迭代器和生成器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迭代器和生成器","aria-hidden":"true"}},[e._v("#")]),e._v(" 迭代器和生成器")]),e._v(" "),t("p",[e._v("for...in 和 for...of 语句")]),e._v(" "),t("pre",[t("code",[e._v("let list = [3, 4, 5];\n\nfor (let i in list) {\n    console.log(i); // '0', '1', '2'\n}\n\nfor (let i of list) {\n    console.log(i); // '3' ,'4', '5'\n}\n\n// 另一个区别是 for...in 可以操作任何对象, 它提供了查看对象属性的方法\n// for...of 关注于迭代对象的值\n\nlist[3] = 6;\n\nfor (let i in list) {\n    console.log(i); // 6\n}\n\nfor (let i of list) {\n    console.log(i); // '3', '4', '5'\n}\n\n// for...of 可以使用 break 语句打断循环.\n")])]),e._v(" "),t("h3",{attrs:{id:"模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块","aria-hidden":"true"}},[e._v("#")]),e._v(" 模块")]),e._v(" "),t("p",[e._v("导入和导出 "),t("em",[e._v("外部文件")])]),e._v(" "),t("pre",[t("code",[e._v('export => import ... from "..."\nexport = obj => import ... = require("...")\n')])]),e._v(" "),t("h3",{attrs:{id:"命名空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名空间","aria-hidden":"true"}},[e._v("#")]),e._v(" 命名空间")]),e._v(" "),t("p",[e._v("namespace "),t("em",[e._v("内部文件")])]),e._v(" "),t("pre",[t("code",[e._v('namespace Shapes {\n    export namespace Ploygons {\n        export class Triangle { }\n        export class Square { }\n    }\n}\n\nimport polygons = Shapes.Polygons;\nlet sq = new polygons.Square(); // Same as "new Shapes.Ploygons.Square()"\n')])])])}],!1,null,null,null);n.default=a.exports}}]);