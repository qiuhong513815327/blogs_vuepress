# 工作区、暂存区、版本库之间的关系
 在初始化git版本库之后会生成一个隐藏的文件 .git ，可以将该文件理解为git的版本库 repository，而我们自己建立的项目文件夹即工作区 working directory ,在.git 文件夹里面还有很多文件，其中有一个index 文件 就是暂存区也可以叫做 stage ,git还为我们自动生成了一个分支master以及指向该分支的指针head ,如下图 
![image.png](/git/gitbase.png)
平时我们使用的命令git add file1 是把文件从工作区提交到暂存区，git commit -m "prompty" file1 是把文件从暂存区提交到了分支master下面，这里因为只有一个分支master，就提交到master上了




