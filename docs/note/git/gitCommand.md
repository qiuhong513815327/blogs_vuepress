
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