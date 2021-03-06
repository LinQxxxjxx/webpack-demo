## webpack从0到1-结语
> 大概就谈到这里了，回顾总结一下吧。  
> git仓库：[webpack-demo](https://github.com/Ewall1106/webpack-demo)

### 1、几点总结
- 到这里，基本上我们对于整个webpack是干什么的，可以做些什么事情，一些基本的配置应该是搞清楚了。
- 回顾一下前面章节的内容，大概有这么些东西。
![](https://raw.githubusercontent.com/Ewall1106/webpack-demo/master/docs/images/chapter18_1.png)


### 2、要求进步

- 如果要进一步的学习，我要求进步，我们可以看vue脚手架生成项目后的关于webpack的配置，或者react脚手架生成的项目配置。
- 先说下`vue`的，`vue-cli3.x`后生成的项目目录是无比的整洁，大大减小了小白上手的门槛，一部分原因就是它把`webpack`的设置都内部化处理了，只向外暴露了可以配置[webpack的api](https://cli.vuejs.org/zh/config/)，要看它的`webpack`设置的话，
    - 可以使用命令`vue inspect > output.js`让它生成一个`webpack`设置的映射文件，但是不太好看，
    - 第二种方案呢，就是看`vue-cli2.x`脚手架生成的项目，虽然也没有过时，但是总给我一种out了的感觉，这样的话，达不到紧跟潮流的目的。

- 但是`react`就不同了，虽然我本人对`react`生态语法啊什么的也不是很熟，工作中也主要是使用`vue`，但是现在你去看看它的webpack配置还是没问题的，也是通过`inspect`命令：
    - 虽然和`vue-cli3.x`思想一样都默认把`webpack`的配置项隐藏了，项目都比较整洁，减少新手入门门槛，但是当执行命令的时候展示的是完整的`webpack`配置，不是像`vue`一样只是生成个映射文件。
    - 第二个就是`react`的`webpack`配置有注释啊！！！！！这个就很nice了。


### 3、几点感想

- 这十几篇文章还是花了我一定的时间的，希望能对你有帮助，为什么我愿意花这么多时间去做这件事呢，一方面的话是为了总结自己的知识、温故知新；另一面是因为自己想回馈的一种意愿吧，它驱使着我愿意花时间精力来分享一些自己的所思所学。
- 我是互联网环境下成长起来的人，本科也不是读的计算机相关专业，前端知识的学习都是在网上工作中学到的，所以说我是互联网时代的受益者，一个回答，一篇解释，网上很多陌生人帮助过我，在这里希望我也能帮助到你，我觉得这是一件有意义且有价值的事情吧，有一天也许我不在前端这个领域中了，但是互联网还是会一直留下我的这些文字痕迹，影响着看到这些文字的屏幕前的你，还是挺有意思的。