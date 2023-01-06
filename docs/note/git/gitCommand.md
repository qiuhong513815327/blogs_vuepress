
# 基本命令

## 修改当前全局的用户名和邮箱
- **git config  --global user.name** 你的目标用户名
- **git config  --global user.email** 你的目标邮箱名
修改当前的project的用户名和邮箱则直接去掉 **global** 就可以了，**globa** 代表全局

## 增加/删除文件
- 添加指定文件到暂存区，文件之间以空格隔开  **git add file1 file2 ...**
- 也可以多次 **git add file1      git add file2**
- 添加指定目录到暂存区，包括子目录 **git add** **文件夹名**

## 代码提交
提交暂存区到仓库区 **git commit -m 'add new file'**

## 分支
- 列出所有本地分支** git branch**
- 列出所有远程分支 **git branch -r**
- 新建一个分支，但依然停留在当前分支 **git branch 分支名**
- 新建一个分支，并切换到该分支 **git checkout -b 分支名**
- 合并指定分支到当前分支 **git merge 分支名**
- 删除分支** git branch -d** **分支名**
- 删除远程分支 **git push origin --delete 分支名**

## 版本回退

- **git log**显示从最近到最远的提交日志。每一次提交都有对应的 **commit id** 和 **commit message**。
- **git - -reset --hard id  **根据 id 回退到指定的版本，我们已经根据** git log** 命令看到了所有的提交的信息，我以回退到 **个人模块修改包引入顺序** 版本，即 **commit id** 
- 这个时候突然又发现不需要回退了，刚才那些消失的代码又要重新找回来了，这个时候就可以用 **git reflog**查看命令历史，查找到你要的 **操作id**，依旧使用 上文说的 **git reset --hard id**。又回退到当初一模一样的版本啰！

## 查看信息
- 显示有变更的文件**git status**
- 显示当前分支的版本历史**git log**
- 显示指定文件是什么人在什么时间修改过 **git blame file**
- 显示暂存区和工作区的代码差异 **git diff**
- 显示暂存区和上一个**commit**的差异**git diff --cached file**
- 显示工作区与当前分支最新commit之间的差异 **git diff HEAD**

## 撤销已提交的commit重新提交，版本回滚
1. 使用**git log -n 3 --stat**命令，可以查看最近3次提交的详细信息，并且会显示每次**commit**的值。
- 在bash里输入**wq**退出**log**状态；
2. 接着使用命令来回到某次提交：**git reset --soft** 某次**commit**的值。
- 如果想要连着add也撤销的话，**--soft**改为 **--hard**；
- 如果是要撤销本地最后一次**commit**可以使用：**git reset --soft HEAD^**；
- **HEAD^**  表示上一个版本，即上一次的**commit**，也可以写成**HEAD~1**，如果进行两次的**commit**，想要都撤回，可以使用**HEAD~2**；
3. 撤销完成后现在把本地的**push**提交到远程仓库。
**结束！**

> 
> 
另外一点，如果**commit**注释写错了，先要改一下注释，有其他方法也能实现，如：**git commit --amend**

## git commit --amend 用法详解
这时终端里会出现以下内容：
![image.png](/git/gitCode1.png)<br />
其中，**second commit**是你上次提交的描述，下面是一下说明信息，有告诉你上次提交的文件信息等等，可忽略。接下来你要是想修改描述信息的话。光标移动到commit位置，直接键入enter，此时进入了输入模式，变成这样子：<br />
![image.png](/git/gitCode2.png)<br />
可用键盘上下键转到描述所在的那一行，然后进行修改：<br />
![image.png](/git/gitCode3.png)<br />
修改完成后，按下 Esc键退出编辑模式，在键入** :wq **回车退出并保存修改，完成提交。

## 当切换分支，不想提交代码时，可以使用暂存到本地
**git stash** 暂存到本地<br />
**git stash pop** 或者 **git stash apply** 放出暂存的代码到本地

## 创建本地分支并关联远程某个分支
**git fetch origin 远程分支名:本地分支名    **此时会将远程分支的代码拉到当前分支，但是使用**git branch**还不能看到当前这个分支名，使用**git checkout** **分支名**切换到这个分支，这样就可以看到刚刚创建的这个分支，在推送这个分支到远程**git push origin 分支名**
## 创建本地分支并推送远程
切换到主分支**git pull**，接着**git branch 分支名**，推送到远程**git push origin 分支名**

## 修改上一次的commit信息 
**git commit --amend -m 'xxx'**

## 克隆代码下来只有一个master分支，假如需要拉取远程的dev分支开发则需要用到以下命令
**git checkout -b dev origin/dev**

- 在这之前可以用命令**git remote -v**查下本地是否有和远程仓库关联
- 如果没有需要手动去关联**git remote add origin xxxx(你远程分支的git仓库地址)**
- 完成以上操作也可以查看下本地是否有远程分支**git branch -r**
- 如果没有则可以使用**git fetch origin dev**取回**origin**主机的**dev**分支
- 有则直接使用**git checkout -b dev origin/dev** <br />

## 为了可以直接使用git pull命令，而不用去git pull origin 远程分支，可以直接用关联命令
**git branch --set-upstream-to=origin/feature feature**
